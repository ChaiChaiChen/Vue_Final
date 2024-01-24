<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706078810302.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MAAQRolibq6tHzK8TGDZ4o%2Bryk5I2oNYpMJwSGBo1fbSc3%2BtTDEAdEWFJSX5CdVzZFdcOsVIAkgO%2BCXlx3GXgG07d8zOL45xdw8hJt%2B2Vj%2BxiTF8DSC6BJIszgx%2F6mXWtSB1CC0FYN%2B39QVvJ1dSw0GLM1tmIsy1WRjUNTIk3T7oZYbJuFY3pmF0G7dXJr82rmgeZMKs6ySBMGkVlM7sLbVAvx08kX5J5O6ULFH4YqRAfjxUGoUyce6RzpCRnDLakbrtPD7eO9MP%2B0TP%2F04%2BYKMYT6c5IHR5bslmlMIO6jaJ6kzIHUSXKSJ99JN8FCW48CeCHF28NEw0Hq3GnJ4EPA%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
        <h1 class="bannerText">付款</h1>
      </div>
      </div>
    </div>
  </div>
    <Loading :active="isLoading"></Loading>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle">
          <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
          </thead>
          <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ $filters.currency(item.qty) }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(order.total) }}</td>
          </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="text-end" v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款去</button>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            console.log(this.order);
            this.isLoading = false;
          }
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>
