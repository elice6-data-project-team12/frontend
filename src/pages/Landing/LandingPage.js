import BarChart from './components/charts/BarChart';
import TwoChart from './components/charts/TwoChart';
import DoughnutChart from './components/charts/DoughnutChart';
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js';
import MapChart from './components/charts/MapChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
const LandingPage = () => {
  const animatedFadeInItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 2),
    4: useScrollFadeIn('up', 1, 3),
  };
  const animatedPathItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 2),
    4: useScrollFadeIn('up', 1, 3),
  };

  return (
    <Box sx={{ width: '100%', marginTop: '100px' }}>
      <Box sx={{ bgcolor: '#FBF7F2', p: '50px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
            {...animatedPathItem[2]}
          >
            <Typography sx={{ color: '#F2BE5B' }} variant="h4" gutterBottom>
              1인가구 증가에 따른 사회적 고립 문제
            </Typography>
            <Typography
              sx={{ color: 'grey', textAlign: 'center', fontSize: '20px' }}
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

          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            {...animatedFadeInItem[0]}
          >
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
                }}
                elevation={3}
              >
                <MapChart />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', p: '50px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
            {...animatedPathItem[0]}
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
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: '50px',
            }}
            {...animatedFadeInItem[1]}
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
              실제로 *커뮤니케이션 지수, *외출 지수와 같은 사회적 접촉량을
              연령대 별로 살펴본 결과, <br />
              다른 연령대에 비해 수치가 현저히 낮은 것을 확인하였습니다.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px',
            }}
            {...animatedPathItem[1]}
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
      <Box sx={{ bgcolor: '#F8F9FA' }}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
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
      <Box sx={{ bgcolor: '#F8F9FA' }}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
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
                <br />
                문화시설 정보를 찾고 부모님과 함께 외출해요.
              </Typography>
              <Typography
                sx={{ color: 'grey', textAlign: 'center' }}
                variant="body1"
                gutterBottom
              >
                “매일 외출하는 노인은 건강 상태나 기능적 능력과 상관없이
                외출하지 않는 노인보다 오래 사는 것으로 나타났다”
                <br />
                제레미 제이콥스 박사 - 하다사 메디컬 센터(Hadassah Medical
                Center)
              </Typography>
              <Button sx={{ maxWidth: '200px' }} variant="contained">
                문화여가시설 찾기
              </Button>
            </Box>
            <img
              src="https://i.ibb.co/sJYLz25/20230322-141751.png"
              alt="20230322-141751"
              border="0"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
