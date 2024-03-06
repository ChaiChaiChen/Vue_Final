<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-xl-3 col-6 mt-5">
                <div class="info p-4 details-box">
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
            <div class="col-xl-3 col-6 mt-5">
                <div class="info p-4 details-box">
                    <h4 class="mt-2">
                      <i class="bi bi-bag-check-fill fs-2 text-success"></i>
                      <strong class="ms-3 fs-2">訂單</strong>
                    </h4>
                    <p class="mt-3">共{{ ordersList }}筆資料</p>
                    <p class="mt-3">已付款：{{ orders_is_paid }}筆
                      <router-link to="/dashboard/orders">
                        <button class="morebtn float-end">
                          <i class="bi bi-arrow-right text-theme"></i>
                        </button>
                      </router-link>
                    </p>

                </div>
            </div>
            <div class="col-xl-3 col-6 mt-lg-5 mt-4">
                <div class="info p-4 details-box">
                    <h4 class="mt-2">
                      <i class="bi bi-bookmark-check-fill fs-3 text-success"></i>
                      <strong class="ms-3 fs-3">優惠券</strong>
                    </h4>
                    <p class="mt-3">
                      共{{ coupons.length }}筆資料
                    </p>
                  <p class="mt-3">已啟用：{{ coupons_isenabled.length }}筆
                    <router-link to="/dashboard/coupons">
                      <button class="morebtn float-end">
                        <i class="bi bi-arrow-right text-theme"></i>
                      </button>
                    </router-link>
                  </p>
                </div>
            </div>
            <div class="col-xl-3 col-6 mt-lg-5 mt-4">
                <div class="info p-4 details-box">
                    <h4 class="mt-2">
                      <i class="bi bi-chat-dots-fill fs-3 text-success"></i>
                      <strong class="ms-3 fs-3">留言</strong>
                    </h4>
                    <p class="mt-3">共{{ articles.length }}則留言</p>
                    <p class="mt-3">已啟用：{{ articles_isenabled.length }}則
                      <router-link to="/dashboard/articles">
                        <button class="morebtn float-end">
                          <i class="bi bi-arrow-right text-theme"></i>
                        </button>
                      </router-link>
                    </p>
                </div>
            </div>
            <div class="col-xl-8 col-12 mt-3">
              <div class="info">
              <h3 class="text-center mt-3">歷年銷售量</h3>
                <BarChart class="my-2"></BarChart>
              </div>
            </div>
            <div class="col-xl-4 col-12 mt-3">
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
            <div class="col-xl-4 col-12 mt-3">
              <div class="info">
              <h3 class="text-center mt-3">顧客挑選意願</h3>
                <Radar class="my-2"></Radar>
              </div>
            </div>
            <div class="col-xl-8 col-12 mt-3">
              <div class="info">
              <h3 class="text-center mt-3">歷年業績</h3>
                <LineChart class="my-2"></LineChart>
              </div>
            </div>
            <div class="col-xl-6 col-12 mt-3 mb-5">
              <div class="info">
              <h3 class="text-center mt-3">客流量</h3>
                <echartsLine class="my-2"></echartsLine>
              </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
import { mapState, mapActions } from 'pinia';
import allStore from '@/stores/backend/allProductStore';
import couponStore from '@/stores/backend/couponStore';
import articleStore from '@/stores/backend/articleStore';
import Radar from '@/components/RadarChart.vue';
import echartsLine from '@/components/echartLine.vue';
import LineChart from '../../components/LineChart.vue';
import PieChart from '../../components/PieChart.vue';
import BarChart from '../../components/BarChart.vue';

// import ProgressBarChart from '../../components/ProgressBarChart.vue';

export default {
  data() {
    return {
      products_isenabled: 0,
      ordersList: 0,
      orders_is_paid: 0,
      coupons_isenabled: 0,
      articles_isenabled: 0,
      start_page: 1,
      ordersLength: 0,
      orderspaidLength: 0,
    };
  },
  components: {
    LineChart,
    PieChart,
    BarChart,
    Radar,
    echartsLine,
    // ProgressBarChart,
  },
  inject: ['emitter'],
  computed: {
    ...mapState(couponStore, ['coupons']),
    ...mapState(allStore, ['products']),
    ...mapState(articleStore, ['articles']),
  },
  methods: {
    ...mapActions(couponStore, ['getCoupons']),
    ...mapActions(allStore, ['getProducts']),
    ...mapActions(articleStore, ['getArticles']),
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
  },
  async created() {
    try {
      await this.getProducts();
      if (Object.keys(this.products).length > 0) {
        this.products_isenabled = Object.values(this.products)
          .filter((item) => item.is_enabled === 1);
      }
      await this.getCoupons();
      if (Object.keys(this.coupons).length > 0) {
        this.coupons_isenabled = Object.values(this.coupons)
          .filter((item) => item.is_enabled === 1);
      }
      await this.getArticles();
      if (Object.keys(this.articles).length > 0) {
        this.articles_isenabled = Object.values(this.articles)
          .filter((item) => item.isPublic === true);
      }
    } catch (error) {
      console.log(error);
    }
    this.getOrders();
  },
};
</script>
