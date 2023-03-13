import { useState } from 'react';

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
  console.log(seoulMap);

  return <Map currentState={currentState} />;
};

export default MapChart;
