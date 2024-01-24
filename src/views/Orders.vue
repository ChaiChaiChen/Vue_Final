<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row mt-5">
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">購買時間</th>
                <th width="120">Email</th>
                <th width="300">購買項目</th>
                <th width="120">應付金額</th>
                <th width="120">是否已付款</th>
                <th width="120">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td>{{ $filters.date(order.create_at) }}</td>
                <td>{{ order.user.email }}</td>
                <td class="text-right">
                  <div v-for="(product, i ) in order.products" :key="i">
                    {{ product.product.title }}
                    數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </div>
                </td>
                <td class="text-right">{{ order.total }}</td>
                <td>
                    <span class="text-success" v-if="order.is_paid">已付款</span>
                    <span class="text-muted" v-else>未付款</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm"
                        >檢視</button>
                    <button class="btn btn-outline-danger btn-sm"
                     @click.prevent="openDelOrderModal(order)">
                      刪除
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  </div>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>
<script>
import DelModal from '../components/DelModal.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    DelModal,
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            console.log('order', this.orders);
            this.pagination = res.data.pagination;
          }
        });
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          console.log(response);
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.$httpMessageState(response, response.data.message);
          this.getOrders();
        }
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
