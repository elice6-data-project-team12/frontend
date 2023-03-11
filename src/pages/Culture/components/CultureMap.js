import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import axios from 'axios';

const CultureMap = () => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    axios
      .get(' http://localhost:8000/DATA')
      .then(Response => {
        setMapData(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  return (
    <Map
      center={{ lat: 37.59508000957669, lng: 127.04930180082712 }}
      style={{ width: '75%', height: '100%' }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 37.59508000957669,
          lng: 127.04930180082712,
        }}
      />
      {mapData.map((data, idx) => {
        return (
          <MapMarker
            key={idx}
            position={{
              lat: data.x_coord,
              lng: data.y_coord,
            }}
          />
        );
      })}
    </Map>
  );
};

export default CultureMap;
