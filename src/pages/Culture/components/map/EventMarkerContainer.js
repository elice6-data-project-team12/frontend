import { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import BookMarkButton from 'common/BookMarkButton';

// MUI icons
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

// MUI UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BorderClear } from '@mui/icons-material';

// 지도에 나타나는 marker 컴포넌트
export const EventMarkerContainer = ({
  position,
  icons,
  subject,
  name,
  addr,
  subjcode,
  homepage,
  phone,
  onClick,
  isClicked,
  facilityId,
  showModal,
  setShowModal,
  setInfoModal,
  setIsOpenAlert,
}) => {
  const [iconImg, setIconImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // 주제분류에 해당하는 아이콘 이미지 설정
  const selectedIconImg = icons.find(data => data.value === subject);

  // 컴포넌트가 마운트될 때, 로컬 스토리지에서 북마크 목록, 아이콘 이미지를 불러오기
  useEffect(() => {
    setIconImg(selectedIconImg.img);
  }, []);
  // 상세모달 열기 함수
  const openModal = e => {
    const { id } = e.target;

    if (id === 'detail-show') {
      setShowModal(!showModal);
    }
    setShowModal(true);
  };

  return (
    <FacilityMap>
      <MapMarker
        position={position} // 마커를 표시할 위치
        content={BorderClear}
        onClick={() => {
          onClick();
          setIsOpen(!isOpen);
        }}
        image={{
          src: iconImg, // 마커이미지의 주소입니다
          size: {
            width: 20,
            height: 20,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 12,
              y: 69,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
      >
        {isClicked && isOpen && (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: '5px',
                }}
              >
                <Typography
                  sx={{ fontSize: 18, fontWeight: 700 }}
                  color="text.HighlightText"
                >
                  <img
                    src={iconImg}
                    style={{
                      width: '20px',
                      height: '20px',
                      verticalAlign: 'middle',
                    }}
                    alt="icon"
                  />

                  <span style={{ verticalAlign: 'middle' }}> {` ${name}`}</span>
                </Typography>
                <div className="close" onClick={() => setIsOpen(false)}>
                  <CloseIcon
                    sx={{ fontSize: 15 }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </Box>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`위치: 서울시 ${addr}`}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`시설분류: ${subjcode}`}
              </Typography>
              <Typography variant="body2">
                <a href={homepage}>
                  <span style={{ verticalAlign: 'middle' }}>
                    <HomeIcon sx={{ fontSize: 15, color: '#F2BE5B' }} />
                  </span>
                  <span style={{ fontWeight: 700, marginRight: '10px' }}>
                    공식 홈페이지
                  </span>
                </a>
                <span style={{ verticalAlign: 'middle' }}>
                  <CallIcon sx={{ fontSize: 15, color: '#F2BE5B' }} />
                </span>
                <span>{phone}</span>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                sx={{ marginLeft: '6px', marginRight: '5px' }}
                id="detail-show"
                onClick={e => {
                  setInfoModal(facilityId);
                  openModal(e);
                }}
              >
                자세히보기
              </Button>
              <BookMarkButton
                info={facilityId}
                setIsOpenAlert={setIsOpenAlert}
              />
            </CardActions>
          </Card>
        )}
      </MapMarker>
    </FacilityMap>
  );
};

const FacilityMap = styled.div`
  height: 660px;
  display: flex;
`;

export default EventMarkerContainer;
