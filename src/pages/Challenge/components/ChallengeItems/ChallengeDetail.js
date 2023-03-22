import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Button, Box, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import API from 'API';
import ChallengeItem from './ChallengeItem';
import ChallengeIsJoin from './ChallengeIsJoin';
import ChallengeForm from './ChallengeForm';

const ChallengeDetail = challenge => {
  console.log('ChallengeDetail challenge', challenge);

  return (
    <div>
      <div>상세챌린지페이지</div>
      <ChallengeItem {...challenge} />
      <Link to="/challenge/create">
        <Button color="primary">챌린지 수정 테스트</Button>
      </Link>
    </div>
  );
};

export default ChallengeDetail;
