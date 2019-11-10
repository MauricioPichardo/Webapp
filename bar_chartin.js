
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M','T','W','TH','F','S','Su'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)','rgba(154, 216, 225, .5)'
            ],
            borderColor: ["#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd"

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
