import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import API from 'API';

const ChallengeIsJoin = () => {
  const { id } = useParams();
  const [isJoined, setIsJoined] = useState(false);

  console.log('ChallengeDetailPage params: ', id);

  // 참여하기 : 참여테이블 POST
  // 참여취소 : 참여테이블 DELECT
  const handleClickJoined = () => {
    setIsJoined(prevIsJoined => !prevIsJoined);
  };

  useEffect(() => {
    const apiUrl = `/api/challenge/participation`;
    const requestData = {
      chellengeid: id,
    };

    console.log('requestData: ', requestData);
    const method = isJoined ? 'POST' : 'DELETE';

    API({
      method: method,
      url: apiUrl,
      data: requestData,
    })
      .then(response => {
        console.log('isJoined API request succeeded:', response.data);
      })
      .catch(error => {
        console.error('isJoined API request failed:', error);
      });
  }, [isJoined]);

  return (
    <ChallengeJoinBox>
      <Button
        variant="contained"
        color={isJoined ? 'secondary' : 'primary'}
        onClick={handleClickJoined}
        sx={{ mt: 2 }} // 버튼과 제목 사이 간격 조정
      >
        {isJoined ? '참여취소' : '참여하기'}
      </Button>
    </ChallengeJoinBox>
  );
};

const ChallengeJoinBox = styled.div``;

export default ChallengeIsJoin;
