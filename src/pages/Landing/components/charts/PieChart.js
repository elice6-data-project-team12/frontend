import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { isMarried } from 'pages/Landing/Data/chartData.js';
import Box from '@mui/material/Box';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data_0 = {
  labels: ['미혼', '배우자 있음', '사별 or 이혼 '],
  datasets: [
    {
      label: '20대~30대',
      data: [
        isMarried[0].notMarried,
        isMarried[0].isMarried,
        isMarried[0].diedDivorce,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data_1 = {
  labels: ['미혼', '배우자 있음', '사별 or 이혼 '],
  datasets: [
    {
      label: '40대',
      data: [
        isMarried[1].notMarried,
        isMarried[1].isMarried,
        isMarried[1].diedDivorce,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data_2 = {
  labels: ['미혼', '배우자 있음', '사별 or 이혼 '],
  datasets: [
    {
      label: '50대',
      data: [
        isMarried[2].notMarried,
        isMarried[2].isMarried,
        isMarried[2].diedDivorce,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data_3 = {
  labels: ['미혼', '배우자 있음', '사별 or 이혼 '],
  datasets: [
    {
      label: ['60대 이상'],
      data: [
        isMarried[3].notMarried,
        isMarried[3].isMarried,
        isMarried[3].diedDivorce,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const option_0 = {
  plugins: {
    legend: {
      position: 'top',
      onClick: e => e.stopPropagation(),
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
    title: {
      display: true,
      text: ['2o대~30대 '],
      position: 'bottom',

      align: 'center',
      font: {
        size: 16,
      },
    },
    datalabels: {
      font: {
        size: 16,
      },
      labels: {
        title: {
          font: {
            weight: 'bold',
          },
        },
        value: {
          color: 'grey',
        },
      },
      formatter: value => {
        return `${value}%`;
      },
    },
  },
  animation: {
    duration: 2000,
  },
};
const option_1 = {
  plugins: {
    legend: {
      position: 'top',
      onClick: e => e.stopPropagation(),
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
    title: {
      display: true,
      text: ['40대 '],
      position: 'bottom',
      align: 'center',
      font: {
        size: 16,
      },
    },
    datalabels: {
      font: {
        size: 16,
      },
      labels: {
        title: {
          font: {
            weight: 'bold',
          },
        },
        value: {
          color: 'grey',
        },
      },
      formatter: value => {
        return `${value}%`;
      },
    },
  },
  animation: {
    duration: 2000,
  },
};
const option_2 = {
  plugins: {
    legend: {
      position: 'top',
      onClick: e => e.stopPropagation(),
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
    title: {
      display: true,
      text: ['50대 '],
      position: 'bottom',

      align: 'center',
      font: {
        size: 16,
      },
    },
    datalabels: {
      font: {
        size: 16,
      },
      labels: {
        title: {
          font: {
            weight: 'bold',
          },
        },
        value: {
          color: 'grey',
        },
      },
      formatter: value => {
        return `${value}%`;
      },
    },
  },
  animation: {
    duration: 2000,
  },
};
const option_3 = {
  plugins: {
    legend: {
      position: 'top',
      onClick: e => e.stopPropagation(),
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
    title: {
      display: true,
      text: ['60대 이상 '],
      position: 'bottom',

      align: 'center',
      font: {
        size: 16,
      },
    },
    datalabels: {
      font: {
        size: 16,
      },
      labels: {
        title: {
          font: {
            weight: 'bold',
          },
        },
        value: {
          color: 'grey',
        },
      },
      formatter: value => {
        return `${value}%`;
      },
    },
  },
  animation: {
    duration: 2000,
  },
};

const PieChart = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '350px',
          height: '350px',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '20px',
        }}
      >
        <Pie data={data_0} options={option_0} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '350px',
          height: '350px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_1} options={option_1} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '350px',
          height: '350px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_2} options={option_2} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '350px',
          height: '350px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_3} options={option_3} />
      </Box>
    </>
  );
};

export default PieChart;
