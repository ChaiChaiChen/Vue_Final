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
            backgroundColor: '#d41243',
            pointRadius: 5,
            data: [201231, 232531, 201231, 203231, 207231, 201231,
              160231, 120231, 187231, 207231, 207231, 207231, 201231, 219031],
          },
          {
            label: '2023',
            backgroundColor: '#00eed0',
            pointRadius: 5,
            data: [232231, 212531, 242031, 190231, 170231, 179231,
              171231, 135231, 164231, 187231, 197231, 217231, 221231, 239031],
          },
          {
            label: '2024',
            backgroundColor: '#ffe000',
            pointRadius: 5,
            data: [194031, 240531],
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
