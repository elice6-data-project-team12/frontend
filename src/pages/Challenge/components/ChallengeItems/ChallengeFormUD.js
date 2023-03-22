import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import API from 'API';

const ChallengeForm = ({ actionType }) => {
  const [buttonJoinVisible, setButtonJoinVisible] = useState(true);

  useEffect(() => {
    if (actionType === 'select') {
      setButtonJoinVisible(true);
    } else {
      setButtonJoinVisible(false);
    }
  }, [actionType]);

  const currentDate = new Date().toISOString().slice(0, 10);
  const [formFields, setFormFields] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    recruit_person: 1,
    recruit_start: currentDate,
    recruit_end: currentDate,
    isDeleted: 0,
    progress_start: currentDate,
    progress_end: currentDate,
  });

  const handleFormChange = event => {
    const { name, value, files } = event.target;
    let newValue = files ? files[0] : value;

    // 유효성 검사 테스트중

    setFormFields(prevFormFields => ({
      ...prevFormFields,
      [name]: newValue,
    }));
  };

  const handleImageChange = image => {
    setFormFields(prevChallenge => ({
      ...prevChallenge,
      image: image,
    }));
  };

  const handleSubmitForm = async event => {
    event.preventDefault();

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      console.log('Challenge object:', formFields);
      const response = await API.post('/api/challenge/', formFields, {
        headers,
      });
      console.log('Data created:', response.data);
      alert('등록이 완료되었습니다!');
    } catch (error) {
      alert('동일한 제목의 챌린지가 있습니다.');
      console.log('Error creating data:', error);
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <Box sx={{ mb: 4, mt: 4, my: 4, marginTop: '150px' }}>
        <Typography variant="h4" component="h1" align="center">
          부모님과 함께 소중한 추억을 만들어요.
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          Register your challenge and start your journey today!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400 }}>
            {/* <CardMedia
              component="img"
              height="auto"
              width="100%"
              image="https://source.unsplash.com/400x400/?fitness"
              alt={formFields.title}
            /> */}
            <ImageUpload onChange={handleImageChange} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <FormControl onSubmit={handleSubmitForm} style={{ width: '100%' }}>
              <TextField
                id="title"
                name="title"
                label="챌린지명"
                fullWidth
                required
                value={formFields.title}
                onChange={handleFormChange}
                sx={{ mt: 1 }}
              />
              <TextField
                id="description"
                name="description"
                label="간략소개"
                multiline
                fullWidth
                required
                value={formFields.description}
                onChange={handleFormChange}
                sx={{ mt: 2 }}
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="recruit_start"
                    name="recruit_start"
                    label="모집시작일"
                    type="date"
                    fullWidth
                    required
                    value={formFields.recruit_start}
                    onChange={handleFormChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 2 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="recruit_end"
                    name="recruit_end"
                    label="모집종료일"
                    type="date"
                    fullWidth
                    required
                    value={formFields.recruit_end}
                    onChange={handleFormChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>
              <TextField
                id="recruit_person"
                name="recruit_person"
                label="모집인원"
                type="number"
                fullWidth
                required
                value={Math.max(1, formFields.recruit_person)}
                onChange={event =>
                  handleFormChange({
                    target: {
                      name: 'recruit_person',
                      value: Math.max(1, parseInt(event.target.value)) || 0,
                    },
                  })
                }
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                inputProps={{ min: 1 }}
                sx={{ mt: 2, width: '150px' }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="progress_start"
                    name="progress_start"
                    label="참여시작일"
                    type="date"
                    fullWidth
                    required
                    value={formFields.progress_start}
                    onChange={handleFormChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 2 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="progress_end"
                    name="progress_end"
                    label="참여종료일"
                    type="date"
                    fullWidth
                    required
                    value={formFields.progress_end}
                    onChange={handleFormChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>
              {buttonJoinVisible ? (
                <Button variant="contained" sx={{ mt: 2 }}>
                  참여하기
                </Button>
              ) : (
                <Box sx={{ height: '50px' }} />
              )}
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="content"
            name="content"
            label="챌린지설명"
            multiline
            fullWidth
            required
            value={formFields.content}
            onChange={handleFormChange}
            // sx={{ mt: 4, minHeight: '200px' }}
            sx={{ mt: 4 }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/challenge">
            <Button variant="contained" sx={{ mt: 2 }} color="primary">
              취소
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            color="primary"
            onClick={handleSubmitForm}
          >
            등록
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

// const StyledChallengeForm = styled(ChallengeForm)`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 32px;
// `;
// const YellowForm = styled('form')({
//   backgroundColor: '#FFEB3B',
//   padding: '24px',
//   borderRadius: '8px',
// });

const YellowForm = styled(Box)`
  background-color: lightgray;
  padding: 24px;
  border-radius: 8px;
`;

export default ChallengeForm;
