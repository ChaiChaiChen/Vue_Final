<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Loading :active="isLoading"></Loading>
<div class="coupon-container bg-theme text-white text-center d-flex align-items-center justify-content-center" style="margin-top: 85px; height: 40px;">
  <div class="coupon-content">現在輸入優惠碼：95%&emsp;&emsp;享有95折優惠</div>
</div>
  <div class="container-fluid">
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0 mt-5">
        <img :src="tempProduct.imageUrl" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-start gx-0 mt-md-5">
        <div class="d-flex flex-column m-5 ps-md-5">
          <h4 class="font-md-l fw-bold mb-3 ">{{ tempProduct.title }}</h4>
          <p class="mb-5 fs-5 text-theme">售價：${{ tempProduct.price }}</p>
          <p v-for="(content) in contentList" :key="content">{{ content }}</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn btn-btn-bg btn-xl btn-add-view m-1"
                :disabled ="this.status.loadingItem === tempProduct.id"
                @click="addCart(tempProduct.id)">
                <div class="spinner-grow text-red spinner-grow-sm"
                  v-if="this.status.loadingItem === tempProduct.id">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車</button>
                <button class="btn btn-btn-share-bg btn-share-view btn-xl m-1"
                @click="shareUrl"
                :disabled ="this.status.loadingItem === tempProduct.id"
                >
                分享 <i class="bi bi-share"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1">
        <div class="d-flex flex-column mr-5 ms-5 content">
          <p>{{ descriptionList[0] }}</p>
        </div>
      </div>
      <div class="col-md-6 gx-0 order-1 order-md-2">
        <img :src="images[2]" alt="" class="img-fluid">
      </div>
    </div>
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0">
        <img :src="images[3]" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column content ms-md-5 ps-5">
          <p>{{ descriptionList[1] }}</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1">
        <div class="d-flex flex-column mr-5 ms-5 content">
          <p>{{ descriptionList[2] }}</p>
        </div>
      </div>
      <div class="col-md-6 gx-0 order-1 order-md-2">
        <img :src="images[4]" alt="" class="img-fluid">
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 mt-3 mb-3"
       v-for="(image, key) in imagesList" :key="`image${key}`">
        <img :src="image" alt="" class="img-fluid">
      </div>
    </div>
  </div> -->
  <div class="container mt-5 mb-5" v-if="relatedProducts.length > 0">
    <div class="row">
      <h3 class="text-center mb-4">相關產品</h3>
      <div class="col-sm-12 col-md-6 col-xl-3 py-2" v-for="(product,index) in relatedProducts"
       :key="product.Id" v-bind="product">
        <div class="card rounded-0">
          <!-- https://www.yisu.com/zixun/153224.html -->
          <div class="card border border-white text-white text-left imgHover" @mouseenter="enterFun(index)"  @mouseleave="leaveFun(index)" @click="relatedProduct(product.id)">
            <img v-if="showImage || n != index" :src="product.images[0]" alt="" class="img-cover imageSize" height="300">
            <img v-else :src="product.images[1]" alt="" class="img-cover imageSize" height="300">
          </div>
          <div class="card-body text-center">
            <h5 class="card-img-title-lg">{{ product.title }}</h5>
              <p class="card-text">售價：{{ product.price }}</p>
            <button class="btn btn-btn-bg btn-add-view btn-xl"
            :disabled ="this.status.loadingItem === product.id"
            @click="addCart(product.id)">
            <div class="spinner-grow text-red spinner-grow-sm"
            v-if="this.status.loadingItem === product.id">
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
.content{
  white-space: pre-wrap;
}
.coupon-container {
  width: 100%;
  overflow: hidden;
}

.coupon-content {
  display: inline-block;
  white-space: nowrap;
  animation: coupon 15s linear infinite;
}

@keyframes coupon {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
<script>
export default {
  data() {
    return {
      isLoading: false,
      tempProduct: {},
      id: '',
      status: {
        loadingItem: '', // 對應品項id
      },
      images: [],
      imagesList: [],
      contentList: {},
      descriptionList: {},
      relatedProducts: [],
      showImage: true,
      n: 0,
      elTop: 0, // 滾動前,捲軸距離視窗頂部的距離
      share: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling);
    // 資料掛載完, window去監聽scroll事件
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.tempProduct = res.data.product;
          this.images = this.tempProduct.images;
          this.imagesList = this.tempProduct.images.slice(5);
          const { content } = this.tempProduct;
          this.contentList = content.split('\n');
          const { description } = this.tempProduct;
          this.descriptionList = description.split('；');
          this.same(this.tempProduct.category);
          this.isLoading = false;
          this.scrollTop();
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
    same(productCategory) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((response) => {
        this.productList = response.data.products;
        this.relatedProducts = this.productList.filter((item) => item.category === productCategory
        && item.id !== this.tempProduct.id);
        console.log(this.relatedProducts);
      });
    },
    relatedProduct(id) { // 取得產品id切換到該產品頁面
      this.$router.push(`/product/${id}`);
      this.id = id;
      this.getProduct();
    },
    enterFun(index) {
      this.showImage = false;
      this.n = index;
    },
    leaveFun(index) {
      this.showImage = true;
      this.n = index;
    },
    // 要滑到top為0的位置, 使用smooth的模式
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },

    scrolling() {
      // 捲軸距離視窗頂部的距離
      const scrolltoTop = window.pageYOffset;
      // 更新: 滾動前,捲軸距離視窗頂部的距離
      this.elTop = scrolltoTop;
    },
    shareUrl() {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          console.log('分享');
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
