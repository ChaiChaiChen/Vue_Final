<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703864415662.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pTokQX%2BefqJHJNHR2UWBUozNJjfqg8ANj64NXNPtnfPe2%2BVqeZFyedy5IkAm9%2FrCfAnBXyYetWelOelJFStgjKBrmbAd2qORug5e8rh2gqKFRvgHHSMBs7KptaLEi6MibZbxvLKxFmzIwVHwi6IL0u1wDZjR28Qo2BwnS2SVyZJwsIBDZWkCiQd1tf4PDAb96qfYQPDdGmyfSQmgHB2BdcsS%2F%2F3tFMHSr4uEiKPL3YfoIAmsCMblyOGtdIUgu1RmW8HkJ%2FdRd%2BuqNwqJWK2zARdkT8%2FeNFSPeBaYT7J8zYsbSdEi47k4zMY9xDz80wteNK4lJkyLH%2Bsf7mzCA1pvyw%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703864621709.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pq%2FI5xrzA04ZRUaOhmIYrVuTaoduJUR6Btj4nUjr8uUMnDgPovnaAJkSseBBmcX%2FrtFDCtkkoBDxJ%2FRwkvoFIGhHU6NuugcFw6WyJ0YA4b%2F9JKyapIRYyfevrrKoGOCvzoqlimtR%2B%2FUCglNsM4LIc4dCelBKH2UXoIkb5CAQtQjPNRPg2QCn2lVDOqo6yZon%2FwKB3nY%2FF8CPhRgOTwsvr1jYrthcBxl3OAo2krAo11V%2FZ868KoRcvWYMjvIHewP9sV20Xh1Aw8vH204Te8k58QBkUEJyuxwdKMANfqJao2vRzbT2xlvjVT%2FMg5iFWT8Xq19Yf7LlDOjNer0LO3pJAg%3D%3D" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 col-xl-4 py-2" v-for="product in productList" :key="product.Id" v-bind="product">
        <div class="card">
          <div class="card border-white text-white text-left" @click="getProduct(product.id)">
            <img :src="product.imageUrl" class="img-cover" height="350">
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

<div class="my-5 row justify-content-center">
  <div class="col-md-8">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 100px">數量</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="cart in cartsList.carts" :key="cart.Id">
          <td>
            <button class="btn btn-outline-danger btn-sm" type="button" @click="deleteCartItem(cart.id)">
              <i class="bi bi-x"></i>
            </button>
          </td>
          <td>
            {{ cart.product.title }}
          </td>
          <td>
            <div class="input-group input-group-sm">
              <input type="number" class="form-control" min="1"
                    v-model.number="cart.qty" @change="updateCart(cart)">
              <div class="input-group-text">/ {{ cart.product.unit }}</div>
            </div>
          </td>
          <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(cart.final_total) }}
                </td>
          </tr>
      </tbody>
      <tfoot>
        <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ (cartsList.total) }}</td>
            </tr>
            <tr v-if="cartsList.final_total !== cartsList.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ (cartsList.final_total) }}</td>
            </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
</div></div>
  <div class="my-5 row justify-content-center" v-if="cartsList.total > 0">
      <Form class="col-md-6" v-slot="{ errors }"
            @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      productList: [],
      cartsList: [],
      status: {
        loadingItem: '', // 對應品項id
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      coupon_code: '',
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
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cartsList = response.data.data;
        console.log('cartsList', this.cartsList);
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
    deleteCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((response) => {
        console.log(response);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCart();
        this.isLoading = false;
      });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res);
          this.$router.push(`checkout/${res.data.orderId}`);
        });
    },
  },

  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
