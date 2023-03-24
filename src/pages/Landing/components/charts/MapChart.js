import { useState } from 'react';
import styled from 'styled-components';
import seoulMap from 'pages/Landing/Data/map/seoul.json';
import Paper from '@mui/material/Paper';

// components
import Map from './map/Map.js';

// styled

const MapChart = () => {
  const [currentState, setCurrentState] = useState({
    currentView: 'ranking',
    //'ranking', 'gu', 'dong', 'info'
    rankingTab: 'population',
    //'mw' or 'noise'

    zoom: 2,
    guId: '',
    guName: '',
    clickSpotId: '',
    clickedName: '',

    map: seoulMap,
    center: [126.986, 37.561],
  });

  return (
    <>
      <Map currentState={currentState} />
      <Legend>
        <div className="ranking">
          <dl>
            <dt>가구수</dt>
            <dd></dd>
            <div className="range">
              <div>0</div>
              <div>700,000</div>
            </div>
          </dl>
        </div>
      </Legend>
    </>
  );
};

const Legend = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  z-index: 990;

  .ranking {
    dl {
      display: flex;
      flex-direction: column;
      dt {
        align-self: flex-end;
        margin-bottom: 5px;
      }
      dd {
        margin-left: 8px;
        width: 100px;
        height: 16px;
        background: linear-gradient(
          to right,
          rgba(91, 184, 251, 0.1) 0%,
          rgba(91, 184, 251, 1) 100%
        );
        margin-bottom: 5px;
      }

      .ranking {
        display: flex;
        justify-content: center;
      }
    }
    .range {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export default MapChart;
