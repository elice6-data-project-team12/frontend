import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Button, Box, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import API from 'API';
import ChallengeIsJoin from './components/ChallengeItems/ChallengeIsJoin';
import ChallengeDetail from './components/ChallengeItems/ChallengeDetail';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  console.log('ChallengeDetail params: ', id);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        console.log('ChallengeDetailPage Start...');
        // const response = await API.get('/challenge', { challenge_id: id });
        const response = await axios.get(
          `http://localhost:5000/api/challenge/${id}`
        );
        setChallenge(response.data.data[0]);
        console.log('DataPage selecting detail:', response.data);
      } catch (error) {
        console.log('Error selecting data:', error);
      }
    };
    fetchChallenge();
  }, [id]);

  // challenge 객체가 정의되어 있는지 확인
  // if (!challenge) return <div>Loading...</div>;
  if (challenge === null) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <ChallengeDetail {...challenge} />
      </div>
    </div>
  );
};

export default ChallengeDetailPage;
