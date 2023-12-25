<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <table>
        <thead>
            <tr>
                <th width="120">圖片</th>
                <th width="120">商品名稱</th>
                <th width="120">價格</th>
                <th width="120"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img :src="tempProduct.imageUrl" alt="" class="img-fluid mb-3">
                </td>
                <td>{{ tempProduct.title }}</td>
                <td>{{ tempProduct.price }}</td>
                <button class="btn btn-outline-danger btn-sm"
                                    :disabled ="this.status.loadingItem === tempProduct.id"
                                    @click="addCart(tempProduct.id)">
                                    <div class="spinner-grow text-red spinner-grow-sm"
                                     v-if="this.status.loadingItem === tempProduct.id">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                    加入購物車</button>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
  data() {
    return {
      tempProduct: {},
      id: '',
      status: {
        loadingItem: '', // 對應品項id
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api)
        .then((res) => {
          console.log(res.data);
          this.tempProduct = res.data.product;
        });
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
      });
    },
  },
  created() {
    // 透過$route.params接收UserCart所傳送的prouctId
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
