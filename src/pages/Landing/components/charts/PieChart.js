import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { isMarried } from 'pages/Landing/Data/chartData.js';
import Box from '@mui/material/Box';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data_0 = {
  labels: ['미혼', '배우자 있음', '사별 or 이혼 '],
  datasets: [
    {
      label: '# of Votes',
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
      label: '# of Votes',
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
      label: '# of Votes',
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
      label: '# of Votes',
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

const PieChart = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_0} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_1} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_2} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pie data={data_3} />
      </Box>
    </>
  );
};

export default PieChart;
