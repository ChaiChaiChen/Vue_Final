<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704688694154.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TDqPpRKduKijGpwaoRFJepfnRIfVupIvLLZe9pIoUDztJ5T0%2B5gd74UhQAYGPuJbfa713z%2FGCNmeWbrXGVJJMLIAi%2BkLgDX1b5CYuSDzhtBke4vmafE4%2FZIuJl0DW1x1F34UbBTZTH%2F52yIVBQGKhgeQG3JNP6hYOl9t82FsaWYibPEH%2FhL2UVJMss8FsKbNfH0zVbxF96Uk9HDAD3jjRDfKsQnmJ5gzeLVtU3vP6GI7C%2B1ATnTWWxsJWG0UjUXF0mKvIB38f5yT7n%2FFRHPAwoPCqrx4d70Wkxxjd5R58VPD%2BST65W0%2FjGNCyf35O2YE42Y%2FXeQlvxgbScHKFMQ5og%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block justify-content-center carousel-text">
        <h1><strong>安坐家中&emsp;<br>&emsp;樂享生活</strong></h1>
      </div>
      </div>
    </div>
  </div>
  <div class="container">
<div class="row">
  <div class="row justify-content-center">
  <div class="d-flex flex-column align-items-center flex-wrap mt-3 py-4 col-md-6">
    <h2>
      精選商品
    </h2>
  </div>
</div>
</div>
</div>

<div class="container">
  <div class="row mt-5">
    <div class="col-sm-12 col-md-6 col-xl-3 py-2" v-for="product in productList" :key="product.Id" v-bind="product">
      <div class="card rounded-0">
        <div class="card border-white text-white text-left" @click="getProduct(product.id)">
          <img :src="product.imageUrl" class="img-cover" height="340">
          <div class="card-img-overlay d-flex justify-content-center align-items-end">
            <button class="btn btn-primary col-8 border-radius-0 btn-default"
            @click="getProduct(product.id)">查看更多</button>
            </div>
        </div>
        <div class="card-body text-center">
          <h5 class="card-img-title-lg">{{ product.title }}</h5>
            <p class="card-text">售價：{{ product.price }}</p>
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
<style>

</style>
<script>

export default {
  data() {
    return {
      productList: [],
      status: {
        loadingItem: '', // 對應品項id
      },
      cart: {},
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
