<template>
  <Line id="line-chart" :options="chartOptions" :data="chartData" />

</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Line } from 'vue-chartjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        datasets: [
          {
            label: '2022',
            backgroundColor: '#F76B11',
            pointRadius: 5,
            data: [76, 70, 61, 88, 65, 68, 42, 40, 68, 53, 57, 85, 78, 93],
          },
          {
            label: '2023',
            backgroundColor: '#df38d2',
            pointRadius: 5,
            data: [74, 69, 64, 79, 85, 55, 39, 45, 57, 64, 84, 68, 65, 59],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        // https://cloud.tencent.com/developer/ask/sof/106954139
        scales: {
          y: {
            min: 0,
          },
        },
      },
    };
  },
};
</script>
