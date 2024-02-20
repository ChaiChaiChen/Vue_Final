import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('orderStore', {
  state: () => ({
    orders: [],
    pagination: {},
  }),
  getters: {
    productList: (state) => state.products,
  },
  actions: {
    // this
    getOrders(page = 1) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
        try {
          const res = await axios.get(api);
          console.log(res);
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          resolve();
        } catch (error) {
          console.log(error);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject();
        }
        // axios.get(url).then((response) => {
        //   this.products = response.data.products;
        //   console.log(response);
        // });
        // axios.get(url).then((response) => {
        //   this.products = response.data.products;
        //   console.log(response);
        // });
      });
    },
  },
});
