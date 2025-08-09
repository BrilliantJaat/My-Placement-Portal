document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('placementChart')?.getContext('2d');

  if (!ctx) {
    console.error("Canvas with ID 'placementChart' not found.");
    return;
  }

  const placementChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Students Placed',
        data: [720, 812, 907, 718, 819, 887, 444, 504],
        backgroundColor: [
          '#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#2ecc71', '#e74c3c', '#34495e', '#f39c12'
        ],
        borderRadius: 10,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Students',
            color: '#555',
            font: {
              size: 14
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year',
            color: '#555',
            font: {
              size: 14
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#222',
          titleColor: '#fff',
          bodyColor: '#fff'
        }
      }
    }
  });
});