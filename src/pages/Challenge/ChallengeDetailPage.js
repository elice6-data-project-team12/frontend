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
  const [challenge, setChallenge] = useState([]);

  console.log('ChallengeDetail params: ', id);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        console.log('ChallengeDetailPage Start...');
        // const response = await API.get('/challenge', { challenge_id: id });
        const response = await axios.get(
          `http://localhost:5000/api/challenge/${id}`
        );
        setChallenge(response.data);
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

const challengeData = {
  challenge_id: 1,
  title: '30일 동안 매일 10km 달리기',
  description: '30일 동안 매일 10km 달리는 챌린지입니다.',
  content:
    '건강과 체력을 위해 30일 동안 매일 10km를 달리는 챌린지에 참여하세요. 참여자들과 함께 운동을 즐기고 성취감을 느낄 수 있습니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  recruitment_personnel: 10,
  recruit_start: '2022-03-01',
  recruit_end: '2022-03-31',
  deleteYN: false,
  created_at: '2022-02-01',
  updated_at: '2022-03-01',
  start_date: '2022-04-01',
  end_date: '2022-04-30',
};

export default ChallengeDetailPage;
