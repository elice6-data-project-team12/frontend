import React from 'react';
import styled from 'styled-components';
import MyChallenge from './MyChallenge';
import ChallengeList from './ChallengeList';
import { Container } from '@mui/material';

const ChallengePage = () => {
  const isLoggedIn = !!localStorage.getItem('userToken');

  return (
    <StyledContainer maxWidth="lg">
      {isLoggedIn ? (
        <>
          <MyChallenge />
          <ChallengeList />
        </>
      ) : (
        <ChallengeList />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

export default ChallengePage;
