<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="row mt-5">
            <h2 class="mt-5">Welcome back, Admin</h2>
            <div class="col-xl-3 col-6 mt-3">
                <div class="info p-4">
                    <h4 class="mt-2">
                      <i class="bi bi-bar-chart-fill fs-3 text-success"></i>
                      <strong class="ms-3 fs-3">產品清單</strong>
                    </h4>
                    <p class="mt-3">共{{ products.length }}筆資料
                    </p>
                    <p class="mt-3">已啟用：{{ products_isenabled.length }}筆資料
                      <router-link to="/dashboard/products">
                        <button class="morebtn float-end">
                          <i class="bi bi-arrow-right text-theme"></i>
                        </button>
                      </router-link>
                    </p>
                </div>
            </div>
            <div class="col-xl-3 col-6 mt-3">
                <div class="info p-4">
                    <h4 class="mt-2">
                      <i class="bi bi-bag-check-fill fs-2 text-success"></i>
                      <strong class="ms-3 fs-2">訂單</strong>
                    </h4>
                    <p class="mt-3">共{{ ordersList }}筆資料</p>
                    <p class="mt-3">已付款：{{ orders_is_paid }}筆
                      <router-link to="/dashboard/articles">
                        <button class="morebtn float-end">
                          <i class="bi bi-arrow-right text-theme"></i>
                        </button>
                      </router-link>
                    </p>

                </div>
            </div>
            <div class="col-xl-3 col-6 mt-3">
                <div class="info p-4">
                    <h4 class="mt-2">
                      <i class="bi bi-bookmark-check-fill fs-3 text-success"></i>
                      <strong class="ms-3 fs-3">優惠券</strong>
                    </h4>
                    <p class="mt-3">
                      目前：{{ couponsList.length }}組優惠碼
                    </p>
                  <p class="mt-3">已啟用：{{ coupons_isenabled.length }}組
                    <router-link to="/dashboard/coupons">
                      <button class="morebtn float-end">
                        <i class="bi bi-arrow-right text-theme"></i>
                      </button>
                    </router-link>
                  </p>
                </div>
            </div>
            <div class="col-xl-3 col-6 mt-3">
                <div class="info p-4">
                    <h4 class="mt-2">
                      <i class="bi bi-chat-dots-fill fs-3 text-success"></i>
                      <strong class="ms-3 fs-3">留言</strong>
                    </h4>
                    <p class="mt-3">共{{ articlesList.length }}筆資料</p>
                    <p class="mt-3">已啟用：{{ articles_isenabled.length }}則
                      <router-link to="/dashboard/articles">
                        <button class="morebtn float-end">
                          <i class="bi bi-arrow-right text-theme"></i>
                        </button>
                      </router-link>
                    </p>
                </div>
            </div>
            <div class="col-xl-8 col-12 mt-5">
              <div class="info">
              <h3 class="text-center mt-3">歷年銷售量</h3>
                <BarChart class="my-2"></BarChart>
              </div>
            </div>
            <div class="col-xl-4 col-12 mt-5">
              <div class="info">
                <h3 class="text-center mt-3">類別銷量</h3>
                  <PieChart class="my-3"></PieChart>
              </div>
            </div>
            <!-- <div class="col-xl-8 col-12 mt-5">
              <div class="info px-5">
                <h3 class="text-center mt-3">運送進度</h3>
                <select class="form-select" aria-label="Default select example"
                 @change="progressdata()">
                  <option selected>選擇訂單</option>
                  <option v-for="(item, key) in ordersList" :key=key>{{ item.user.name }}</option>
                </select>
                <div class="col mx-lg-5 mx-5">
                  <ProgressBarChart :progressdata="currentProgress"
                   class="my-2"></ProgressBarChart>
                </div>
                <div class="d-flex justify-content-between">
                  <p :class="{successtextclass: currentProgress >= 0}" class="mx-lg-5">已接單</p>
                  <p :class="{successtextclass: currentProgress >= 25}" class="mx-lg-5">已付款</p>
                  <p :class="{successtextclass: currentProgress >= 50}" class="mx-lg-5">作業中</p>
                  <p :class="{successtextclass: currentProgress >= 75}" class="mx-lg-5">已出貨</p>
                  <p :class="{successtextclass: currentProgress === 100}" class="mx-lg-5">已取貨</p>
                </div>
              </div>
            </div> -->
            <div class="col-xl-8 col-12 mt-5">
              <div class="info">
              <h3 class="text-center mt-3">歷年業績</h3>
                <LineChart class="my-2"></LineChart>
              </div>
            </div>
        </div>
    </div>
</template>
<style>
.successtextclass{
  color: #4bd614;
}
.info{
    border:1px solid #cacaca;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    border-radius: 5px;
    background: white;
    transition: box-shadow .3s;
}
.morebtn{
  border: 1px solid #ffa742;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s;
}
.morebtn:hover{
  background-color: #ffd5ae;
}
</style>
<script>
import { mapState, mapActions } from 'pinia';
import allStore from '@/stores/backend/allProductStore';
import LineChart from '../../components/LineChart.vue';
import PieChart from '../../components/PieChart.vue';
import BarChart from '../../components/BarChart.vue';
// import ProgressBarChart from '../../components/ProgressBarChart.vue';

export default {
  data() {
    return {
      products_isenabled: '',
      ordersList: 0,
      orders_is_paid: 0,
      couponsList: {},
      coupons_isenabled: '',
      articlesList: {},
      articles_isenabled: '',
      currentProgress: '',
      start_page: 1,
      ordersLength: 0,
      orderspaidLength: 0,
    };
  },
  components: {
    LineChart,
    PieChart,
    BarChart,
    // ProgressBarChart,
  },
  inject: ['emitter'],
  computed: {
    ...mapState(allStore, ['products']),
  },
  methods: {
    ...mapActions(allStore, ['getProducts']),
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            for (this.start_page; this.start_page < res.data.pagination.total_pages + 1;
              this.start_page += 1) {
              console.log('nowPage', this.start_page);
              const pageapi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${this.start_page}`;
              this.$http.get(pageapi)
                .then((result) => {
                  this.ordersLength = Object.values(result.data.orders).length;
                  this.ordersList = this.ordersLength + this.ordersList;
                  this.orderspaidLength = Object.values(result.data.orders)
                    .filter((item) => item.is_paid === true).length;
                  console.log('paid', this.orderspaidLength);
                  this.orders_is_paid = this.orderspaidLength + this.orders_is_paid;
                });
            }

            // this.ordersList = Object.values(res.data.orders);
            // this.orders_is_paid = Object.values(res.data.orders)
            //   .filter((item) => item.is_paid === true);
          }
        });
    },
    getCoupons() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(url).then((res) => {
        this.couponsList = Object.values(res.data.coupons);
        this.coupons_isenabled = Object.values(res.data.coupons)
          .filter((item) => item.is_enabled === 1);
      });
    },
    getArticles() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles`;
      this.$http.get(url).then((res) => {
        this.articlesList = Object.values(res.data.articles);
        this.articles_isenabled = Object.values(res.data.articles)
          .filter((item) => item.isPublic === true);
      });
    },
    progressdata() {
      this.currentProgress = (Math.floor(Math.random() * 5) * 25);
      console.log(this.currentProgress);
    },
  },
  async created() {
    try {
      await this.getProducts();
      if (Object.keys(this.products).length > 0) {
        this.products_isenabled = Object.values(this.products)
          .filter((item) => item.is_enabled === 1);
      }
    } catch (error) {
      console.log(error);
    }
    this.getOrders();
    this.getCoupons();
    this.getArticles();
    this.progressdata();
  },
};
</script>
