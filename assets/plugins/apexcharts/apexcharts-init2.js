(function ($) {
var options = {
 
  series: [{
    name: '05 Nov',
    data: [176.8, 0, 0, 0],
    
  }, {
    name: '29 Nov',
    data: [156.12, 0, 0, 0]
  }, {
    name: '20 Oct',
    data: [0, 1.83, 0, 0]
  }, {
    name: '12 Nov',
    data: [0, 1.79, 0, 0]
  }, 
  {
    name: '28 Nov',
    data: [0, 2.06, 0, 0]
  },
  {
    name: '05 Jan',
    data: [0, 0, 1.83, 0]
  },
  {
    name: '02 Mar',
    data: [0, 0, 2.01, 0]
  },
  {
    name: '05 Feb',
    data: [0, 0, 1.8, 0]
  },
  {
    name: '23 May',
    data: [0, 0, 187, 0]
  },
  {
    name: '16 July',
    data: [0, 0, 194.48, 0]
  },
  {
    name: '03 Aug',
    data: [0, 0, 2.0, 0]
  },
  {
    name: '25 Aug',
    data: [0, 0, 2.38, 0]
  },
  {
    name: '25 Sep',
    data: [0, 0, 2.11, 0]
  },
  {
    name: '15 Nov',
    data: [0, 0, 1.85, 0]
  },
  {
    name: '18 Dec',
    data: [0, 0, 1.52, 0]
  },
  {
    name: '23 Feb',
    data: [0, 0, 0, 1.81]
  },
 
],
  chart: {
  type: 'area',
  height: 350,
  // background: '#000'

},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#000']
},
xaxis: {
  categories: [2018, 2019, 2020, 2021],
},
yaxis: {
  show: false,
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + ""
    }
  }
},
fill: {
  opacity: 1

},
legend: {
  position: 'bottom',
  horizontalAlign: 'left',
  offsetX: -20,
}
};
var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
chart.render();

var options = {
  series: [{
    name: '05 Nov',
    data: [176.8, 20, 30, 50],
  },
  {
    name: '06 Nov',
    data: [156.12, 90, 80, 60]
  },
],
  chart: {
  type: 'area',
  height: 350,

},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#000']
},
xaxis: {
  categories: [2018, 2019, 2020, 2021],
},
yaxis: {
  show: false,
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + ""
    }
  }
},
fill: {
  opacity: 1

},
legend: {
  position: 'bottom',
  horizontalAlign: 'left',
  offsetX: -20,
}
};
var chart = new ApexCharts(document.querySelector("#chart-timeline-2"), options);
chart.render();


var options = {
  series: [{
    name: '25 Nov',
    data: [176.8, 20, 30, 50],
  },
  {
    name: '26 Nov',
    data: [156.12, 90, 80, 60]
  },
],
  chart: {
  type: 'area',
  height: 350,

},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#000']
},
xaxis: {
  categories: [2018, 2019, 2020, 2021],
},
yaxis: {
  show: false,
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + ""
    }
  }
},
fill: {
  opacity: 1

},
legend: {
  position: 'bottom',
  horizontalAlign: 'left',
  offsetX: -20,
}
};
var chart = new ApexCharts(document.querySelector("#chart-timeline-3"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-timeline-4"), options);
chart.render();



})(jQuery);