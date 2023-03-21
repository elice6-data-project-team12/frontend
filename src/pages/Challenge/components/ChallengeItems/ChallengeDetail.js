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

      {/* <ChallengeItem {...challenge} /> */}
      <ChallengeItem {...challenge} />

      {/* <ChallengeIsJoin campaignId={props.campaignId} /> */}
      <ChallengeIsJoin />
      {/* <div>
        <ChallengeForm actionType="update" />
      </div> */}
    </div>
  );
};

export default ChallengeDetail;
