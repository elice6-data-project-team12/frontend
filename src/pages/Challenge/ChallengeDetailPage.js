import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Button, Box, Tabs, Tab } from '@mui/material';
import axios from 'axios';

//TODO 진행률50%
// Backend 연동테스트 (image 처리에 대한 테스트)
// CSS 작업 (+레이아웃+기간UI)
// 참여하기/참여취소 처리
// 자신이 등록한 챌린지일 경우 [수정] 버튼 보이도록 수정

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({});
  const [isJoined, setIsJoined] = useState(false);

  console.log('ChallengeDetailPage params: ', id);

  const handleClickJoined = () => {
    setIsJoined(prevIsJoined => !prevIsJoined);
  };

  useEffect(() => {
    const apiUrl = '/api/challenge/detail/';
    const requestData = {
      isJoined: isJoined,
    };

    axios
      .post(apiUrl, requestData)
      .then(response => {
        console.log('API request succeeded:', response.data);
      })
      .catch(error => {
        console.error('API request failed:', error);
      });
  }, [isJoined]);

  // const joinOrCancelEvent = useMutation(
  //   isJoined => {
  //     const apiUrl = 'https://example.com/api/endpoint';
  //     const requestData = {
  //       isJoined: isJoined,
  //     };
  //     return isJoined ? axios.post(apiUrl, requestData) : axios.delete(apiUrl);
  //   },
  //   {
  //     onSuccess: () => {
  //       console.log('API 호출에 성공했습니다.');
  //     },
  //     onError: () => {
  //       console.log('API 호출에 실패했습니다.');
  //     },
  //   }
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/challenge/detail/${id}`);
        setChallenge(response.data);
        console.log('Data selecting detail:', response.data);
      } catch (error) {
        console.log('Error selecting data:', error);
      }
    };
    fetchData();
  }, [id]);

  const [value, setValue] = useState(0);
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  const handleChange = e => {
    //
  };
  return (
    <div>
      <RowContainer>
        <Column>
          <Title>상세챌린지페이지</Title>
        </Column>
      </RowContainer>
      {sampleData.map(data => (
        // {challenge.map(data => (
        <ChallengeItem
          key={data.id}
          id={data.id}
          title={data.title}
          description={data.description}
          content={data.content}
          imageUrl={data.image}
          recruitment_personnel={data.recruitment_personnel}
          recruit_start={data.recruit_start}
          recruit_end={data.recruit_end}
          deleteYN={data.delete}
          created_at={data.created_at}
          updated_at={data.updated_at}
          start_date={data.start_date}
          end_date={data.end_date}
        />
      ))}
      <RowContainer>
        <Button
          variant="contained"
          color={isJoined ? 'secondary' : 'primary'}
          onClick={handleClickJoined}
        >
          {isJoined ? '참여취소' : '참여하기'}
        </Button>
      </RowContainer>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="소개" />
          <Tab label="후기" />
        </Tabs>
      </Box>
    </div>
  );
};

const ChallengeItem = ({
  id,
  title,
  description,
  content,
  imageUrl,
  recruitment_personnel,
  recruit_start,
  recruit_end,
  deleteYN,
  created_at,
  updated_at,
  start_date,
  end_date,
}) => {
  return (
    <RowContainer>
      <Link to={`/challenge/detail`}></Link>
      <ColumnList>
        <Link to="/challenge/detail">
          <img width="300px" height="200px" src={imageUrl} alt={title} />
        </Link>
      </ColumnList>
      <ColumnList>
        <Link to="/challenge/detail">
          <Title>챌린지명: {title}</Title>
          <div>{description}</div>
          <div>{content}</div> */
          <div>{imageUrl}</div>
          <br />
          <div>
            모집기간 : {recruit_start} ~ {recruit_end}
          </div>
          <div>모집인원 : {recruitment_personnel}</div>
          <div>{deleteYN}</div>
          <div>{created_at}</div>
          <div>{updated_at}</div>
          <div>
            참여기간: {start_date} ~ {end_date}
          </div>
        </Link>
      </ColumnList>
    </RowContainer>
  );
};

// const RowContainer = styled.div`
//   display: flex;
//   gap: 24px;
//   width: 100%;
//   margin-bottom: 24px;
//   //border: 5px solid blue;
// `;

const RowContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 80%;
  margin-top: 150px;
  margin-left: 150px;
  margin-bottom: 24px;
  //border: 5px solid blue;
  top: 50%;
  left: 50%;
`;

const Column = styled.div`
  //flex: 1;
  display: flex;
  flex-direction: column;
  border: 5px solid red;

  // &:first-child {
  //   flex: 1; //첫번째 열너비
  //   justify-content: flex-start; /* 왼쪽 정렬 */
  //   border: 5px solid yellow;
  // }

  // &:second-child {
  //   flex: 1; //첫번째 열너비
  //   justify-content: flex-end; /* 오른쪽 정렬 */
  //   border: 5px solid yellow;
  // }

  // &:third-child {
  //   flex: 1; //첫번째 열너비
  //   justify-content: flex-end; /* 오른쪽 정렬 */
  //   border: 5px solid yellow;
  // }
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column; //세로방향배치
  //border: 5px solid red;

  &:first-child {
    flex: 1; //첫번째 열너비
    justify-content: flex-start; /* 왼쪽 정렬 */
    justify-content: center; //열 수직방향 배치
    align-items: center; //열 내부 요소 수직방향 배치
  }

  &:last-child {
    flex: 2; //첫번째 열너비
    justify-content: flex-end; /* 오른쪽 정렬 */
    justify-content: center; //열 수직방향 배치
    align-items: left; //열 내부 요소 수직방향 배치
    border-radius: 25px;
    background: #f2eee3;
    //border: 5px solid orange;
    padding-left: 20px; // 왼쪽 패딩 20px
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const sampleData = [
  {
    challenge_id: 1,
    title: '30일 동안 매일 10km 달리기',
    description: '30일 동안 매일 10km 달리는 챌린지입니다.',
    content:
      '건강과 체력을 위해 30일 동안 매일 10km를 달리는 챌린지에 참여하세요. 참여자들과 함께 운동을 즐기고 성취감을 느낄 수 있습니다.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    recruitment_personnel: 100,
    recruit_start: '2023-03-01',
    recruit_end: '2023-03-10',
    delete: 'N',
    created_at: '2023-02-20',
    updated_at: '2023-02-20',
    start_date: '2023-03-13',
    end_date: '2023-03-31',
  },
];

export default ChallengeDetailPage;
