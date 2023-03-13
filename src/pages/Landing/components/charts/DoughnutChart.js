import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { outing } from 'pages/Landing/Data/chartData.js';
const DoughnutChart = () => {
  const [chartData, setChartData] = useState(getChartData(outing));

  return (
    <Doughnut
      options={{
        legend: {
          display: true,
          position: 'left',
        },
      }}
      data={chartData}
      height={120}
    />
  );
};

export default DoughnutChart;

export const getChartData = datas => {
  return {
    labels: datas.map(data => data.age),
    datasets: [
      {
        label: 'Test',
        data: outing.map(data => data.ratio),
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
        fill: true,
      },
    ],
  };
};
