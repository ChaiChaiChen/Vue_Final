<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
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
      <div class="col">
        <ul class="list-group list-group-horizontal justify-content-center mt-3">
          <li class="list-group-item" :class="{ active: filterType === '全部' }" @click="getFilter(filterType = '全部')">全部商品</li>
          <li class="list-group-item" :class="{ active: filterType === '布質' }" @click="getFilter(filterType = '布質')">布質沙發</li>
          <li class="list-group-item" :class="{ active: filterType === '半皮' }" @click="getFilter(filterType = '半皮')">半皮沙發</li>
          <li class="list-group-item" :class="{ active: filterType === '全皮' }" @click="getFilter(filterType = '全皮')">全皮沙發</li>
        </ul>
      </div>
  </div>
</div>

<div class="container">
  <div class="row mt-5">
    <div class="col-sm-12 col-md-6 col-xl-4 py-2" v-for="(product,index) in relatedProducts" :key="product.Id" v-bind="product">
      <div class="card rounded-0">
        <!-- https://www.yisu.com/zixun/153224.html -->
        <div class="card border-white text-white text-left imgHover" @mouseenter="enterFun(index)" @mouseleave="leaveFun(index)" @click="getProduct(product.id)">
          <img v-if="showImage || n != index" :src="product.images[0]" class="img-cover imgSize" height="350">
          <img v-else :src="product.images[1]" class="img-cover imgSize" height="350">
        </div>
        <div class="card-body text-center">
          <h5 class="card-img-title-lg">{{ product.title }}</h5>
            <p class="card-text">售價：{{ product.price }}</p>
          <button class="btn btn-btn-bg btn-view btn-xl"
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
      productList: [], // 存放所有產品
      status: {
        loadingItem: '', // 對應品項id
      },
      showImage: true, // hover顯示產品第二張照片
      relatedProducts: [], // 存放類別產品
      filterType: '全部', // 切換產品類別
      n: 0,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((response) => {
        this.productList = response.data.products;
        this.relatedProducts = this.productList;
        console.log(this.productList);
      });
    },
    getFilter() { // 切換產品
      switch (this.filterType) {
        case '全部':
          this.relatedProducts = this.productList;
          break;
        case '布質':
          this.relatedProducts = this.productList.filter((item) => item.category === '布質');
          break;
        case '半皮':
          this.relatedProducts = this.productList.filter((item) => item.category === '半皮');
          break;
        case '全皮':
          this.relatedProducts = this.productList.filter((item) => item.category === '全皮');
          break;
        default:
          break;
      }
    },
    getProduct(id) { // 取得產品id切換到該產品頁面
      this.$router.push(`/product/${id}`);
    },
    addCart(id) { // 加入購物車
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id; // 取得產品id
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        console.log('Products', response);
      });
    },
    enterFun(index) {
      this.showImage = false;
      this.n = index;
    },
    leaveFun(index) {
      this.showImage = true;
      this.n = index;
    },
  },

  created() {
    this.getProducts();
  },
};
</script>
