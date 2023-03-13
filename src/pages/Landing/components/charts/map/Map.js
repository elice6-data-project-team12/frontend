//lib
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

//data
import { mwColor, noiseColor } from 'pages/Landing/Data/map/mapColor';
import { MW_OBJ, NOISE_OBJ } from 'pages/Landing/Data/map/valueData';
import { populationRegion } from 'pages/Landing/Data/chartData';

//맵 색지정 함수
const mapColor = currentState => {
  if (currentState.rankingTab == 'mw') {
    return scaleQuantize().domain([1000, 7500]).range(mwColor);
  } else if (currentState.rankingTab == 'noise') {
    return scaleQuantize().domain([50, 68]).range(noiseColor);
  }
};

const Map = ({ currentState }) => {
  const [tooltipName, setTooltipName] = useState('');
  const [tooltipPopulation, setTooltipPopulation] = useState('');

  return (
    <>
      <ReactTooltip place="bottom" variant="info" type="light">
        {tooltipName}
      </ReactTooltip>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
        data-tip=""
      >
        <ZoomableGroup
          center={currentState.center}
          zoom={currentState.zoom}
          minZoom={currentState.zoom - 1}
          maxZoom={currentState.zoom + 1}
        >
          <Geographies geography={currentState.map}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur =
                  currentState.rankingTab === 'mw'
                    ? MW_OBJ.find(v => v.name === geo.properties.name)
                    : NOISE_OBJ.find(v => v.name === geo.properties.name);

                return (
                  <Geography
                    className="tansition my-anchor-element"
                    fill={
                      currentState.currentView !== 'ranking'
                        ? null
                        : mapColor(currentState)(cur ? cur.VALUE : '#E4E5E9')
                    }
                    strokeWidth={currentState.isZoom ? 0 : 0.4}
                    stroke="#FFF"
                    onMouseEnter={() => {
                      const { name } = geo.properties;
                      setTooltipName(name);
                    }}
                    onMouseLeave={() => {
                      setTooltipName('');
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      hover: { fill: '#04D' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
