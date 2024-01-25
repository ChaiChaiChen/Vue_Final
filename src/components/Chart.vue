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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '銷售量',
            backgroundColor: '#F76B11',
            pointRadius: 5,
            data: [40, 39, 30, 48, 39, 60, 40],
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
