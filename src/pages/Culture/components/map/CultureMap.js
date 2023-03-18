import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import API from 'API.js';
import EventMarkerContainer from './EventMarkerContainer';

const CultureMap = ({ filterObj, icons }) => {
  const [list, setList] = useState([]); // 원본데이터 저장할 state
  const [filteredList, setFilteredList] = useState([]); // filter 적용된 리스트 state
  const [selectedMarker, setSeleteMarker] = useState(); // 마커를 하나만 선택하기 위한 state

  // TODO: 문화시설 필터를 백앤드에서 처리할 예정 API 완성되면 필터 다시 작성
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

  // 원본데이터 불러오기
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

export default CultureMap;
