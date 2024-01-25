<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />

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
            label: '銷售量',
            backgroundColor: '#F76B11',
            pointRadius: 5,
            data: [76, 54, 55, 48, 65, 45, 28, 32, 39, 43, 57, 85, 78, 93],
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
