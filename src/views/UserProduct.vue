<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-fluid mt-5">
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0">
        <img :src="images[0]" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-start gx-0">
        <div class="d-flex flex-column m-5 ps-md-5">
          <h4 class="font-md-l fw-bold mb-3 ">{{ tempProduct.title }}</h4>
          <p class="mb-5 fs-5 text-theme">售價：${{ tempProduct.price }}</p>
          <p v-for="(content) in contentList" :key="content">{{ content }}</p>
          <div class="col">
            <button class="btn btn-btn-bg btn-xl btn-view"
                :disabled ="this.status.loadingItem === tempProduct.id"
                @click="addCart(tempProduct.id)">
                <div class="spinner-grow text-red spinner-grow-sm"
                  v-if="this.status.loadingItem === tempProduct.id">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車</button>
                <button class="btn btn-outline-primary btn-xl"
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
        <img :src="images[1]" alt="" class="img-fluid">
      </div>
    </div>
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0">
        <img :src="images[2]" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column content ms-md-5 ps-5">
          <p>{{ descriptionList[1] }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 mt-3 mb-3"
       v-for="(image, key) in imagesList" :key="`image${key}`">
        <img :src="image" alt="" class="img-fluid">
      </div>
    </div>
  </div>
</template>
<style>
.content{
  white-space: pre-wrap;
}
</style>
<script>
export default {
  data() {
    return {
      tempProduct: {},
      id: '',
      status: {
        loadingItem: '', // 對應品項id
      },
      images: [],
      imagesList: [],
      contentList: {},
      descriptionList: {},
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api)
        .then((res) => {
          this.tempProduct = res.data.product;
          this.images = this.tempProduct.images;
          this.imagesList = this.tempProduct.images.slice(3);
          const { content } = this.tempProduct;
          this.contentList = content.split('\n');
          const { description } = this.tempProduct;
          this.descriptionList = description.split('；');
          console.log('imagesList', this.imagesList);
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
