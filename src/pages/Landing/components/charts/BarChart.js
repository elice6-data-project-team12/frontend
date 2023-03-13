import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { singlePerson } from 'pages/Landing/Data/chartData.js';
import { useState } from 'react';

const BarChart = () => {
  const [fakeData, setFakeData] = useState({
    labels: singlePerson.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: singlePerson.map(data => data.population),
        backgroundColor: [
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
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
        text: '연도별 1인 가구수',
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
      },
    },
  };

  return <Bar data={fakeData} options={options} />;
};

export default BarChart;
