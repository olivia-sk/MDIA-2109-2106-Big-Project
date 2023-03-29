import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Alcohol', 'Cannabis', 'Tobacco', 'Illegal Substances'],
  datasets: [
    {
      label: '% of Household Users',
      data: [66, 18, 12, 4,],
      backgroundColor: [
        'rgba(147, 129, 255, 0.2)',
        'rgba(202, 219, 42, 0.2)',
        'rgba(111, 154, 255, 0.2)',
        'rgba(255, 218, 185, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div>
        <Pie data={data} />
    </div>
  )
}