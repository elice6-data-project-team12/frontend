import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import API from 'API.js';
import EventMarkerContainer from './EventMarkerContainer';
import Box from '@mui/material/Box';
const CultureMap = ({
  filterObj,
  icons,
  showModal,
  setShowModal,
  setInfoModal,
  setIsOpenAlert,
}) => {
  const [filteredList, setFilteredList] = useState([]); // filter 적용된 리스트 state
  const [selectedMarker, setSeleteMarker] = useState(); // 마커를 하나만 선택하기 위한 state
  // 필터링된 데이터 불러오기
  useEffect(() => {
    const { addr, subject } = filterObj.filterState;
    const { searchName, all, reset } = filterObj;

    if (all) {
      API.get(`/api/facility/filter`)
        .then(Response => {
          setFilteredList(Response.data.data);
        })
        .catch(Error => {
          console.log(Error);
        });
    } else if (reset) {
      setFilteredList([]);
    } else if (searchName) {
      API.get(`/api/facility/search?query=${searchName}`)
        .then(Response => {
          setFilteredList(Response.data.data);
        })
        .catch(Error => {
          console.log(Error);
        });
    } else {
      API.get(`/api/facility/filter?subjcode=${subject}&district=${addr}`)
        .then(Response => {
          setFilteredList(Response.data.data);
        })
        .catch(Error => {
          console.log(Error);
        });
    }
  }, [filterObj]);
  return (
    <Box sx={{ width: '60%' }}>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.5696296,
          lng: 126.9721884,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={8} // 지도의 확대 레벨
      >
        {filteredList.map((value, idx) => (
          <EventMarkerContainer
            name={value.fac_name}
            addr={value.addr}
            phone={value.phne}
            subjcode={value.subjcode}
            homepage={value.homepage}
            icons={icons}
            onClick={() => setSeleteMarker(idx)}
            subject={value.subjcode}
            key={`EventMarkerContainer-${value.facility_id}`}
            facilityId={value.facility_id}
            position={{ lat: value.x_coord, lng: value.y_coord }}
            content={<div style={{ color: '#000' }}>{value.fac_name}</div>}
            isClicked={selectedMarker === idx}
            showModal={showModal}
            setShowModal={setShowModal}
            setInfoModal={setInfoModal}
            setIsOpenAlert={setIsOpenAlert}
          />
        ))}
      </Map>
    </Box>
  );
};

export default CultureMap;
