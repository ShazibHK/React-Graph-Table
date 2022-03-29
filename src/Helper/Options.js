const Options = {
  hover: {
    mode: false
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 30,
      }
    },
    tooltip: {
      mode: 'index',
      yAlign:'bottom',
      intersect: false,
    },
  },

  maintainAspectRatio: true,
  responsive: true,

  scales: {
    xAxes: {
      stacked: true,
      grid: {
        display: false,
      }

    },
    y: {
      ticks: {
        beginAtZero: true,

      },
      stacked: false,
      grid: {
        borderDash: [8, 4],
        color: "rgba(213,213,213,255)"
      }
    },
  },
};
export default Options;