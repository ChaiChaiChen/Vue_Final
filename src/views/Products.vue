<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Loading :active="isLoading"></Loading>
    <div class="text-end">
    <!-- Button trigger modal -->
        <button class="btn btn-primary" type="button"
         @click.prevent="openModal(true)">
        新增產品
        </button>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="120">是否啟用</th>
                <th width="120">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">{{ item.origin_price }}</td>
                <td class="text-right">{{ item.price }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-muted" v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm"
                         @click="openModal(false, item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm"
                        @click="openDelProductModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <ProductModel ref="productModal" :product="tempProduct"
    @update-product="updateProduct"></ProductModel>
    <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>
<script>
import ProductModel from '../components/ProductModel.vue';
import DelModal from '../components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModel,
    // eslint-disable-next-line vue/no-unused-components
    DelModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.isLoading = true;
      // 透過axios中的this.$http取得方法，使用POST(包含API,夾帶的資料)
      // promise使用.then方法進行串接
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            console.log(res.data);
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      const productComponent = this.$refs.productModal;
      let httpMethod = 'post';
      // 修改
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.getProducts();
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
