<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row mt-5">
  <Loading :active="isLoading"></Loading>
    <div class="text-end mt-5">
    <!-- Button trigger modal -->
        <button class="new-product" type="button"
         @click.prevent="openModal(true)">
        新增產品
        </button>
    </div>
    <table class="table mt-4 text-center table-radius">
        <thead class="table-theme">
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
                <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
                <td class="text-right">{{ $filters.currency(item.price) }}</td>
                <td>
                    <span class="is-enabled-border is-enabled"
                     v-if="item.is_enabled">啟用</span>
                    <span class="is-enabled-border not-enabled" v-else>未啟用</span>
                </td>
                <td>
                        <button class="btn btn-primary"
                         @click="openModal(false, item)">
                         <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-danger"
                        @click="openDelProductModal(item)">
                        <i class="bi bi-trash3"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :pages="pagination"
    @emit-pages="getProducts"></Pagination>
    <ProductModal ref="productModal" :product="tempProduct"
    @update-product="updateProduct"></ProductModal>
    <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
  </div>
  </div>
</template>
<style>

</style>
<script>
import { mapState, mapActions } from 'pinia';
import productStore from '@/stores/backend/productStore';
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: '',
    };
  },
  components: {
    ProductModal,
    // eslint-disable-next-line vue/no-unused-components
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['products', 'pagination']),
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
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
      this.status = '新增產品';
      // 修改
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
        this.status = '更新產品';
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.$httpMessageState(response, this.status);
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
        this.$httpMessageState(response, response.data.message);
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
