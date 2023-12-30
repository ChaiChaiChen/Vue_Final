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
</div>
</div>
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
