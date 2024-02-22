<template>
    <Radar id="Radar-chart" :options="chartOptions" :data="chartData" />

  </template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Radar } from 'vue-chartjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default {
  name: 'RadarChart',
  components: { Radar },
  data() {
    return {
      chartData: {
        labels: ['舒適性', '耐用性', '美觀', '尺寸', '易清潔', '功能性', '價格'],
        datasets: [{
          label: '顧客挑選意願',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        }],
      },
      chartOptions: {
        responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>
