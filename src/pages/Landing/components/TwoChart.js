import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      type: 'bar',
      label: '외출이 많은 집단',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [
        { x: '20대', y: 21 },
        { x: '30대', y: 41 },
        { x: '40대', y: 17 },
        { x: '50대', y: 8 },
        { x: '60대', y: 3 },
      ],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: '커뮤니케이션 지수',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [
        { x: '20대', y: 15 },
        { x: '30대', y: 16 },
        { x: '40대', y: 11.5 },
        { x: '50대', y: 10 },
        { x: '60대', y: 8.5 },
      ],
      yAxisID: 'y_sub',
    },
  ],
};

const options = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  interaction: {
    mode: 'index',
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      },
    },
    tooltip: {
      backgroundColor: 'rgba(124, 35, 35, 0.4)',
      padding: 10,
      bodySpacing: 5,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true,
      filter: item => item.parsed.y !== null,
      callbacks: {
        title: context => context[0].label + '💙',
        label: context => {
          let label = context.dataset.label + '' || '';

          return context.parsed.y !== null
            ? label + ': ' + context.parsed.y + '배'
            : null;
        },
      },
    },
  },
  scales: {
    x: {
      afterTickToLabelConversion: function (scaleInstance) {
        const ticks = scaleInstance.ticks;

        const newTicks = ticks.map(tick => {
          return {
            ...tick,
            label: tick.label + '🎵',
          };
        });

        scaleInstance.ticks = newTicks;
      },
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
        color: '#E2E2E230',
      },
      axis: 'x',
      position: 'bottom',
      ticks: {
        minRotation: 45,
        padding: 5,
      },
    },
    y: {
      type: 'linear',
      grid: {
        color: '#E2E2E230',
      },
      afterDataLimits: scale => {
        scale.max = scale.max * 1.2;
      },
      axis: 'y',
      display: true,
      position: 'left',
      title: {
        display: true,
        align: 'end',
        color: '#808080',
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: '단위: 배',
      },
    },
    y_sub: {
      position: 'right',
      title: {
        display: true,
        align: 'end',
        color: '#808080',
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: '서울시',
      },
      afterDataLimits: scale => {
        scale.max = scale.max * 1.2;
      },
    },
  },
};

const Chart = () => {
  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;
