import { useState } from 'react';
import styled from 'styled-components';
import seoulMap from 'pages/Landing/Data/map/seoul.json';

// components
import Map from './map/Map.js';

// styled

const MapChart = () => {
  const [currentState, setCurrentState] = useState({
    currentView: 'ranking',
    //'ranking', 'gu', 'dong', 'info'
    rankingTab: 'noise',
    //'mw' or 'noise'

    zoom: 2,
    guId: '',
    guName: '',
    clickSpotId: '',
    clickedName: '',

    map: seoulMap,
    center: [126.986, 37.561],
  });

  const [modal, setModal] = useState('none');
  // 모달종류 : pw, chk, deny, pw_delete, pw_update, none
  console.log(currentState);
  return (
    <>
      <Map currentState={currentState} />;
      <Legend>
        <div className="ranking">
          <dl>
            <dt>1인 가구수</dt>
            <dd></dd>
            <div className="range">
              <div>0</div>
              <div>700000</div>
            </div>
          </dl>
        </div>
      </Legend>
    </>
  );
};

const Legend = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid gray;
  border-radius: 4px;
  z-index: 990;

  .ranking {
    dl {
      dd {
        margin-left: 8px;
        width: 160px;
        height: 16px;
        background: linear-gradient(
          to right,
          rgba(245, 80, 115, 0.1) 0%,
          rgba(245, 80, 115, 1) 100%
        );
      }

      .ranking {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
export default MapChart;
