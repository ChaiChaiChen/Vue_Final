<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706077315976.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D7%2BEdS2XnksgpFa1QOFNVE0MXXPJC8NCGx1JPzBv5QhXO0BV1fZS3dwdhI04MNzsxeblXDUEb8kyo0BLzgyqud0wg4Kj9c3fNbLbStXlVxGhofVrUYCul8uyes65R5dhMAQCe7lP0esqFKHTEsGatIloErJEUokuD2DUEFNA7aWYDMRAX0UD2efeuK2glXsbIS9uNlzS32Tw9JHpWMwp4pygOy1zVrg85OuVETeQ7UumA821mxIOeMHxZ74sKjimSAeyYNJbkJeY%2FOYUflqdcGcaZh2G6NUzELn3%2Bh5CvesxnVo504e5pXCmPyJHH%2BeaYY9EeJbaeIqeUc6RP2W1IA%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
          <h1 class="bannerText">安坐家中&emsp;<br>&emsp;樂享生活</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
  <Loading :active="isLoading"></Loading>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <ul class="list-group list-group-horizontal justify-content-center mt-3">
          <li class="list-group-item" :class="{ active: filterType === '全部' }" @click="getFilter(filterType = '全部')">全部商品</li>
          <li class="list-group-item" :class="{ active: filterType === '布質' }" @click="getFilter(filterType = '布質')">布質沙發</li>
          <li class="list-group-item" :class="{ active: filterType === '半皮' }" @click="getFilter(filterType = '半皮')">半皮沙發</li>
          <li class="list-group-item" :class="{ active: filterType === '全皮' }" @click="getFilter(filterType = '全皮')">全皮沙發</li>
        </ul>
      </div>
      <div class="col-lg-2 col-8 mt-4">
        <form class="form-inline">
          <input type="search" class="form-control" placeholder="快速搜尋" aria-label="Search" v-model="search">
        </form>
      </div>
    </div>
  </div>
<div class="container">
  <div class="row mt-3 mb-5">
    <div class="col-sm-12 col-md-6 col-xl-4 py-2" v-for="(product,index) in filterProducts" :key="product.Id" v-bind="product">
      <div class="card rounded-0">
        <!-- https://www.yisu.com/zixun/153224.html -->
      <div class="card border-white text-white text-left imgHover" @mouseenter="enterFun(index)" @mouseleave="leaveFun(index)" @click="getProduct(product.id)">
        <img v-if="showImage || n != index" :src="product.images[0]" class="img-cover imgSize" height="350">
        <img v-else :src="product.images[1]" class="img-cover imgSize" height="350">
      </div>
      <div class="card-body text-center bg-card">
        <h5 class="card-img-title-lg">{{ product.title }}</h5>
          <p class="card-text">售價：{{ $filters.currency(product.price) }}</p>
        <button class="btn btn-btn-bg btn-add-view btn-xl"
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
import { mapState, mapActions } from 'pinia';
import productStore from '@/stores/frontend/productStore';

export default {
  data() {
    return {
      isLoading: false,
      search: '',
      status: {
        loadingItem: '', // 對應品項id
      },
      showImage: true, // hover顯示產品第二張照片
      filterType: '全部', // 切換產品類別
      relatedProducts: [],
      n: 0,
    };
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['productList']),
    filterProducts() {
      // eslint-disable-next-line array-callback-return
      return this.relatedProducts.filter((item) => item.title.match(this.search));
    },
  },
  // watch: {
  //   productList: {
  //     deep: true,
  // 當元件建立好，就立即執行一次此函式
  //     immediate: true,
  //     handler(value) {
  //       console.log(value);
  //       if (Object.keys(value).length > 0) {
  //         this.relatedProducts = JSON.parse(JSON.stringify(value));
  //       }
  //     },
  //   },
  // },
  methods: {
    ...mapActions(productStore, ['getProducts']),
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
        this.$httpMessageState(response, '加入購物車');
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

  async created() {
    try {
      await this.getProducts();
      if (Object.keys(this.productList).length > 0) {
        this.relatedProducts = JSON.parse(JSON.stringify(this.productList));
        this.$scroll.scrollTop();
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
