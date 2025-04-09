// <!-- Analytics Section -->

let chartsInitialized = false;

  function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('d-none');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('d-none');

    // Hide sidebar (for mobile)
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');

    // Initialize charts only once when analytics section is opened
    if (sectionId === 'analytics' && !chartsInitialized) {
      initCharts();
      chartsInitialized = true;
    }
  }

  function initCharts() {
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
    new Chart(monthlyCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Tests',
            data: [65, 75, 85, 95, 105, 115],
            borderColor: '#6f42c1',
            fill: false
          },
          {
            label: 'Completed',
            data: [55, 65, 75, 85, 95, 105],
            borderColor: '#20c997',
            fill: false
          },
          {
            label: 'Pending',
            data: [10, 10, 10, 10, 10, 10],
            borderColor: '#ffc107',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });

    const typesCtx = document.getElementById('testTypesChart').getContext('2d');
    new Chart(typesCtx, {
      type: 'bar',
      data: {
        labels: ['Soil Analysis', 'Quality Control', 'R&D', 'Other'],
        datasets: [{
          label: 'Tests',
          data: [32, 25, 18, 9],
          backgroundColor: '#9370DB'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

