import { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';

const CultureMap = ({ mapData, selected }) => {
  const [filter, setFilter] = useState([]);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
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
  useEffect(() => {
    const newArr = [...mapData];
    const x = newArr.filter(data => data.subjcode === selected);

    setFilter(x);
  }, [selected]);

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
      {filter.map(value => (
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
