import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';

import axios from 'axios';

const CultureMap = () => {
  const [mapData, setMapData] = useState([]);
  // 인포윈도우 Open 여부를 저장하는 state 입니다.

  useEffect(() => {
    axios
      .get('http://localhost:8000/DATA')
      .then(Response => {
        setMapData(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    console.log(mapData);
    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={marker => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.5696296,
        lng: 126.9721884,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '450px',
      }}
      level={8} // 지도의 확대 레벨
    >
      {mapData.map(value => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.x_coord}-${value.y_coord}`}
          position={{ lat: value.x_coord, lng: value.y_coord }}
          content={<div style={{ color: '#000' }}>{value.fac_name}</div>}
        />
      ))}
    </Map>
  );
};

export default CultureMap;
