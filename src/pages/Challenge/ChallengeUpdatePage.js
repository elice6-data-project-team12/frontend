import React from 'react';
import styled from 'styled-components';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';

const ChallengeUpdatePage = ({ challenge }) => {
  return (
    <div>
      <ChallengeForm actionType="update" />
    </div>
  );
};

export default ChallengeUpdatePage;
