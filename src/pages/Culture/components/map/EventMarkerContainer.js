import { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

// MUI icons
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// 지도에 나타나는 marker 컴포넌트
export const EventMarkerContainer = ({
  position,
  icons,
  subject,
  name,
  addr,
  homepage,
  phone,
  onClick,
  isClicked,
  facilityId,
  showModal,
  setShowModal,
  setInfoModal,
}) => {
  const [iconImg, setIconImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // 주제분류에 해당하는 아이콘 이미지 설정

  const selectedIconImg = icons.find(data => data.value === subject);
  useEffect(() => {
    setIconImg(selectedIconImg.img);
  }, []);

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
          <CustomOverlayWrap>
            <div className="header">
              <div className="title">
                <span>{name}</span>
              </div>
              <div className="close" onClick={() => setIsOpen(false)}>
                <CloseIcon
                  sx={{ fontSize: 15 }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className="body">
              <div className="desc">
                <div className="desc-icon">
                  <ReadMoreIcon sx={{ fontSize: 15 }} color="action" />
                  <button
                    id="detail-show"
                    onClick={e => {
                      setInfoModal(facilityId);
                      openModal(e);
                    }}
                  >
                    자세히보기
                  </button>
                </div>
                <div className="desc-icon">
                  <MapIcon sx={{ fontSize: 15 }} color="action" />
                  <span>{addr}</span>
                </div>
                <div className="desc-icon">
                  <CallIcon sx={{ fontSize: 15 }} color="action" />
                  <span>{phone}</span>
                </div>
                <div className="desc-icon">
                  <a href={homepage}>
                    <HomeIcon sx={{ fontSize: 15 }} color="action" />
                    <span>공식 홈페이지</span>
                  </a>
                </div>
                <div className="desc-icon">
                  <a href={homepage}>
                    <BookmarkIcon sx={{ fontSize: 15 }} color="action" />
                    <span>저장하기</span>
                  </a>
                </div>
              </div>
            </div>
          </CustomOverlayWrap>
        )}
      </MapMarker>
    </FacilityMap>
  );
};

const FacilityMap = styled.div`
  height: 660px;
  display: flex;
`;

const CustomOverlayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  position: relative;
  padding: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    span {
      vertical-align: middle;
    }
  }

  .close {
    align-self: flex-end;
  }

  .desc-icon {
    height: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    span {
      vertical-align: middle;
      margin-left: 5px;
    }

    a {
      display: flex;
      align-items: center;
    }
  }
`;
export default EventMarkerContainer;
