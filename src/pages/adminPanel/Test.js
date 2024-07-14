import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './styles/Test.css';

const Test = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        <nav className="nav flex-column sidebar-sticky">
          <a className="nav-link active" href="#">
            Active
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </nav>
      </div>
      <main className="main-content">
        <canvas id="myChart"></canvas>
      </main>
    </div>
  );
};

export default Test;
