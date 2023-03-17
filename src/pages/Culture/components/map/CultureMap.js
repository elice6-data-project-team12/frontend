import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import API from 'API.js';
import styled from 'styled-components';

// MUI icons
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CultureMap = ({ filterObj, icons }) => {
  const [list, setList] = useState([]); // 원본데이터 저장할 state
  const [filteredList, setFilteredList] = useState([]); // filter 적용된 리스트 state
  const [selectedMarker, setSeleteMarker] = useState(); // 마커를 하나만 선택하기 위한 state
  const filterData = () => {
    const { addr, subject } = filterObj.filterState;
    const { reset, all } = filterObj;

    // TODO: 문화시설 필터를 백앤드에서 처리할 예정 API 완성되면 다시 작성
    let filted = []; // 해당 필터에 따라 선택된 리스트들 저장

    // 전체보기
    if (all) {
      filted = [...list];
    }
    // 자치구(addr)만 보기
    else if (addr.length > 0 && !subject) {
      filted = [
        ...list.filter(data => {
          // data.addr의 null 값처리
          if (data.addr) {
            return data.addr.includes(addr);
          }
        }),
      ];
    }
    // 주제분류(subject)만 보기
    else if (!addr && subject.length > 0) {
      filted = [
        ...list.filter(data => {
          return data.subjcode === subject;
        }),
      ];
    }
    // 자치구, 주제분류 합쳐서 보기
    else if (addr.length > 0 && subject.length > 0) {
      filted = [
        ...list.filter(data => {
          // data.addr의 null 값처리
          if (data.addr) {
            return data.addr.includes(addr) && data.subjcode === subject;
          }
        }),
      ];
    } else if (reset) {
      filted = [];
    }

    return filted;
  };

  useEffect(() => {
    API.get('/DATA')
      .then(Response => {
        setList(Response.data); // 원본데이터 불러오기
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  useEffect(() => {
    setFilteredList(filterData); // 원본데이터에 필터링
  }, [filterObj]);

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.5696296,
        lng: 126.9721884,
      }}
      style={{
        // 지도의 크기
        width: '90%',
        height: '100%',
      }}
      level={8} // 지도의 확대 레벨
    >
      {filteredList.map((value, idx) => (
        <EventMarkerContainer
          name={value.fac_name}
          addr={value.addr}
          phone={value.phne}
          homepage={value.homepage}
          icons={icons}
          onClick={() => setSeleteMarker(idx)}
          subject={value.subjcode}
          key={`EventMarkerContainer-${value.num}`}
          position={{ lat: value.x_coord, lng: value.y_coord }}
          content={<div style={{ color: '#000' }}>{value.fac_name}</div>}
          isClicked={selectedMarker === idx}
        />
      ))}
    </Map>
  );
};

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
}) => {
  const [iconImg, setIconImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // 주제분류에 해당하는 아이콘 이미지 설정

  const selectedIconImg = icons.find(data => data.value === subject);
  useEffect(() => {
    setIconImg(selectedIconImg.img);
  }, []);

  return (
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
              <CloseIcon sx={{ fontSize: 15 }} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div className="body">
            <div className="desc">
              <div className="desc-icon">
                <ReadMoreIcon sx={{ fontSize: 15 }} color="action" />
                <span>상세보기</span>
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
  );
};
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
    width: 100%;
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
export default CultureMap;
