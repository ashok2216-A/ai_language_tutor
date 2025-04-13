// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard as active on page load
    const dashboardButton = document.querySelector('[data-module="dashboard"]');
    if (dashboardButton) {
        dashboardButton.classList.add('active');
    }

    // Initialize charts
    initProgressChart();
    initTimeSpentChart();
});

function initProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;

    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Speaking',
                    data: [5.5, 5.5, 6.0, 6.0, 6.5, 6.5],
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Writing',
                    data: [5.0, 5.0, 5.5, 5.5, 6.0, 6.0],
                    borderColor: '#3a86ff',
                    backgroundColor: 'rgba(58, 134, 255, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Listening',
                    data: [6.0, 6.5, 6.5, 7.0, 7.0, 7.0],
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Reading',
                    data: [6.0, 6.0, 6.5, 6.5, 7.0, 7.5],
                    borderColor: '#4ade80',
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    min: 4.5,
                    max: 9,
                    title: {
                        display: true,
                        text: 'IELTS Band Score'
                    }
                }
            }
        }
    });
}

function initTimeSpentChart() {
    const ctx = document.getElementById('timeSpentChart');
    if (!ctx) return;

    const timeSpentChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Speaking', 'Writing', 'Listening', 'Reading'],
            datasets: [{
                data: [25, 30, 20, 25],
                backgroundColor: [
                    '#4361ee',
                    '#3a86ff',
                    '#4cc9f0',
                    '#4ade80'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            },
            cutout: '70%'
        }
    });
}

// Export the dashboard initialization function
export function initDashboard() {
    const contentArea = document.getElementById('content-area');
    
    // If we're already showing the dashboard, no need to reinitialize
    if (contentArea.querySelector('.dashboard-container')) {
        return;
    }
    
    // Otherwise, reload the page to show the dashboard
    // This is a simple approach for the MVP; in a real app, we'd use AJAX
    window.location.href = 'index.html';
}
