import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import API from 'API.js';

//TODO 진행률60%
// Backend 연동테스트 (상태값별 챌린지 리스트: challengeStatus)
// 스크롤여부
// 챌린지생성버튼이동시 로그인여부 확인
// CSS 작업

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeStatus, setchallengeStatus] = useState('progress');

  const handleClick = selectedchallengeStatus => {
    setchallengeStatus(selectedchallengeStatus);
  };

  useEffect(() => {
    API.get('/challenge')
      .then(Response => {
        setChallenges(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         '/api/challenge/post',
  //         challengeStatus
  //       );
  //       setChallenges(response.data);
  //       console.log('Data selected:', response.data);
  //     } catch (error) {
  //       console.log('Error selecting data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [challengeStatus]);

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
            onClick={() => handleClick('progress')}
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
            onClick={() => handleClick('recruiting')}
          >
            모집중
          </Button>
        </ColumnTitle>
        <ColumnTitle>
          <Button
            color="primary"
            variant={challengeStatus === 'completed' ? 'contained' : 'outlined'}
            onClick={() => handleClick('completed')}
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
      {challenges.map(data => (
        <ChallengeItem
          key={data.challenge_id}
          id={data.challenge_id}
          title={data.title}
          description={data.description}
          imageUrl={data.image}
          recruitment_personnel={data.recruitment_personnel}
          recruit_start={data.recruit_start}
          recruit_end={data.recruit_end}
          challengeStatus={data.delete}
          start_date={data.start_date}
          end_date={data.end_date}
        />
      ))}
    </div>
  );
};

const ChallengeItem = ({
  id,
  title,
  description,
  imageUrl,
  recruitment_personnel,
  recruit_start,
  recruit_end,
  challengeStatus,
  start_date,
  end_date,
}) => {
  return (
    <RowContainer>
      <ColumnList>
        <Link to={`/challenge/detail/${id}`}>
          <img width="300px" height="200px" src={imageUrl} alt={title} />
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
          <div>모집인원 : {recruitment_personnel}</div>
          <div>
            참여기간: {start_date} ~ {end_date}
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

// const handlechallengeStatus = async e => {
//   e.preventDefault();
//   try {
//     //const response = await axios.get('/api/challenge/post/');
//     const response = await axios.get('/api/challenge/', challengeStatus);
//     console.log('Data selected list:', response.data);
//   } catch (error) {
//     console.error('Error selecting data:', error);
//     console.log('Error selecting data:', error);
//   }
// };

export default ChallengeList;
