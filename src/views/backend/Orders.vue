<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row mt-5">
    <table class="table mt-5 text-center table-radius">
        <thead class="table-theme">
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
                <td class="text-right">{{ $filters.currency(order.total) }}</td>
                <td>
                    <span class="is-enabled-border is-enabled" v-if="order.is_paid">已付款</span>
                    <span class="is-enabled-border not-enabled" v-else>未付款</span>
                </td>
                <td>
                  <button class="btn btn-primary"
                  @click.prevent="openModal(order)">
                  <i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger"
                    @click.prevent="openDelOrderModal(order)">
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder" @revise-item="reviseItem"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>
<script>
import OrderModal from '../../components/OrderModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    OrderModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            console.log('order', this.orders);
            this.pagination = res.data.pagination;
          }
        });
    },
    openModal(order) {
      this.tempOrder = { ...order };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    reviseItem(item) {
      this.tempOrder = item;
      const orderComponent = this.$refs.orderModal;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.put(url, { data: this.tempOrder }).then((response) => {
        if (response.data.success) {
          orderComponent.hideModal();
          this.getOrders();
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
