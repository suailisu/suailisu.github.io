---
layout: none
---

{% assign items = site.posts | concat: site.news | concat: site.books | concat: site.movies %}

var dataMap = new Map();
{% for item in items %}
  {% assign date = item.date | date: '%Y-%m-%d' %}
  var key = '{{ date }}';
  var value = dataMap.get(key);
  if (value == null) {
    dataMap.set(key, 1);
  } else {
    dataMap.set(key, value + 1);
  }
{% endfor %}

var chartDom = document.getElementById('heatmap');
var myChart = echarts.init(chartDom, null, { locale: "ZH"});
var option;

function getData(year) {
  const data = [];
  for (const [key, value] of dataMap.entries()) {
    data.push([key, value]);
  }
  return data;
}

function getDateRange() {
  var startDate = new Date();
  var year_Mill = startDate.setFullYear((startDate.getFullYear() - 1));
  var startDate = +new Date(year_Mill);
  var endDate = +new Date();

  startDate = echarts.format.formatTime('yyyy-MM-dd', startDate);
  endDate = echarts.format.formatTime('yyyy-MM-dd', endDate);
  return [startDate, endDate];
}

option = {
  title: {
    top: 30,
    left: 'center',
    text: '更新统计'
  },
  tooltip: {},
  visualMap: {
    show: false,
    type: 'piecewise',   
    min: 1,
    max: 5,
    splitNumber: 3,
    top: 30,
    orient: 'horizontal',
    left: 'right',
    inRange: {
      color: ['#7aa8744c', '#7AA874' ] 
    },
    showLabel: false,
  },
  calendar: {
    top: 90,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: getDateRange(),
    itemStyle: {
      color: '#F1F1F1',
      borderWidth: 0.5,
      borderColor: '#fff',
    },
    yearLabel: { 
      show: true,
      position: "bottom" 
    },
    splitLine: {
      lineStyle: {
        color: '#b7d12a',
        borderWidth: 1,
      }
    }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getData()
  }
};

option && myChart.setOption(option);