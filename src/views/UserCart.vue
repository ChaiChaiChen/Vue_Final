<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703563863874.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MeNl8zCCkQLH8gVEPVqKRTZ20b9X1kAgyYRPsDd4d%2FCR0c32xAGKAyKag5w1JatIwgUhxSZzzSI4XCioB1wYZvJESijp6l3vudrFdR9tXRAac1%2BoeKdN7uecevnuBrpV%2BcCiJEgkyzDJqxi%2BKC0H2FSrBcA14U2W6eeyXOfJ%2FpuU9%2B8EDOMpgUBS1x7%2Ft1noNmEcNO73OrpGrh4a%2FPgmB7hvy1jYGaDXGcGs8j%2BaVjMSjOEufMgq3ga7HHZ4J4Mkx82AkwuUoLdHWlp7Uf0SYcQE62IZYYdU%2B4T7sIteR06uRuN6zd7Pz0Kj2zyy6Jojmoe26JhnwxBLSCAAcsy32w%3D%3D" class="d-block w-100">
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
