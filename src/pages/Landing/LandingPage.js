import BarChart from './components/charts/BarChart';
import TwoChart from './components/charts/TwoChart';
import DoughnutChart from './components/charts/DoughnutChart';
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js';
import MapChart from './components/charts/MapChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import PieChart from '../Landing/components/charts/PieChart';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import footerImg from 'layout/images/footerImg.jpg';
import styled from 'styled-components';
const LandingPage = () => {
  const animatedFadeInItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 3),
  };
  const animatedPathItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    3: useScrollFadeIn('left', 1, 0.5),
    4: useScrollFadeIn('up', 1, 3),
  };

  return (
    <Box sx={{ width: '100%', marginTop: '100px' }}>
      <Box sx={{ bgcolor: '#FBF7F2', p: '40px' }} {...animatedFadeInItem[0]}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
          >
            <Typography sx={{ color: '#F2BE5B' }} variant="h4" gutterBottom>
              1인가구 증가에 따른 사회적 고립 문제
            </Typography>
            <br />
            <Typography
              sx={{
                color: 'grey',
                textAlign: 'center',
                fontSize: '20px',
              }}
              variant="body1"
              gutterBottom
            >
              주변에 혼자 생활하는 1인가구를 본 적이 있으신가요? <br /> 혹은
              아무도 없는 집에서 외로움을 느껴본 경험은 없으신가요? <br />
              혼자 생활하다 보면 사회적으로 고립된 느낌을 받는 동시에 외로움이
              밀려올 때가 있습니다.
            </Typography>

            <br />
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', p: '50px' }} {...animatedFadeInItem[1]}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography
              sx={{ color: 'grey', textAlign: 'center' }}
              variant="h6"
              gutterBottom
            >
              2016년 대비 2021년 서울시 1인 가구수 약 35만명 증가
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  width: '50%',
                  borderBottomLeftRadius: '20%',
                  background: '#BBD6B8',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                elevation={3}
              >
                <BarChart />
              </Box>
              <Box
                sx={{
                  width: '50%',
                  borderTopRightRadius: '20%',
                  background: '#ECF2FF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
                elevation={3}
              >
                <MapChart />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FBF7F2', p: '50px' }} {...animatedPathItem[0]}>
        <Container maxWidth="md">
          <Typography
            sx={{ color: 'grey', textAlign: 'center', mb: '20px' }}
            variant="h6"
            gutterBottom
          >
            1인가구의 연령대 높아질 수록 혼인상태가 사별/이혼인 비율이 증가
          </Typography>
          <Typography
            sx={{ color: 'grey', textAlign: 'center', mb: '20px' }}
            variant="h6"
            gutterBottom
          >
            20대~30대, 40대, 50대, 60대
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              mb: '20px',
            }}
          >
            <PieChart />
          </Box>
          <Typography
            sx={{ color: 'grey', textAlign: 'center', fontSize: '20px' }}
            variant="body1"
            gutterBottom
          >
            50대 이후 연령대는 성인이 된 자녀를 모두 출가시키고, <br /> 배우자를
            먼저 하늘나라로 보낸 이들이 있습니다. <br />
            위의 그래프를 보면, 연령대가 높아질 수록 혼인상태가 사별/이혼인
            비율이 증가합니다.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', p: '20px' }} {...animatedPathItem[1]}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
          >
            <Typography
              sx={{ color: 'grey', fontSize: '20px', textAlign: 'center' }}
              variant="body1"
              gutterBottom
            >
              매년 증가하는 1인가구에 따라 사회적 고립 문제는 더욱
              심화되고있습니다. <br /> 이를 적극적으로 예방하고 대책을 마련할 수
              있는 실질적인 방안이 필요합니다.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FBF7F2' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: '20px',
            }}
            {...animatedFadeInItem[3]}
          >
            <Typography sx={{ color: '#F2BE5B' }} variant="h4" gutterBottom>
              중장년층 이후 사회적 활동 감소
            </Typography>
            <Typography
              sx={{ color: 'grey', textAlign: 'center', fontSize: '20px' }}
              variant="body1"
              gutterBottom
            >
              1인가구의 사회적 고립 문제는 특히 50대 이후 중장년층 세대에서
              나타납니다. <br />
              중장년층은 가족과의 관계가 떨어져 있는 경우가 많거나, 전자기기와
              SNS에 능숙하지 않기 때문입니다. <br />
            </Typography>

            <Box sx={{ width: '70%', mt: '20px' }}>
              <TwoChart />
            </Box>
          </Box>
          <Box sx={{ p: '50px' }}>
            <Typography
              sx={{ color: 'grey', textAlign: 'center', fontSize: '20px' }}
              variant="body1"
              gutterBottom
            >
              커뮤니케이션 지수, 외출 지수와 같은 사회적 접촉량을 연령대 별로
              살펴본 결과, <br />
              다른 연령대에 비해 수치가 현저히 낮은 것을 확인하였습니다.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF' }} {...animatedPathItem[3]}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
          >
            <Typography
              sx={{ color: 'grey', fontSize: '20px', textAlign: 'center' }}
              variant="body1"
              gutterBottom
            >
              따라서 중장년층 세대의 사회적 활동을 장려하기 위하여 <br />{' '}
              자녀들과 부모님이 함께 만들어가는 효도 서비스를 제공하고자 합니다.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#F8F9FA', m: 0 }}>
        <ImgWrap>
          <img
            className="image-thumbnail"
            src={footerImg}
            alt="20230322-141751"
            border="0"
          />
          <Box sx={{ bgcolor: '#F8F9FA', mb: '50px', zIndex: 1000 }}>
            <Container maxWidth="xl" sx={{ bgcolor: '#F8F9FA', opacity: 0.9 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  position: 'absolute',
                  bottom: 60,
                  marginLeft: '200px',
                  // marginLeft: '250px',
                  bgcolor: '#F8F9FA',
                  borderTopLeftRadius: '50px',
                  borderBottomLeftRadius: '50px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10px',
                  }}
                >
                  <Typography
                    sx={{ color: 'black', textAlign: 'center' }}
                    variant="h5"
                    gutterBottom
                  >
                    다양한 챌린지 활동으로
                    <br />
                    부모님과 함께 소중한 추억들을 만들어요.
                  </Typography>
                  <Typography
                    sx={{ color: 'grey', textAlign: 'center' }}
                    variant="body1"
                    gutterBottom
                  >
                    “부모님께 효도하는 것은 매우 중요한 일입니다.
                    <br />
                    그러나 현대사회에서는 바쁜 일상과 다양한 유혹들로 인해 이를
                    실천하기 어려울 수 있습니다.
                    <br />
                    이에 대해 여러 가지 챌린지를 만들어 참여해 서로의 소식을
                    <br />
                    나누고, 상담하며, 애정을 나누는 시간을 가질 수 있습니다.
                  </Typography>
                  <Link to="/challenge">
                    <Button sx={{ maxWidth: '200px' }} variant="contained">
                      효도챌린지 도전
                    </Button>
                  </Link>
                </Box>

                <img
                  src="https://i.ibb.co/K5tJWPY/20230324-155136.png"
                  alt="20230322-141752"
                  border="0"
                />
              </Box>
            </Container>
          </Box>
          <Box sx={{ bgcolor: '#F8F9FA', mb: '50px', zIndex: 1000 }}>
            <Container maxWidth="xl" sx={{ bgcolor: '#F8F9FA', opacity: 0.9 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  position: 'absolute',
                  top: 60,
                  paddingRight: '20px',
                  bgcolor: '#F8F9FA',
                  borderRadius: '50px',
                }}
              >
                <img
                  src="https://i.ibb.co/sJYLz25/20230322-141751.png"
                  alt="20230322-141751"
                  border="0"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '50px',
                  }}
                >
                  <Typography
                    sx={{ color: 'black', textAlign: 'center' }}
                    variant="h5"
                    gutterBottom
                  >
                    문화시설 정보를 찾고
                    <br />
                    부모님과 함께 외출해요.
                  </Typography>
                  <Typography
                    sx={{ color: 'grey', textAlign: 'center' }}
                    variant="body1"
                    gutterBottom
                  >
                    “매일 외출하는 노인은 건강 상태나 기능적 능력과 상관없이
                    <br />
                    외출하지 않는 노인보다 오래 사는 것으로 나타났다”
                    <br />
                    <br />
                    제레미 제이콥스 박사 - Hadassah Medical Center
                  </Typography>
                  <Link to="/culture">
                    <Button sx={{ maxWidth: '200px' }} variant="contained">
                      문화여가시설 찾기
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Box>
        </ImgWrap>
      </Box>
    </Box>
  );
};

const ImgWrap = styled.div`
  display: 'flex';
  position: relative;
  height: 1000px;
  width: 100%;
  .image-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export default LandingPage;
