import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';
import API from 'API.js';

//TODO 진행률60%
// Backend 연동테스트 (상태값별 챌린지 리스트: challengeStatus)
// 스크롤여부
// 챌린지생성버튼이동시 로그인여부 확인
// CSS 작업

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeStatus, setchallengeStatus] = useState('progressing');

  const handleStatusClick = selectedStatus => {
    setchallengeStatus(selectedStatus);
  };

  useEffect(() => {
    console.log('challengeStatus :', challengeStatus);
    const fetchChallenges = async () => {
      try {
        const response = await API.get(
          `api/challenge/status?status=${challengeStatus}`
        );
        console.log(response);
        setChallenges(response.data.data);
        console.log('challengeStatus selecting data :', response.data);
      } catch (error) {
        console.log('Error challengeStatus selecting data', error);
      }
    };
    fetchChallenges();
  }, [challengeStatus]);

  // challenge 객체가 정의되어 있는지 확인
  // if (!challenge) return <div>Loading...</div>;
  if (challenges.length === 0) return <div>Loading...</div>;
  if (challenges.length === null) return <div>Loading...</div>;

  return (
    <div>
      <RowContainer>
        <ColumnTitle>
          <Title>전체챌린지</Title>
        </ColumnTitle>
        <ColumnTitle>
          <Button
            color="primary"
            variant={challengeStatus === 'progress' ? 'contained' : 'outlined'}
            onClick={() => handleStatusClick('progressing')}
          >
            진행중
          </Button>
        </ColumnTitle>
        <ColumnTitle>
          <Button
            color="primary"
            variant={
              challengeStatus === 'recruiting' ? 'contained' : 'outlined'
            }
            onClick={() => handleStatusClick('recruiting')}
          >
            모집중
          </Button>
        </ColumnTitle>
        <ColumnTitle>
          <Button
            color="primary"
            variant={challengeStatus === 'completed' ? 'contained' : 'outlined'}
            onClick={() => handleStatusClick('ended')}
          >
            완료
          </Button>
        </ColumnTitle>
        <ColumnTitle>
          <Link to="/challenge/create">
            <Button color="primary">새 챌린지 생성하기</Button>
          </Link>
        </ColumnTitle>
      </RowContainer>
      {challenges.map(challenge => (
        <ChallengeItem
          key={challenge.challenge_id}
          id={challenge.challenge_id}
          title={challenge.title}
          description={challenge.description}
          image={challenge.image}
          recruit_person={challenge.recruit_person}
          recruit_start={challenge.recruit_start}
          recruit_end={challenge.recruit_end}
          challengeStatus={challenge.isDeleted}
          progress_start={challenge.progress_start}
          progress_end={challenge.progress_end}
        />
      ))}
    </div>
  );
};

const ChallengeItem = ({
  id,
  title,
  description,
  image,
  recruit_person,
  recruit_start,
  recruit_end,
  challengeStatus,
  progress_start,
  progress_end,
}) => {
  return (
    <RowContainer>
      <ColumnList>
        <Link to={`/challenge/detail/${id}`}>
          <img width="300px" height="200px" src={image} alt={title} />
        </Link>
      </ColumnList>
      <ColumnList>
        <Link to={`/challenge/detail/${id}`}>
          <Title>{title}</Title>
          <div>{description}</div>
          <br />
          <div>
            모집기간 : {recruit_start} ~ {recruit_end}
          </div>
          <div>모집인원 : {recruit_person}</div>
          <div>
            참여기간: {progress_start} ~ {progress_end}
          </div>
        </Link>
      </ColumnList>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  //gap: 24px;
  width: 80%;
  margin-top: 100px;
  margin-left: 150px;
  //margin-bottom: 24px;
  //border: 5px solid blue;
  top: 50%;
  left: 50%;
  }
`;

const ColumnTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //border: 5px solid red;
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column; 
  //border: 5px solid yellow;

  &:first-child {
    flex: 1;
    //justify-content: flex-start; 
    justify-content: center; 
    align-items: center; 
  }

  &:last-child {
    flex: 2;
    //justify-content: flex-end; 
    justify-content: center; 
    align-items: left; 
    border-radius: 25px;
    background: #f2eee3;
    //border: 5px solid orange;
    padding-left: 20px; 
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

export default ChallengeList;
