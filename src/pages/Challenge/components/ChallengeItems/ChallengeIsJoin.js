import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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
import API from 'API';

const ChallengeIsJoin = () => {
  const { id } = useParams();
  const [isJoined, setIsJoined] = useState('');
  const [myChallenge, setMychallenge] = useState({});
  const apiUrl = `/api/challenge/participation`;

  // 참여중이면 true, 아니면 false
  useEffect(() => {
    const getJoinStatus = async () => {
      try {
        const response = await API.get(apiUrl);
        const list = response.data.data.find(
          list => list.challenge_id === Number(id)
        );
        setMychallenge(list);
      } catch (error) {
        console.log('Error JoinedStatus', error);
      }
    };
    getJoinStatus();
  }, []);

  // 참여하기 : 참여테이블 POST
  // 참여취소 : 참여테이블 DELECT
  const handleJoinClick = () => {
    if (myChallenge) {
      setIsJoined(false);
    } else {
      setIsJoined(true);
    }
    // setIsJoined(prevIsJoined => !prevIsJoined);
    // sendJoinStatus();
  };

  useEffect(() => {
    const sendJoinStatus = async () => {
      const requestData = {
        challenge_id: id,
      };
      console.log(id);
      const method = isJoined ? 'POST' : 'DELETE';

      try {
        const response = await API({
          method: method,
          url: apiUrl,
          data: {
            challenge_id: '66',
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
    <Grid>
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
          color={myChallenge ? 'secondary' : 'primary'}
          onClick={handleJoinClick}
          sx={{ mt: 2 }}
        >
          {myChallenge ? '참여취소' : '참여하기'}
        </Button>
      </Box>
    </Grid>
  );
};

export default ChallengeIsJoin;
