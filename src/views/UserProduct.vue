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
                    <div style="height: 100px;
                        background-size: cover; background-position: center"
                    :style="{backgroundImage: `url(${tempProduct.imageUrl})`}"></div>
                </td>
                <td>{{ tempProduct.title }}</td>
                <td>{{ tempProduct.price }}</td>
                <div class="btn-group">
                    <button class="btn btn-outline-danger btn-sm"
                    >加入購物車</button>
                </div>
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
  },
  created() {
    // 透過$route.params接收UserCart所傳送的prouctId
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
