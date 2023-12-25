<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 py-2" v-for="product in productList" :key="product.Id" v-bind="product">
        <div class="card">
          <div class="card border-white text-white text-left">
            <img :src="product.imageUrl" class="card-img-top img-cover" height="300">
            <div class="card-img-overlay d-flex justify-content-between align-items-end p-0 px-3" style="background-color: rgba(0, 0, 0, .2)">
              <h5 class="card-img-title-lg">{{ product.title }}</h5>
            </div>
          </div>
          <div class="card-body text-left">
              <p class="card-text">售價：{{ product.price }}</p>
          </div>
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
        </div>
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
