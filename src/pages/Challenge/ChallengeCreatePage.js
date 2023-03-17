import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputLabel, TextField, Button } from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import axios from 'axios';

//TODO 진행률60%
// Backend 연동테스트 (image 처리에 대한 테스트)
// 로그인상태에서 열리는 화면 - 로그인화면
// 수정/취소 기능
// CSS 작업 (+레이아웃+기간UI)

const ChallengeCreatePage = () => {
  const [challenge, setChallenge] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    recruitment_personnel: '',
    recruit_start: '',
    recruit_end: '',
    delete: 'N',
    start_date: '',
    end_date: '',
  });
  const [image, setImage] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setChallenge(prevChallenge => ({
          ...prevChallenge,
          image: reader.result,
        }));
        setImage(reader.result);
      };
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    setChallenge(prevChallenge => ({
      ...prevChallenge,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      console.log('Challenge object:', challenge);
      const response = await axios.post('/api/challenge/post', challenge);
      console.log('Data created:', response.data);
    } catch (error) {
      console.log('Error creating data:', error);
    }
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
            <div style={{ backgroundColor: 'lightgrey', padding: 10 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}
              >
                {image ? (
                  <div>
                    <img
                      src={image}
                      alt="Preview of selected image"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                    <button onClick={handleRemoveImage}>Remove Image</button>
                  </div>
                ) : (
                  <div style={{ color: 'white' }}>No Image Selected</div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            {/* <img width="300px" height="200px" src={challenge.image} alt="" /> */}
            <Button>이미지등록</Button>
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
                <InputLabel htmlFor="start_date">참여기간</InputLabel>
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="start_date"
                  name="start_date"
                  value={challenge.start_date}
                  onChange={handleChange}
                  size="small"
                />
                ~
                <TextField
                  label=""
                  type="date"
                  variant="outlined"
                  id="end_date"
                  name="end_date"
                  value={challenge.end_date}
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

export default ChallengeCreatePage;
