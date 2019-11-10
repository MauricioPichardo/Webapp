

function aggre_month() {
  var roots = numbers.map(function(num) {
return Math.sqrt(num)
});
}


var cax = document.getElementById('area-line');
var achart = new Chart(cax, {
  type: 'line',
  data: {
    labels: ["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
    datasets: [{
        data: [868,1130,1006,1061,107,1112,1330,212,783,1478],
        borderColor: "#9AD8E1",
        backgroundColor: 'rgba(154, 216, 225, .5)',
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "white",
        lineTension:0,
        showLine: true
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: 'Website Traffic'
    }
  },
  legend: {
   display: false
}
});
