import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import ChallengeIsJoin from './ChallengeIsJoin';
import ChallengeFormUD from './ChallengeFormUD';

const ChallengeDetail = challenge => {
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
    created_at,
    updated_at,
    progress_start,
    progress_end,
  } = challenge || {};

  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <ChallengeFormUD actionType="update" challenge={challenge} />;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledContainer maxWidth="md">
      <Box sx={{ mb: 4, mt: 4, my: 4, marginTop: '150px' }}>
        <Typography variant="h4" component="h1" align="center">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          start your journey today!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="auto"
              width="100%"
              image={image}
              alt={title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <FormControl style={{ width: '100%' }}>
              <TextField
                id="title"
                name="title"
                label="챌린지명"
                fullWidth
                required
                value={title}
                sx={{ mt: 1 }}
              />
              <TextField
                id="description"
                name="description"
                label="간략소개"
                multiline
                fullWidth
                required
                value={description}
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
                    value={recruit_start}
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
                    value={recruit_end}
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
                value={recruit_person}
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
                    value={progress_start}
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
                    value={progress_end}
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>
              {/* <Button variant="contained" sx={{ mt: 2 }}>
                참여하기
              </Button> */}
              <ChallengeIsJoin />
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
            value={content}
            // sx={{ mt: 4, minHeight: '200px' }}
            sx={{ mt: 4 }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/challenge">
            <Button variant="contained" sx={{ mt: 2 }} color="primary">
              목록으로
            </Button>
          </Link>
          {localStorage.getItem('userToken') ? (
            // <Link to={`/challenge/update/${challenge_id}`}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
              color="primary"
              onClick={handleEditClick}
            >
              수정{challenge_id}
            </Button>
          ) : // </Link>
          null}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 24px;
`;

export default ChallengeDetail;
