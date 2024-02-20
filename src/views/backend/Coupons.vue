<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
      <div class="row mt-5">
      <Loading :active="isLoading"></Loading>
      <div class="text-end mt-5">
        <button class="new-product" @click="openCouponModal(true)">
          建立優惠券
        </button>
      </div>
    <table class="table mt-5 text-center table-radius">
        <thead class="table-theme">
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th width="120">是否啟用</th>
          <th>編輯</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="is-enabled-border is-enabled">啟用</span>
            <span v-else class="is-enabled-border not-enabled">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-primary"
                      @click="openCouponModal(false, item)"
              ><i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger"
                      @click="openDelCouponModal(item)"
              ><i class="bi bi-trash3"></i></button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <couponModal :coupon="tempCoupon" ref="couponModal"
      @update-coupon="updateCoupon"/>
      <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>
    </div>
  </div>
  </template>
<script>
import { mapState, mapActions } from 'pinia';
import couponStore from '@/stores/backend/couponStore';
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  components: {
    CouponModal,
    DelModal,
    Pagination,
  },
  props: {
    config: Object,
  },
  data() {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  computed: {
    ...mapState(couponStore, ['coupons', 'pagination']),
  },
  methods: {
    ...mapActions(couponStore, ['getCoupons']),
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.showModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    updateCoupon(tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          console.log(response, tempCoupon);
          this.$httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon }).then((response) => {
          console.log(response);
          this.$httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempCoupon);
        this.$httpMessageState(response, '刪除優惠券');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
