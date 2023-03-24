import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Grid } from '@mui/material';
import API from 'API';

const ChallengeIsJoin = () => {
  const { id } = useParams();
  const [isJoined, setIsJoined] = useState('');

  const apiUrl = `/api/challenge/participation`;

  useEffect(() => {
    const getJoinStatus = async () => {
      try {
        const response = await API.get(apiUrl, id);
        setIsJoined(!!response.data);
        console.log('response.data', !!response.data);
      } catch (error) {
        console.log('Error JoinedStatus', error);
      }
    };
    getJoinStatus();
  }, []);

  const handleJoinClick = () => {
    setIsJoined(prevIsJoined => !prevIsJoined);
    sendJoinStatus();
  };

  const sendJoinStatus = async () => {
    const requestData = {
      challenge_id: id,
    };

    const method = isJoined ? 'DELETE' : 'POST';

    console.log('method:', method);
    console.log('apiUrl:', apiUrl);
    console.log('requestData', requestData);
    try {
      const response = await API({
        method: method,
        url: apiUrl,
        data: requestData,
      });
      console.log('isJoined API request succeeded:', response.data);
    } catch (error) {
      console.error('isJoined API request failed:', error);
    }
  };

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
              mt: 2,
              width: '100%',
            }}
          >
            {isJoined ? '챌린지 참여취소' : '챌린지 참여하기'}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChallengeIsJoin;
