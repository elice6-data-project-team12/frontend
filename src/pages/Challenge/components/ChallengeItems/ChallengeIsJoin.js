import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Grid } from '@mui/material';
import API from 'API';

const ChallengeIsJoin = ({ title, challenge_id }) => {
  const [isJoined, setIsJoined] = useState('');
  const [isDeleted, setDeleted] = useState('');
  const [myChallenge, setMychallenge] = useState('');
  const apiUrl = `/api/challenge/participation`;

  // 참여중이 아니면 myChallenge 값 0
  useEffect(() => {
    const getJoinStatus = async () => {
      try {
        const response = await API.get(apiUrl);
        const list = response.data.data.filter(list => {
          return list.title === title;
        });
        setMychallenge(list.length);
      } catch (error) {
        console.log('Error JoinedStatus', error);
      }
    };
    getJoinStatus();
  }, []);

  const handleJoinClick = () => {
    setIsJoined(true);
    // sendJoinStatus();
  };
  const handleDelClick = () => {
    setIsJoined(false);
    // sendJoinStatus();
  };

  // const sendJoinStatus = async () => {
  //   const requestData = {
  //     challenge_id: String(challenge_id),
  //   };

  //   const method = isJoined ? 'DELETE' : 'POST';

  //   try {
  //     const response = await API({
  //       method: method,
  //       url: apiUrl,
  //       data: requestData,
  //     });
  //   } catch (error) {
  //     console.error('isJoined API request failed:', error);
  //   }
  // };

  useEffect(() => {
    const sendJoinStatus = async () => {
      const method = isJoined ? 'POST' : 'DELETE';

      try {
        const response = await API({
          method: method,
          url: apiUrl,
          data: {
            challenge_id: String(challenge_id),
          },
        });
        console.log('isJoined API request succeeded:', response.data);
      } catch (error) {
        console.error('isJoined API request failed:', error);
      }
    };
    sendJoinStatus();
  }, [isJoined]);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Button
            variant="contained"
            value={isJoined}
            color={isJoined ? 'secondary' : 'primary'}
            onClick={handleJoinClick}
            sx={{
              mt: 2,
              width: '100%',
            }}
          >
            챌린지 참여하기
          </Button>
          <Button
            variant="contained"
            value={isJoined}
            color={isJoined ? 'secondary' : 'primary'}
            onClick={handleDelClick}
            sx={{
              mt: 2,
              width: '100%',
            }}
          >
            챌린지 취소하기
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChallengeIsJoin;
