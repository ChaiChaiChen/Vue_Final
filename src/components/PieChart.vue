<template>
    <Pie id="pie-chart" :data="chartData" :options="chartOptions" />
  </template>

<script>
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'App',
  components: {
    Pie,
  },
  data() {
    return {
      chartData: {
        labels: ['全皮沙發', '半皮沙發', '布質沙發'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [20, 55, 25],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
