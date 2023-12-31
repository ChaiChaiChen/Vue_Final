<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <div class="banner">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703908235018.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HMirTBLqIDnBljng1KfXDplpROeMbDTPnuByMw7zyhfEA68A1cJ50BtPiG5fy%2BK0tNn%2Fp2LrpF01mQN7L0Q0eJxm19w6GYS0BiabUcYqF4gy0iYbvPB7qgrmG1duyOETR16Ms8zwRkt2hd1oM%2F3Fbi78sn%2FRjheIcp8X%2BdVQjvdaINQsxsn5GKyvFHjdfG8QzqmI4%2FR2WuDhWzZNQbfqGX49PM0H%2Bedb%2FuABPzfu7Zgknnxx6SBoj4tLIiJFByfKEbeu%2F6gEZh1mOoEmspR84XpnGVedOA9AJQm8I9c%2FK9bTcZbtG8GshqrXNR7PU%2FzOBv1%2FdANSkDZQXhhrYQqb5Q%3D%3D" class="d-block w-100" alt="...">

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
            <img :src="product.imageUrl" class="img-cover" height="300">
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
