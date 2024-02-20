import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  getters: {
    productList: (state) => state.products,
  },
  actions: {
    // this
    getProducts() {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        try {
          const res = await axios.get(url);
          console.log(res);
          this.products = res.data.products;
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
