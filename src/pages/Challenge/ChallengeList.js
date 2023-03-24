import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Chip, Grid, Typography, ButtonBase, Box } from '@mui/material';
import API from 'API.js';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeStatus, setchallengeStatus] = useState('progressing');

  const handleStatusClick = selectedStatus => {
    setchallengeStatus(selectedStatus);
  };

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await API.get(
          `api/challenge/status?status=${challengeStatus}`
        );
        setChallenges(response.data.data);
      } catch (error) {
        console.log('Error ChallengeList', error);
      }
    };
    fetchChallenges();
  }, [challengeStatus]);

  if (challenges.length === 0 || challenges.length === null)
    return <div>Loading...</div>;

  return (
    <Box sx={{ marginTop: '7rem' }}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs sx={{ textAlign: 'right' }}>
          <Typography style={{ fontSize: '32px' }}>전체 챌린지</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            variant={
              challengeStatus === 'progressing' ? 'contained' : 'outlined'
            }
            onClick={() => handleStatusClick('progressing')}
            sx={{ width: '180px' }}
          >
            진행중
          </Button>
          <Button
            color="primary"
            variant={
              challengeStatus === 'recruiting' ? 'contained' : 'outlined'
            }
            onClick={() => handleStatusClick('recruiting')}
            sx={{ width: '180px' }}
          >
            모집중
          </Button>
          <Button
            color="primary"
            variant={challengeStatus === 'ended' ? 'contained' : 'outlined'}
            onClick={() => handleStatusClick('ended')}
            sx={{ width: '180px' }}
          >
            완료
          </Button>
        </Grid>
        <Grid item xs sx={{ textAlign: 'center' }}>
          <Link to="/challenge/create">
            <Chip
              label="새 챌린지 생성하기"
              sx={{ backgroundColor: '#F2BE5B' }}
            />
          </Link>
        </Grid>
      </Grid>
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
    </Box>
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
          <ButtonBase sx={{ width: 300, height: 180 }}>
            <Img alt={title} src={image} />
          </ButtonBase>
        </Link>
      </ColumnList>
      <ColumnList>
        <Link to={`/challenge/detail/${id}`}>
          <Title>{title}</Title>
          <div></div>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            모집기간 : {recruit_start} ~ {recruit_end}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            모집인원 : {recruit_person}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            참여기간: {progress_start} ~ {progress_end}
          </Typography>
        </Link>
      </ColumnList>
    </RowContainer>
  );
};

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '300px',
  maxHeight: '100%',
  borderRadius: '25px',
});

const RowContainer = styled('div')({
  display: 'flex',
  width: '80%',
  marginLeft: '50px',
  marginLeft: '150px',
  top: '50%',
  left: '50%',
});

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
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

export default ChallengeList;
