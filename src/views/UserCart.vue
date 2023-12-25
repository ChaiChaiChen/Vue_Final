<!-- eslint-disable max-len -->
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
                            <th width="150"></th>
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
                                    :disabled ="this.status.loadingItem === product.id"
                                    @click="addCart(product.id)">
                                    <div class="spinner-grow text-red spinner-grow-sm" v-if="this.status.loadingItem === product.id">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                    加入購物車</button>
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
      status: {
        loadingItem: '', // 對應品項id
      },
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
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        console.log('Products', response);
      });
    },
  },

  created() {
    this.getProducts();
  },
};
</script>
