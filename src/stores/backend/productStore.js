import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('productStore', {
  state: () => ({
    products: [],
    pagination: {},
  }),
  actions: {
    // this
    getProducts(page = 1) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
        try {
          const res = await axios.get(api);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          resolve();
        } catch (error) {
          console.log(error);
          reject();
        }
      });
      // 透過axios中的this.$http取得方法，使用POST(包含API,夾帶的資料)
      // promise使用.then方法進行串接
      // axios.get(api)
      //   .then((res) => {
      //     if (res.data.success) {
      //       console.log(res.data);
      //       this.products = res.data.products;
      //       this.pagination = res.data.pagination;
      //     }
      //   });
    },
  },
});
