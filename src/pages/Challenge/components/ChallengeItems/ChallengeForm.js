import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputLabel, TextField, Button } from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import axios from 'axios';

// onCreate, onUpdate, onDelete, challenge (챌린지정보) props
const ChallengeForm = ({ actionType }) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [errors, setErrors] = useState({});
  const [challenge, setChallenge] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    recruitment_personnel: '',
    recruit_start: currentDate,
    recruit_end: currentDate,
    delete: 'N',
    progress_start: currentDate,
    progress_end: currentDate,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    let newValue = files ? files[0] : value;

    // 유효성 검사 테스트중
    validate();

    setChallenge(prevChallenge => ({
      ...prevChallenge,
      [name]: newValue,
    }));
  };

  const handleImageChange = image => {
    setChallenge(prevChallenge => ({
      ...prevChallenge,
      image: image,
    }));
  };

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      console.log('Challenge object:', challenge);
      const response = await axios.post(
        'http://localhost:5000/api/challenge/create',
        // '/api/challenge/create',
        challenge,
        { headers }
      );
      console.log('Data created:', response.data);
    } catch (error) {
      console.log('Error creating data:', error);
    }

    // 등록 코드 추가
    // setChallenge('');

    alert('등록이 완료되었습니다!');
  };

  const validate = () => {
    const errors = {};

    if (!challenge.title) {
      errors.title = '챌린지명을 입력해주세요.';
    }

    if (!challenge.description) {
      errors.description = '간략한 설명을 입력해주세요.';
    }

    if (!challenge.recruit_start) {
      errors.recruit_start = '모집 시작일을 선택해주세요.';
    }

    if (!challenge.recruit_end) {
      errors.recruit_end = '모집 종료일을 선택해주세요.';
    } else if (
      challenge.recruit_start &&
      challenge.recruit_start > challenge.recruit_end
    ) {
      errors.recruit_end = '모집 종료일은 모집 시작일 이후로 선택해주세요.';
    }

    if (!challenge.progress_start) {
      errors.progress_start = '참여 시작일을 선택해주세요.';
    } else if (
      challenge.recruit_start &&
      challenge.progress_start < challenge.recruit_start
    ) {
      errors.progress_start = '참여 시작일은 모집 시작일 이후로 선택해주세요.';
    }

    if (!challenge.progress_end) {
      errors.progress_end = '참여 종료일을 선택해주세요.';
    } else if (
      challenge.progress_start &&
      challenge.progress_start > challenge.progress_end
    ) {
      errors.progress_end = '참여 종료일은 참여 시작일 이후로 선택해주세요.';
    } else if (
      challenge.recruit_end &&
      challenge.progress_end > challenge.recruit_end
    ) {
      errors.progress_end = '참여 종료일은 모집 종료일 이전으로 선택해주세요.';
    }

    setErrors(errors);

    return errors;
  };

  return (
    <div>
      <RowContainer>
        <ColumnTitle>
          <Title>챌린지 생성</Title>
        </ColumnTitle>
      </RowContainer>
      <FormWrapper onSubmit={handleSubmitForm}>
        <RowWrapper>
          <ColumnWrapper>
            <ImageUpload onChange={handleImageChange} />
          </ColumnWrapper>
          <ColumnWrapper>
            <RowWrapper>
              <InputLabel htmlFor="title">챌린지명</InputLabel>
            </RowWrapper>
            <RowWrapper>
              <TextField
                label=""
                variant="outlined"
                id="title"
                name="title"
                value={challenge.title}
                onChange={handleChange}
                // onChange={(event) => setTitle(event.target.value)}
                size="small"
                fullWidth
                required
              />
            </RowWrapper>
            <br />
            <RowWrapper>
              <InputLabel htmlFor="description">간략설명</InputLabel>
            </RowWrapper>
            <RowWrapper>
              <TextField
                label=""
                id="description"
                name="description"
                value={challenge.description}
                onChange={handleChange}
                // onChange={(event) => setDescription(event.target.value)}
                fullWidth
                multiline
              />
            </RowWrapper>
            <br />
            <RowWrapper>
              <div>
                <InputLabel htmlFor="recruit_start">모집기간</InputLabel>
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="recruit_start"
                  name="recruit_start"
                  value={challenge.recruit_start}
                  onChange={handleChange}
                  size="small"
                />
                ~
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="recruit_end"
                  name="recruit_end"
                  value={challenge.recruit_end}
                  onChange={handleChange}
                  error={!!errors.recruit_end}
                  helperText={errors.recruit_end}
                  size="small"
                />
              </div>
              <br />
              <div>
                <InputLabel htmlFor="recruitment_personnel">
                  모집인원
                </InputLabel>
                <TextField
                  label=""
                  type="number"
                  id="recruitment_personnel"
                  name="recruitment_personnel"
                  value={challenge.recruitment_personnel}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  inputProps={{ min: 0 }}
                />
              </div>
            </RowWrapper>
            <br />
            <RowWrapper>
              <div>
                <InputLabel htmlFor="progress_start">참여기간</InputLabel>
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="progress_start"
                  name="progress_start"
                  value={challenge.progress_start}
                  onChange={handleChange}
                  size="small"
                />
                ~
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="progress_end"
                  name="progress_end"
                  value={challenge.progress_end}
                  onChange={handleChange}
                  size="small"
                />
              </div>
            </RowWrapper>
            <br />
            <RowWrapper>
              <InputLabel htmlFor="content">소개</InputLabel>
            </RowWrapper>
            <RowWrapper>
              <TextField
                label=""
                variant="outlined"
                id="content"
                name="content"
                value={challenge.content}
                onChange={handleChange}
                size="small"
                row={10}
                fullWidth
                multiline
              />
            </RowWrapper>
          </ColumnWrapper>
        </RowWrapper>

        <RowButtonWrapper>
          <Link to="/challenge">
            <Button variant="contained" color="primary">
              취소
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitForm}
          >
            등록
          </Button>
        </RowButtonWrapper>

        <button type="submit">
          {actionType === 'create' ? 'Create' : 'Update'}
        </button>
      </FormWrapper>
    </div>
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

export default ChallengeForm;
