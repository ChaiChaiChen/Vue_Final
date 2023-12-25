<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-7">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th width="120">圖片</th>
                            <th width="120">商品名稱</th>
                            <th width="120">價格</th>
                            <th width="120"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in productList" :key="product.id">
                            <td>
                                <div style="height: 100px;
                                 background-size: cover; background-position: center"
                                :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
                            </td>
                            <td>{{ product.title }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-outline-primary btn-sm"
                                    @click="getProduct(product.id)">查看更多</button>
                                    <button class="btn btn-outline-danger btn-sm"
                                    >加入購物車</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((response) => {
        this.productList = response.data.products;
        console.log(this.productList);
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },

  created() {
    this.getProducts();
  },
};
</script>
