import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyChallenge from './MyChallenge';
import ChallengeList from './ChallengeList';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const ChallengePage = () => {
  const [logined, setLogined] = useState('');
  const loginInfo = useSelector(state => {
    return state.userLogin;
  });

  useEffect(() => {
    setLogined(loginInfo);
  }, []);

  return (
    <StyledContainer maxWidth="lg">
      {logined.token ? (
        <MyChallenge />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: '100px',
          }}
        >
          <Box sx={{ p: '50px' }}>
            효도챌린지 서비스는 로그인이 필요한 서비스 입니다.
          </Box>
          <NavLink to="/user/login">
            <Button variant="contained">로그인 하러가기</Button>
          </NavLink>
        </Box>
      )}
      <ChallengeList />
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

export default ChallengePage;
