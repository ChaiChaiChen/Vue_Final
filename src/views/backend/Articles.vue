<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container">
  <div class="row mt-5">
    <div class="text-end mt-5">
      <button class="new-product" @click="openArticleModal(true)">
      新增留言
      </button>
    </div>
    <table class="table mt-4 text-center table-radius">
        <thead class="table-theme">
        <tr>
          <th>標題</th>
          <th>文章內容</th>
          <th>日期</th>
          <th width="120">是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in articles" :key="key">
          <td>{{ item.title }}</td>
          <td class="text-truncate articles-description">{{ item.description }}</td>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-if="item.isPublic === true" class="is-enabled-border is-enabled">啟用</span>
            <span v-else class="is-enabled-border not-enabled">未啟用</span>
          </td>
          <td>
            <button class="btn btn-primary"
                      @click="openArticleModal(false, item)"
              ><i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger"
                      @click="openDelArticleModal(item)"
                ><i class="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    <Pagination :pages="pagination"
    @emit-pages="getArticles"></Pagination>
  <ArticleModal ref="articleModal" :article = "tempArticle"
   @update-article = "updateArticle"></ArticleModal>
      <DelModal :item="tempArticle" ref="delModal" @del-item="delArticle"/>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import articleStore from '@/stores/backend/articleStore';
import ArticleModal from '@/components/ArticleModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      tempArticle: [],
      isNew: false,
    };
  },
  components: {
    ArticleModal,
    DelModal,
    Pagination,
  },
  computed: {
    ...mapState(articleStore, ['articles', 'pagination']),
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),
    openArticleModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempArticle = {
          create_at: new Date().getTime() / 1000,
        };
      } else {
        this.tempArticle = { ...item };
      }
      this.$refs.articleModal.showModal();
    },
    updateArticle(tempArticle) {
      console.log('tempArticle', tempArticle);
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`;
        this.$http.post(url, { data: tempArticle }).then((response) => {
          this.$httpMessageState(response, '新增文章');
          this.getArticles();
          this.$refs.articleModal.hideModal();
        });
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        this.$http.put(url, { data: tempArticle }).then((response) => {
          console.log(response);
          this.$httpMessageState(response, '新增文章');
          this.getArticles();
          this.$refs.articleModal.hideModal();
        });
      }
    },
    openDelArticleModal(item) {
      this.tempArticle = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delArticle() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempArticle);
        this.$httpMessageState(response, '刪除文章');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getArticles();
      });
    },
  },
  async created() {
    try {
      await this.getArticles();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
