<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-fluid mt-5">
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0">
        <img :src="images[0]" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column m-5">
          <h4 class="font-md-l fw-bold mb-3 ">{{ tempProduct.title }}</h4>
          <p>售價：${{ tempProduct.price }}</p>
          <p>產品內容：{{ tempProduct.content }}</p>
          <p>產品描述：{{ tempProduct.description }}</p>
          <button class="btn btn-outline-danger btn-xl"
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
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column m-5">
          <h4 class="font-md-l fw-bold mb-3 ">{{ tempProduct.title }}</h4>
          <p>售價：${{ tempProduct.price }}</p>
          <p>產品內容：{{ tempProduct.content }}</p>
          <p>產品描述：{{ tempProduct.description }}</p>
          <button class="btn btn-outline-danger btn-xl"
                :disabled ="this.status.loadingItem === tempProduct.id"
                @click="addCart(tempProduct.id)">
                <div class="spinner-grow text-red spinner-grow-sm"
                  v-if="this.status.loadingItem === tempProduct.id">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車</button>
        </div>
      </div>
      <div class="col-md-6 gx-0">
        <img :src="images[2]" alt="" class="img-fluid">
      </div>
    </div>
    <div class="row align-items-center bg-gray">
      <div class="col-md-6 gx-0">
        <img :src="images[4]" alt="" class="img-fluid">
      </div>
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column m-5">
          <h4 class="font-md-l fw-bold mb-3 ">{{ tempProduct.title }}</h4>
          <p>售價：${{ tempProduct.price }}</p>
          <p>產品內容：{{ tempProduct.content }}</p>
          <p>產品描述：{{ tempProduct.description }}</p>
          <button class="btn btn-outline-danger btn-xl"
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
      images: [],
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api)
        .then((res) => {
          console.log(res.data);
          this.tempProduct = res.data.product;
          this.images = this.tempProduct.images;
          console.log(this.tempProduct);
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
