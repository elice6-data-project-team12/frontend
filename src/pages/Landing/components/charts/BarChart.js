import React from 'react';
import { Bar } from 'react-chartjs-2';
import { singlePerson } from 'pages/Landing/Data/chartData.js';
import { useState } from 'react';

const BarChart = () => {
  const [fakeData, setFakeData] = useState({
    labels: singlePerson.map(data => data.year),
    datasets: [
      {
        label: '가구수',
        data: singlePerson.map(data => data.population),
        backgroundColor: ['#DBE4C6'],
        borderColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 2,
      },
    ],
  });
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '연도별 서울시 1인 가구수',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#2B3467',
        },
      },
      y: {
        ticks: {
          color: '#2B3467',
        },
        type: 'linear',
        axis: 'y',
        display: true,
        position: 'left',
        title: {
          display: true,
          align: 'end',
          color: '#2B3467',
          font: {
            size: 12,
            family: "'Noto Sans KR', sans-serif",
            weight: 300,
          },
          text: '단위: 명',
        },
      },
    },
  };

  return <Bar data={fakeData} options={options} />;
};

export default BarChart;
