import React from 'react';
import styled from 'styled-components';
import MyChallenge from './MyChallenge';
import ChallengeList from './ChallengeList';
import { Container } from '@mui/material';

const ChallengePage = () => {
  return (
    <StyledContainer maxWidth="lg">
      {localStorage.getItem('userToken') ? <MyChallenge /> : null}
      <ChallengeList />
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

export default ChallengePage;
