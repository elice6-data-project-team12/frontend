import { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import API from 'API.js';
const CultureMap = ({ filterObj }) => {
  // 원본데이터 저장할 state
  const [list, setList] = useState([]);
  // filter 적용된 리스트 state
  const [filteredList, setFilteredList] = useState([]);

  //전체 데이터에 필터 걸기
  const filterData = () => {
    const { addr, subject } = filterObj.filterState;
    const { reset, all } = filterObj;

    let x = [];

    // 전체보기
    if (all) {
      x = [...list];
    }
    // 자치구(addr)만 보기
    else if (addr.length > 0 && !subject) {
      x = [
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
      x = [
        ...list.filter(data => {
          return data.subjcode === subject;
        }),
      ];
    }
    // 자치구, 주제분류 합쳐서 보기
    else if (addr.length > 0 && subject.length > 0) {
      x = [
        ...list.filter(data => {
          // data.addr의 null 값처리
          if (data.addr) {
            return data.addr.includes(addr) && data.subjcode === subject;
          }
        }),
      ];
    } else if (reset) {
      x = [];
    }

    return x;
  };

  // 원본 데이터 불러오기
  useEffect(() => {
    API.get('/DATA')
      .then(Response => {
        setList(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  // 원본데이터에 필터링
  useEffect(() => {
    setFilteredList(filterData);
  }, [filterObj]);

  console.log(filterObj);
  console.log(filteredList);

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.5696296,
        lng: 126.9721884,
      }}
      style={{
        // 지도의 크기
        width: '70%',
        height: '100%',
      }}
      level={8} // 지도의 확대 레벨
    >
      {filteredList.map(value => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.num}`}
          position={{ lat: value.x_coord, lng: value.y_coord }}
          content={<div style={{ color: '#000' }}>{value.fac_name}</div>}
        />
      ))}
    </Map>
  );
};

export const EventMarkerContainer = ({ position, content }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={marker => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && content}
    </MapMarker>
  );
};

export default CultureMap;
