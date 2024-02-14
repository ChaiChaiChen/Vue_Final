<template>
  <Bar id="progressbar-chart" ref="barChart"
   :data="chartData" :options="chartOptions" :width="100" :height="10"/>
  </template>

<script>
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);
// https://www.youtube.com/watch?v=JPvUe7nwMps
export default {
  name: 'App',
  components: {
    Bar,
  },
  props: {
    progressdata: [],
  },
  data() {
    return {
      bardata: [],
      chartData: {
        labels: ['進度條'],
        datasets: [
          {
            label: '運送進度',
            backgroundColor: 'rgba(75, 192, 102, 0.3)',
            borderColor: 'rgba(75, 192, 102, 1)',
            borderWidth: 1,
            data: [this.progressdata],
            barPercentage: 0.5,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false, // 上方 data label 隱藏
          },
        },
        scales: {
          x: {
            max: 100,
            stepSize: 2,
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
