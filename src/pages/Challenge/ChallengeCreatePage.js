import React from 'react';
import styled from 'styled-components';
import ChallengeForm from './components/ChallengeItems/ChallengeForm';
import axios from 'axios';

//TODO 진행률60%
// Backend 연동테스트 (image 처리에 대한 테스트) 2023-03-18
// 로그인상태에서 열리는 화면 - 로그인화면
// 상태구분을 위한 모집기간, 참여기간 유효값 설정
// 수정/취소 기능
// CSS 작업 (+레이아웃+기간UI)

const ChallengeCreatePage = () => {
  return (
    <div>
      <ChallengeForm actionType="create" />
    </div>
  );
};

export default ChallengeCreatePage;
