import React from 'react';
import styled from 'styled-components';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';
import axios from 'axios';

const ChallengeUpdatePage = ({ challenge }) => {
  return (
    <div>
      <ChallengeForm actionType="update" />
    </div>
  );
};

export default ChallengeUpdatePage;
