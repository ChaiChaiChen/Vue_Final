<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-12 col-xl-6 mt-5">
        <img :src="tempProduct.imageUrl" alt="" class="img-fluid mb-3">
      </div>
      <div class="col-md-12 col-xl-6 mt-5">
        <h1>產品名稱：{{ tempProduct.title }}</h1>
        <span>售價：{{ tempProduct.price }}</span>
      </div>
      <div class="col-md-2 mt-3">
        <button class="btn btn-outline-danger btn-sm"
                                    :disabled ="this.status.loadingItem === tempProduct.id"
                                    @click="addCart(tempProduct.id)">
                                    <div class="spinner-grow text-red spinner-grow-sm"
                                     v-if="this.status.loadingItem === tempProduct.id">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                    加入購物車</button>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      tempProduct: {},
      id: '',
      status: {
        loadingItem: '', // 對應品項id
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api)
        .then((res) => {
          console.log(res.data);
          this.tempProduct = res.data.product;
        });
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
    // 透過$route.params接收UserCart所傳送的prouctId
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
