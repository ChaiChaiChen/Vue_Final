import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('articleStore', {
  state: () => ({
    articles: [],
    pagination: {},
  }),
  getters: {
    articlesList: (state) => state.articles,
  },
  actions: {
    // this
    getArticles(page = 1) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
        try {
          const res = await axios.get(url);
          this.articles = res.data.articles;
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
