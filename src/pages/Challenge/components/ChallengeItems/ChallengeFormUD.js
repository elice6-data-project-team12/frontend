import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  TextField,
  Button,
  Box,
  FormControl,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import API from 'API';

const ChallengeFormUD = ({ actionType, challenge }) => {
  const {
    challenge_id,
    title,
    description,
    content,
    image,
    recruit_person,
    recruit_start,
    recruit_end,
    isDeleted,
    progress_start,
    progress_end,
  } = challenge || {};

  const [formFields, setFormFields] = useState({
    title: challenge?.title || '',
    description: description || '',
    content: content || '',
    image: image || '',
    recruit_person: recruit_person || '',
    recruit_start: recruit_start || '',
    recruit_end: recruit_end || '',
    progress_start: progress_start || '',
    progress_end: progress_end || '',
  });

  const [isImageUploadActive, setIsImageUploadActive] = useState(false);

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

    if (!image || !image.type.startsWith('image/')) {
      alert('이미지 파일을 변경하여 저장해주세요!');
      return;
    }

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      console.log('Challenge update:', formFields);
      const response = await API.put(
        `/api/challenge/${challenge_id}`,
        formFields,
        {
          headers,
        }
      );
      console.log('Data update:', response.data);
      alert('챌린지 수정이 완료되었습니다!');
      window.location.href = `/challenge/detail/${challenge_id}`;
    } catch (error) {
      alert('챌린지 수정이 정상적으로 수행되지 않았습니다.');
      console.log('Error update data:', error);
    }
  };

  const handleDeleteForm = async event => {
    event.preventDefault();

    try {
      const response = await API.delete(`/api/challenge/${challenge_id}`);
      alert('챌린지 삭제가 완료되었습니다!');
      window.location.href = `/challenge/detail/${challenge_id}`;
    } catch (error) {
      alert('챌린지 삭제가 제대로 이루어지지 않았습니다.');
      console.log('Error creating data:', error);
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <Box sx={{ mb: 4, mt: 4, my: 4, marginTop: '100px' }}>
        <Typography variant="h4" component="h1" align="center">
          {formFields.title}
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          Register your challenge and start your journey today!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400 }}>
            {!isImageUploadActive && (
              <CardMedia
                id="image"
                name="image"
                component="img"
                height="auto"
                width="100%"
                image={formFields.image}
                alt={formFields.title}
              />
            )}
            <Button onClick={() => setIsImageUploadActive(true)}>
              이미지 업로드
            </Button>
            {isImageUploadActive && (
              <ImageUpload onChange={handleImageChange} />
            )}
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
                value={title}
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
            sx={{ mt: 4 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
          <Grid item xs>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, width: '180px' }}
              color="primary"
              onClick={handleSubmitForm}
            >
              수 정
            </Button>

            <Link to="/challenge" sx={{ mr: 1 }}>
              <Button
                color="primary"
                variant="outlined"
                sx={{ mt: 2, ml: 1, width: '180px' }}
              >
                챌린지목록
              </Button>
            </Link>
          </Grid>
          <Grid item xs>
            <Link to="/challenge/create" sx={{ ml: 'auto' }}>
              <Chip
                label="챌린지 삭제"
                sx={{
                  mt: 2,
                  width: '180px',
                  backgroundColor: '#F2BE5B',
                }}
                onClick={handleDeleteForm}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

export default ChallengeFormUD;
