import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Chip } from '@mui/material';
import API from 'API';

const MyChallenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await API.get(`/api/challenge/participation`);
        setChallenges(response.data.data);
        console.log('MyChanllenge', response.data.data);
      } catch (error) {
        console.log('Error MyChallenge', error);
      }
    };
    fetchChallenges();
  }, []);

  if (challenges.length === 0 || challenges.length === null)
    return <div>Loading...</div>;

  return (
    <Box sx={{ marginTop: '7rem' }}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs sx={{ textAlign: 'right' }}>
          <Typography style={{ fontSize: '32px' }}>참여중 챌린지</Typography>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs sx={{ textAlign: 'center' }}>
          <Link to="/challenge/create">
            <Chip
              label="새 챌린지 생성하기"
              sx={{ backgroundColor: '#F2BE5B' }}
            />
          </Link>
        </Grid>
      </Grid>

      <SliderChallenge joinedChallenge={challenges} />
    </Box>
  );
};

const SliderChallenge = ({ joinedChallenge }) => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesMargin: 10,
    centerMode: true,
    slidesToShow: joinedChallenge.length >= 3 ? 3 : joinedChallenge.length,
    slidesToScroll: joinedChallenge.length >= 3 ? 3 : joinedChallenge.length,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    joinedChallenge.length && (
      <StyledSlider {...sliderSettings}>
        {joinedChallenge.map((item, index) => (
          <SlideContainer key={index}>
            <ImageWrapper>
              <Link to={`/challenge/detail/${item.challenge_id}`}>
                <Image src={item.image} alt={item.title} />
                <Overlay>
                  <ImgTitle>{item.title}</ImgTitle>
                  <Subtitle>
                    {item.progress_start}-{item.progress_end}
                  </Subtitle>
                </Overlay>
              </Link>
            </ImageWrapper>
          </SlideContainer>
        ))}
      </StyledSlider>
    )
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    opacity: 1.5;
    color: #f2be5b;
  }

  //border: 5px solid red;
  width: 80%;
  margin-left: 150px;
`;

const SlideContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 20px;
  text-align: center;
  border-radius: 25px;
  float: left;
  background: #f2eee3;
  //border: 5px solid red;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  // border: 5px solid yellow;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  max-width: 300px;
  //border: 5px solid red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  //height: 100%;
  object-fit: cover;
  //border: 5px solid blue;
  top: 0;
`;

const ImgTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default MyChallenge;
