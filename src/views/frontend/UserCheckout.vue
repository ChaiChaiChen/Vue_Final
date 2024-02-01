<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706078810302.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MAAQRolibq6tHzK8TGDZ4o%2Bryk5I2oNYpMJwSGBo1fbSc3%2BtTDEAdEWFJSX5CdVzZFdcOsVIAkgO%2BCXlx3GXgG07d8zOL45xdw8hJt%2B2Vj%2BxiTF8DSC6BJIszgx%2F6mXWtSB1CC0FYN%2B39QVvJ1dSw0GLM1tmIsy1WRjUNTIk3T7oZYbJuFY3pmF0G7dXJr82rmgeZMKs6ySBMGkVlM7sLbVAvx08kX5J5O6ULFH4YqRAfjxUGoUyce6RzpCRnDLakbrtPD7eO9MP%2B0TP%2F04%2BYKMYT6c5IHR5bslmlMIO6jaJ6kzIHUSXKSJ99JN8FCW48CeCHF28NEw0Hq3GnJ4EPA%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
        <h1 class="bannerText">結帳</h1>
      </div>
      </div>
    </div>
  </div>
  <div class="container">
  <Loading :active="isLoading"></Loading>
  <div class="my-5 row justify-content-center text-center">
    <div class="col-md-8">
      <table class="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th class="unit">數量</th>
            <th>單價</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="cart in cartsList.carts" :key="cart.Id">
              <td>
                <img :src="cart.product.images[0]" class="productImg" alt="">
              </td>
            <td class="bg-table-title">
              <router-link :to="`/product/${cart.product_id}`"
               class="text-decoration-none text-theme">
              {{ cart.product.title }}<i class="bi bi-link-45deg fs-5 text-danger"></i>
              </router-link>
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
                  <td>
              <button class="btn btn-outline-danger btn-sm"
              type="button" @click="deleteCartItem(cart.id)">
              <i class="bi bi-trash3"></i>
              </button>
            </td>
            </tr>
        </tbody>
        <tfoot>
          <tr>
                <td colspan="4" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cartsList.total) }}</td>
              </tr>
              <tr v-if="cartsList.final_total !== cartsList.total">
                <td colspan="4" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cartsList.final_total) }}
                </td>
              </tr>
        </tfoot>
      </table>
  </div>
  <div class="col-lg-5 col-md-10 mt-3">
    <div class="input-group mb-3 input-group-md">
      <input type="text" class="form-control rounded-0 form-style"
       v-model="coupon_code" placeholder="請輸入優惠碼">
      <div class="input-group-append">
        <button class="btn btn-btn-bg" type="button" @click="addCouponCode">
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
</div>
  <div class="my-5 row justify-content-center" v-if="cartsList.total > 0">
      <Form class="col-md-6" v-slot="{ errors }"
            @submit="createOrder">
        <!-- <div class="input-group">
          <input type="text" class="input" required id="username">
          <label class="label" for="username">Username</label>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div> -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control rounded-0
           form-style"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control rounded-0 form-style"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="tel" class="form-control rounded-0 form-style"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control rounded-0 form-style"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control rounded-0
           form-style" cols="30" placeholder="留言"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-btn-bg btn-add-view btn-xl">送出訂單</button>
        </div>
      </Form>
    </div>
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
        this.$httpMessageState(response, '使用優惠券');
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
