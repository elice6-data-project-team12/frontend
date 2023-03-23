import React from 'react';
import styled from 'styled-components';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';
import LoginPage from 'pages/Login/LoginPage';

const ChallengeCreatePage = () => {
  const isLoggedIn = !!localStorage.getItem('userToken');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div>
      <ChallengeForm actionType="create" />
    </div>
  );
};

export default ChallengeCreatePage;
