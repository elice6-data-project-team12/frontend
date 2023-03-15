import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import API from 'API.js';
import styled from 'styled-components';
const CultureMap = ({ filterObj, icons }) => {
  const [list, setList] = useState([]); // 원본데이터 저장할 state
  const [filteredList, setFilteredList] = useState([]); // filter 적용된 리스트 state
  const [selectedMarker, setSeleteMarker] = useState(); // 마커를 하나만 선택하기 위한 state
  const filterData = () => {
    const { addr, subject } = filterObj.filterState;
    const { reset, all } = filterObj;

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
      // onClick={marker => map.panTo(marker.getPosition())}
      onClick={() => {
        onClick();
        setIsOpen(!isOpen);
      }}
      // onMouseOver={() => setIsVisible(true)}
      // onMouseOut={() => setIsVisible(false)}
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
          <div className="info">
            <div className="close" onClick={() => setIsOpen(false)}>
              닫기
            </div>
            <div className="title">{name}</div>
            <div className="body">
              <div className="desc">
                <div className="ellipsis">{addr}</div>
                <div className="phone">{phone}</div>
              </div>
            </div>
          </div>
        </CustomOverlayWrap>
      )}
    </MapMarker>
  );
};

const CustomOverlayWrap = styled.div`
  height: 100px;
  width: 200px;
  padding: 16px 16px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  position: relative;
  .title {
    font-size: 15px;
    font-weight: 700;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .ellipsis {
    padding: 10px 0;
  }
`;
export default CultureMap;
