<template>
  <div id="echarts" style="height: 300px"></div>
</template>
<script>
import * as echarts from 'echarts';
// https://cloud.tencent.com/developer/article/2146004
export default {
  mounted() {
    this.createEcharts();
  },
  methods: {
    createEcharts() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('echarts'));
      // 绘制图表
      // 最重要的就是理解各个配置的作用吧，这个没啥说的 就算熟能生巧
      myChart.setOption({
        title: {
          text: '',
        },
        tooltip: {},
        xAxis: {
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yAxis: {},
        series: [
          {
            name: '顧客數量',
            type: 'line',
            data: [342, 210, 264, 105, 142, 204, 304],
          },
        ],
      });
    },
  },
};
</script>
