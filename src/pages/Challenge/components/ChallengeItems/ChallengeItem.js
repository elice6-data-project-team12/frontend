import React from 'react';
import styled from 'styled-components';
import { InputLabel, Button } from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

// const ChallengeItem = ({
//   id,
//   title,
//   description,
//   content,
//   imageUrl,
//   recruitment_personnel,
//   recruit_start,
//   recruit_end,
//   deleteYN,
//   created_at,
//   updated_at,
//   progress_start,
//   progress_end,
// }) => {
const ChallengeItem = challenge => {
  console.log('ChallengeItem challenge', challenge);

  // challenge 요소 렌더링
  // challenge 객체에서 속성들 추출
  const {
    id,
    title,
    description,
    content,
    image,
    recruitment_personnel,
    recruit_start,
    recruit_end,
    deleteYN,
    created_at,
    updated_at,
    progress_start,
    progress_end,
  } = challenge || {};

  // 화면 렌더링
  return (
    <>
      <RowContainer>
        <ColumnTitle>
          <Title>챌린지 상세</Title>
        </ColumnTitle>
      </RowContainer>

      <FormWrapper>
        <RowWrapper>
          <ColumnWrapper>
            <div style={{ backgroundColor: 'lightgrey', padding: 10 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}
              >
                <div>
                  <img
                    src={image}
                    alt="{title}"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
            </div>
          </ColumnWrapper>
          <ColumnWrapper>
            <RowWrapper>
              <InputLabel htmlFor="title">챌린지명</InputLabel>
            </RowWrapper>
            <RowWrapper>{title}</RowWrapper>
            <br />
            <RowWrapper>
              <InputLabel htmlFor="description">간략설명</InputLabel>
            </RowWrapper>
            <RowWrapper>{description}</RowWrapper>
            <br />
            <RowWrapper>
              <div>
                모집기간 : {recruit_start} ~ {recruit_end}
              </div>
              <div>모집인원 : {recruitment_personnel}</div>
              <br />
            </RowWrapper>
            <br />
            <RowWrapper>
              <div>
                참여기간 : {progress_start} ~ {progress_end}
              </div>
            </RowWrapper>
            <br />
            <RowWrapper>
              <InputLabel htmlFor="content">소개</InputLabel>
            </RowWrapper>
            <RowWrapper>
              <div>{content}</div>
            </RowWrapper>
          </ColumnWrapper>
        </RowWrapper>

        <RowButtonWrapper>
          <Link to="/challenge">
            <Button variant="contained" color="primary">
              확인
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleSubmitForm}
          >
            수정
          </Button>
        </RowButtonWrapper>

        {/* <button type="submit">
            {actionType === 'create' ? 'Create' : 'Update'}
          </button> */}
      </FormWrapper>
    </>
  );
};

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Container = styled.div`
//   position: relative;
// `;

const RowContainer = styled.div`
  //position: relative;
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

const ColumnTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //border: 5px solid red;
`;

const FormWrapper = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  gap: 24px;
  margin-top: 80px;
  margin-left: 30px;
  //border: 5px solid yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  //border: 5px solid red;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //border: 5px solid yellow;

  &:first-child {
    flex: 1;
    justify-content: center;
    align-items: center;
    //justify-content: flex-start;
  }

  &:last-child {
    flex: 2;
    justify-content: center;
    align-items: left;
    padding-left: 10px;
    //border-radius: 25px;
    //background: #f2eee3;
  }
`;

const RowButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  gap: 24px;
  //justify-content: space-between;
  justify-content: center;
  align-items: left;
  //border: 5px solid green;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  // margin-bottom: 1rem;
`;

const DetailImage = styled.div`
  background-position: center center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border: 5px solid green;
`;

export default ChallengeItem;
