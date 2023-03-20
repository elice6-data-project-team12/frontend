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

import styled from 'styled-components';

//data
import { mwColor, noiseColor } from 'pages/Landing/Data/map/mapColor';
import { MW_OBJ, NOISE_OBJ } from 'pages/Landing/Data/map/valueData';
import { populationRegion } from 'pages/Landing/Data/chartData';

//맵 색지정 함수
const mapColor = currentState => {
  if (currentState.rankingTab == 'mw') {
    return scaleQuantize().domain([1000, 7500]).range(mwColor);
  } else if (currentState.rankingTab == 'noise') {
    return scaleQuantize().domain([100000, 700000]).range(noiseColor);
  }
};

const Map = ({ currentState }) => {
  const [tooltipName, setTooltipName] = useState('');
  const [tooltipPopulation, setTooltipPopulation] = useState('');

  console.log(populationRegion);

  return (
    <>
      <ReactTooltip place="bottom" variant="info" type="light">
        {tooltipName}
      </ReactTooltip>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ rotate: [-60, 0, 5], scale: 45000 }}
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
                    fill={
                      currentState.currentView !== 'ranking'
                        ? null
                        : mapColor(currentState)(cur ? cur.VALUE : '#E4E5E9')
                    }
                    strokeWidth={currentState.isZoom ? 0 : 0.4}
                    stroke="#FFF"
                    onMouseEnter={() => {
                      const { name } = geo.properties;
                      const population = populationRegion.find(
                        data => data.region === name
                      );
                      setTooltipName(
                        `${name} 1인 가구수: ${population.population}명`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipName('');
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      hover: { fill: 'rgba(245, 80, 115, 1)' },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {populationRegion.map((data, idx) => {
            return (
              <Marker key={idx} coordinates={[data.long, data.lat]} fill="#777">
                <text fontSize="7px" textAnchor="middle" fill="black">
                  {data.region}
                </text>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
