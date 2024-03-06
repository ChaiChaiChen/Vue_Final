import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('couponStore', {
  state: () => ({
    coupons: [],
    pagination: {},
  }),
  getters: {
    couponsList: (state) => state.coupons,
  },
  actions: {
    // this
    getCoupons(page = 1) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${page}`;
        try {
          const res = await axios.get(api);
          console.log(res);
          this.coupons = res.data.coupons;
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
