<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">購買時間</th>
                <th width="120">Email</th>
                <th width="120">購買款項</th>
                <th width="120">應付金額</th>
                <th width="120">是否已付款</th>
                <th width="120">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td>{{ order.date }}</td>
                <td>{{ order.Email }}</td>
                <td class="text-right">{{ order.thing }}</td>
                <td class="text-right">{{ order.total }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">已付款</span>
                    <span class="text-muted" v-else>未付款</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm"
                        >檢視</button>
                        <button class="btn btn-outline-danger btn-sm"
                        >刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
          }
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
