<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704688694154.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TDqPpRKduKijGpwaoRFJepfnRIfVupIvLLZe9pIoUDztJ5T0%2B5gd74UhQAYGPuJbfa713z%2FGCNmeWbrXGVJJMLIAi%2BkLgDX1b5CYuSDzhtBke4vmafE4%2FZIuJl0DW1x1F34UbBTZTH%2F52yIVBQGKhgeQG3JNP6hYOl9t82FsaWYibPEH%2FhL2UVJMss8FsKbNfH0zVbxF96Uk9HDAD3jjRDfKsQnmJ5gzeLVtU3vP6GI7C%2B1ATnTWWxsJWG0UjUXF0mKvIB38f5yT7n%2FFRHPAwoPCqrx4d70Wkxxjd5R58VPD%2BST65W0%2FjGNCyf35O2YE42Y%2FXeQlvxgbScHKFMQ5og%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block justify-content-center carousel-text">
        <h1><strong>結帳</strong></h1>
      </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
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
              <button class="btn btn-outline-danger btn-sm"
              type="button" @click="deleteCartItem(cart.id)">
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
  </template>

<script>

export default {
  data() {
    return {
      isLoading: false,
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
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cartsList = response.data.data;
        console.log('cartsList', this.cartsList);
        this.isLoading = false;
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
          this.$router.push(`pay/${res.data.orderId}`);
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
  },

  created() {
    this.getCart();
  },
};
</script>
