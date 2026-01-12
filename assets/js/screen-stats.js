document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('movieChart').getContext('2d');
    
    // 渐变色背景处理
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(0, 118, 223, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 118, 223, 0)');

    new Chart(ctx, {
        type: 'line', // 使用折线图能更好地体现趋势，也可以改为 'bar'
        data: {
            labels: [{{ year_labels | split: "," | join: "," }}],
            datasets: [{
                label: '观影数',
                data: [{{ year_counts | split: "," | join: "," }}],
                borderColor: '#0076df',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4, // 让线条圆润一点
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 5 },
                    grid: { color: '#f0f0f0' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
});