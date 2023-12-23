<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="120">是否啟用</th>
                <th width="120">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">{{ item.origin_price }}</td>
                <td class="text-right">{{ item.price }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-muted" v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm">編輯</button>
                        <button class="btn btn-outline-danger btn-sm">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      // 透過axios中的this.$http取得方法，使用POST(包含API,夾帶的資料)
      // promise使用.then方法進行串接
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
