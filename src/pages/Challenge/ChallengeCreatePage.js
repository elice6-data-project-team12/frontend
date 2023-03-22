import React from 'react';
import styled from 'styled-components';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';

const ChallengeCreatePage = () => {
  return (
    <div>
      <ChallengeForm actionType="create" />
    </div>
  );
};

export default ChallengeCreatePage;
