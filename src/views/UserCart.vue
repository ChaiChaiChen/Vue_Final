<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703562291819.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cFRidcCU3b45g8CdLITgG2a1C%2BMZ6z7rWE2VZuBy7wn7Ru5Zkrl201x%2BUHK8wziZnKW5t%2BjgQNAOBe%2FcxQe%2FCzzNc96UN38R%2F1Tx%2Fci8PgoQh4NV8nmG6uAoIZQnF%2F7h%2FBjIOM1xgm4ffBpftd4godkH%2Fx9IPXjV5RYnUoOY1HS0k50UoXS90CgOi2w1RxBlPWyHPKqejaXBRiT3cAX7H6pD2x01zzux1zmQBaIrRdp4z6%2FLoNAYsc7khG6r%2FRvNOqr%2FvPMgMej5WUVP7wbqpuRwhcTkiS94IQaOkI6Nl5prBXDHGTn52lZAK8vp5TJE%2BhjobTzlqW%2BfZYkFIPjNNw%3D%3D" class="d-block w-100">
    </div>
  </div>
</div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 col-xl-4 py-2" v-for="product in productList" :key="product.Id" v-bind="product">
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
