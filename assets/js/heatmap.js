function initHeatmap() {
    const chartDom = document.getElementById('heatmap-container');
    if (!chartDom) return;

    // 彻底销毁旧实例防止冲突
    const existingInstance = echarts.getInstanceByDom(chartDom);
    if (existingInstance) { echarts.dispose(chartDom); }

    const myChart = echarts.init(chartDom);
    const rawData = window.HEATMAP_DATA || [];
    const config = window.HEATMAP_CONFIG || [];

    const dataMap = new Map();
    rawData.forEach(item => {
        if(item.date) dataMap.set(item.date, { v: item.v, t: item.t });
    });
    
    const chartData = Array.from(dataMap.entries()).map(([k, v]) => [k, v.v]);

    const option = {
        tooltip: {
            formatter: (p) => {
                const info = dataMap.get(p.data[0]);
                return `${p.data[0]}<br/>${info ? info.t : '记录'}`;
            }
        },
        visualMap: {
            show: false,
            type: 'piecewise',
            pieces: config
        },
        calendar: {
            top: 25,
            left: 'center', // 这里的居中很重要
            cellSize: [13, 13], // 稍微调大一点，看起来更饱满
            range: [
                echarts.format.formatTime('yyyy-MM-dd', new Date(new Date().setFullYear(new Date().getFullYear() - 1))),
                echarts.format.formatTime('yyyy-MM-dd', new Date())
            ],
            itemStyle: { color: '#f7f7f7', borderWidth: 2, borderColor: '#fff' },
            yearLabel: { show: false },
            dayLabel: { show: false },
            monthLabel: { color: '#ddd', fontSize: 10 },
            splitLine: { show: false }
        },
        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: chartData,
            itemStyle: { borderRadius: 2 }
        }
    };

    myChart.setOption(option);

    // 监听窗口缩放
    window.addEventListener('resize', () => myChart.resize());
    
    // 关键补丁：初始化后再次 resize，确保它不是“一条线”
    setTimeout(() => { myChart.resize(); }, 500);
}

// 确保页面完全加载后再运行
if (document.readyState === 'complete') {
    initHeatmap();
} else {
    window.addEventListener('load', initHeatmap);
}