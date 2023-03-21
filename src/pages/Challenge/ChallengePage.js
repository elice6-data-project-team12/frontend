import React from 'react';
import styled from 'styled-components';
import MyChallenge from './MyChallenge';
import ChallengeList from './ChallengeList';
import { Button } from '@mui/material';

const ChallengePage = () => {
  return (
    <div>
      <MyChallenge />
      <ChallengeList />
    </div>
  );
};

export default ChallengePage;
