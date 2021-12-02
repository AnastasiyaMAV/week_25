import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ['Китай', 'США', 'Россия', 'ЕС', 'Индия', 'Япония', 'Южная Корея'],
  datasets: [
    {
      label: '# of Votes',
      data: [38.84, 36.36, 16.53, 4.13, 1.65, 1.65, 0.83],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const data2 = {
  labels: ['США', 'Великобритания', 'Китай', 'Япония', 'Россия', 'Канада', 'Швейцария'],
  datasets: [
    {
      label: '# of Votes',
      data: [69.05, 15.23, 6.04, 1.09, 0.91, 0.67, 0.61],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Запуски 2021 года</h1>
      <div className="generalCharts">
        <div className="chart1">
          <h2>Статистика по количеству запусков ракет в 2021 году по странам</h2>
          <Pie data={data1} />
        </div>
        <div className="chart2">
          <h2>Статистика запущенных космических аппаратов по странам операторам</h2>
          <Doughnut data={data2} />
        </div>
      </div>
      <p>Данные взяты с сайта <a href="http://ecoruspace.me/%D0%97%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B8+2021+%D0%B3%D0%BE%D0%B4%D0%B0.html">ecoruspace.me</a></p>
    </div>
  );
}

export default App;
