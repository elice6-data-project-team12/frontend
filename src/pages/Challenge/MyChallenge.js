import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import API from 'API';

const MyChallenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await API.get(`/api/challenge/participation`);
        setChallenges(response.data.data);
      } catch (error) {
        //alert('로그인');
        console.log('Error MyData selecting data:', error);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <>
      <Box sx={{ mb: 4, mt: 2, my: 4, marginTop: '50px' }}>
        <Typography variant="h4" component="h1" align="center">
          참여중 챌린지
        </Typography>
      </Box>
      <SliderChallenge joinedChallenge={challenges} />
    </>
    // <>
    //   <Title>참여중 챌린지</Title>
    // </>
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

const ColumnTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //border: 5px solid red;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

export default MyChallenge;
