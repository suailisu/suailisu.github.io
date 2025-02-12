var chartDom = document.getElementById('love-radar');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '爱の五种语言——2025.02.09'
  },
  legend: {
    data: ['小b', '爱力酥']
  },
  radar: {
    indicator: [
      { name: '肯定的言辞', max: 12 },
      { name: '精心的时刻', max: 12 },
      { name: '接受礼物', max: 12 },
      { name: '服务的行动', max: 12 },
      { name: '身体的接触', max: 12 }
    ]
  },
  series: [
    {
      name: 'love language',
      type: 'radar',
      data: [
        {
          value: [10, 9, 6, 4, 1],
          name: '小b'
        },
        {
          value: [5, 4, 7, 8, 6],
          name: '爱力酥'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);

