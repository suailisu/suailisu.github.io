---
layout: none
---

{% assign items = site.posts | concat: site.news | concat: site.books | concat: site.movies %}

var dataMap = new Map();
{% for item in items %}
  {% assign date = item.date | date: '%Y-%m-%d' %}
  var key = '{{ date }}';
  var title = '{{ item.title }}'
  var url = '{{ item.url }}'
  console.log(url);
  var value = dataMap.get(key);
  if (value == null) {
    dataMap.set(key, [{title, url}]);
  } else {
    value.push({title, url});
  }
{% endfor %}

var chartDom = document.getElementById('heatmap');
var myChart = echarts.init(chartDom, null, { locale: "ZH"});
var option;

function getData(year) {
  const data = [];
  for (const [key, value] of dataMap.entries()) {
    data.push([key, value.length]);
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
  title: {},
  tooltip: {
    hideDelay: 1000,
    enterable: true,
    formatter: function (p) {
      const date = p.data[0];
      const items = dataMap.get(date);
      var content = `${date}`;
      for (const [i, item] of items.entries()) {
          content += "<br>";
          var title = item.title;
          var url = item.url;
          content += `<a href="${url}">${title}</a>`
      }
      return content;
    }
  },
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
    top: 30,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: getDateRange(),
    itemStyle: {
      color: ' #F8F8F8',
      borderWidth: 0.5,
      borderColor: '#fff',
    },
    yearLabel: {
      show: true,
      position: "bottom",
      fontSize: 14,
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