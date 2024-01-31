<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Loading :active="isLoading"></Loading>

  <div class="container-fluid">

    <div class="row justify-content-center align-items-center bg-gray mt-5">
      <div class="coupon-container bg-nav text-theme text-center d-flex align-items-center justify-content-center mt-lg-4 mt-md-2" style=" height: 50px;">
        <div class="coupon-content">現在輸入優惠碼：95%&emsp;&emsp;享有95折優惠</div>
      </div>
      <div class="col-md-12 col-lg-4 mt-5">
          <img :src="enterImage" alt="" class="img-fluid rounded" style="width: 480px;">
      </div>
      <div class="col-md-12 col-lg-3 row mt-5">
        <div class="col-lg-6 col-3 secImg-box mt-4" v-for="secImage in imagesList" :key="secImage">
            <a @mouseover="changeEnterImage(secImage)">
              <img :src="secImage" style="width: 200px;" class="img-fluid rounded" alt="">
            </a>
        </div>
      </div>

      <!-- <div class="col-md-6 gx-0 mt-5">
        <div class="d-flex justify-content-end">
          <img :src="enterImage" alt="" class="img-fluid" style="height: 480px;">
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-center">
          <div class="col-6 secImg-box m-3" v-for="secImage in imagesList" :key="secImage">
            <a @mouseover="changeEnterImage(secImage)">
              <img :src="secImage" style="height: 140px;" alt="">
            </a>
        </div>
        </div>
      </div> -->
      <div class="row justify-content-center gx-0">
        <div class="col-lg-4 col-12 mt-4">
          <h4 class="font-md-l fw-bold mb-3 "><strong>{{ tempProduct.title }}</strong></h4>
          <p class="fs-5 text-theme">售價：${{ tempProduct.price }}</p>
        </div>
        <div class="col-lg-4 col-12 mt-4 row justify-content-center">
          <div class="btn-group" role="group" aria-label="Basic example" style="height: 50px;">
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
      <div class="col-lg-3 text-center my-3 border bg-white" v-for="(content) in contentList" :key="content">
        <div class="row justify-content-center align-items-center" style="height: 100px;">
          <p class="mt-3">{{ content }}</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1">
        <div class="d-flex flex-column ms-4 content lh-lg">
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
      <div class="col-md-6 d-flex gx-0">
        <div class="d-flex flex-column justify-content-center content ms-4 ms-lg-5 lh-lg">
          <p>{{ descriptionList[1] }}</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1">
        <div class="d-flex flex-column ms-4 content lh-lg">
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
              <p class="card-text">售價：{{ $filters.currency(product.price) }}</p>
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
.secImg-box{
  transform:scale(1,1);
  transition: all 0.3s ease-out;
}
.secImg-box:hover{
  transform:scale(1.1,1.1);
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
      enterImage: '',
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
  inject: ['emitter'],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.tempProduct = res.data.product;
          this.enterImage = this.tempProduct.imageUrl;
          this.images = this.tempProduct.images;
          this.imagesList = this.tempProduct.images.slice(5);
          const { content } = this.tempProduct;
          this.contentList = content.split('\n');
          const { description } = this.tempProduct;
          this.descriptionList = description.split('；');
          this.same(this.tempProduct.category);
          this.isLoading = false;
          this.$scroll.scrollTop();
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
        this.$httpMessageState(response, '加入購物車');
      });
    },
    same(productCategory) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((response) => {
        this.productList = response.data.products;
        this.relatedProducts = this.productList.filter((item) => item.category === productCategory
        && item.id !== this.tempProduct.id);
        this.relatedProducts = this.relatedProducts.slice(0, 4);
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
    shareUrl() {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          const response = {
            // eslint-disable-next-line no-undef
            data: {
              success: true,
            },
          };
          this.$httpMessageState(response, '複製連結');
        });
    },
    changeEnterImage(secImage) {
      this.enterImage = secImage;
    },
  },
  created() {
    // 透過$route.params接收UserCart所傳送的productId
    this.id = this.$route.params.productId;
    this.getProduct();
    let i = 0;
    setInterval(() => {
      this.enterImage = this.imagesList[i];
      i += 1;
      if (i >= this.imagesList.length) {
        i = 0;
      }
    }, 5000);
  },
};
</script>
