
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        "#e1ae9a",
        "#e1d29a",
        "#c29ae1",

      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Tablet',
      'Mobile',
      'Desktop',

    ],

  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
      fontSize: 159,
      boxWidth: 60,

    },
    title: {
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById('chart-area').getContext('2d');
  window.myDoughnut = new Chart(ctx, config);
};

// document.getElementById('randomizeData').addEventListener('click', function() {
//   config.data.datasets.forEach(function(dataset) {
//     dataset.data = dataset.data.map(function() {
//       return randomScalingFactor();
//     });
//   });
//
//   window.myDoughnut.update();
// });

// var colorNames = Object.keys(window.chartColors);
// document.getElementById('addDataset').addEventListener('click', function() {
//   var newDataset = {
//     backgroundColor: ['blue','red','gray'],
//     data: [],
//     label: 'New dataset ' + config.data.datasets.length,
//   };
//
//   for (var index = 0; index < config.data.labels.length; ++index) {
//     newDataset.data.push(randomScalingFactor());
//
//     var colorName = colorNames[index % colorNames.length];
//     var newColor = window.chartColors[colorName];
//     newDataset.backgroundColor.push(newColor);
//   }
//
//   config.data.datasets.push(newDataset);
//   window.myDoughnut.update();
// });
//
// document.getElementById('addData').addEventListener('click', function() {
//   if (config.data.datasets.length > 0) {
//     config.data.labels.push('data #' + config.data.labels.length);
//
//     var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];
//     var newColor = window.chartColors[colorName];
//
//     config.data.datasets.forEach(function(dataset) {
//       dataset.data.push(randomScalingFactor());
//       dataset.backgroundColor.push(newColor);
//     });
//
//     window.myDoughnut.update();
//   }
// });
//
// document.getElementById('removeDataset').addEventListener('click', function() {
//   config.data.datasets.splice(0, 1);
//   window.myDoughnut.update();
// });
//
// document.getElementById('removeData').addEventListener('click', function() {
//   config.data.labels.splice(-1, 1); // remove the label first
//
//   config.data.datasets.forEach(function(dataset) {
//     dataset.data.pop();
//     dataset.backgroundColor.pop();
//   });
//
//   window.myDoughnut.update();
// });
//
// document.getElementById('changeCircleSize').addEventListener('click', function() {
//   if (window.myDoughnut.options.circumference === Math.PI) {
//     window.myDoughnut.options.circumference = 2 * Math.PI;
//     window.myDoughnut.options.rotation = -Math.PI / 2;
//   } else {
//     window.myDoughnut.options.circumference = Math.PI;
//     window.myDoughnut.options.rotation = -Math.PI;
//   }
//
//   window.myDoughnut.update();
// });
