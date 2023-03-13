import { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from 'store';
import API from 'API.js';
const CultureMap = ({ selected }) => {
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const mapData = useSelector(state => {
    return state;
  });

  useEffect(() => {
    API.get('/DATA')
      .then(Response => {
        dispatch(updateData(Response.data));
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  useEffect(() => {
    const x = mapData.cultureSpace.filter(data => data.subjcode === selected);

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
