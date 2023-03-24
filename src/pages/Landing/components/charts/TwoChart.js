import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { outing, communication } from 'pages/Landing/Data/chartData.js';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['20대', '30대', '40대', '50대', '60대'];

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: '커뮤니케이션 활동 지수',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 2,
      fill: false,
      data: communication.map(data => data.ratio),
    },
    {
      type: 'bar',
      label: '외출이 많은 집단 지수',
      backgroundColor: 'rgb(75, 192, 192)',
      data: outing.map(data => data.ratio),
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};

const options = {
  maxBarThickness: 45,
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
      backgroundColor: '#F4C979',
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
        title: context => `${context[0].label}`,
        label: context => {
          let label = `${context.dataset.label}||`;

          return context.parsed.y !== null
            ? `${label}: ${context.parsed.y}`
            : null;
        },
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
      },
      axis: 'x',
      position: 'bottom',
      ticks: {
        padding: 5,
      },
    },
    y: {
      type: 'linear',
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
        text: '단위: 지수',
      },
    },
  },
};

const TwoChart = () => {
  return <Chart type="bar" data={data} options={options} />;
};

export default TwoChart;
