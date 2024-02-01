<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container">
  <div class="row mt-5">
    <div class="text-end mt-5">
      <button class="btn btn-primary" @click="openArticleModal(true)">
      新增留言
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>標題</th>
          <th>文章內容</th>
          <th>日期</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in articles" :key="key">
          <td>{{ item.title }}</td>
          <td class="text-truncate articles-description">{{ item.description }}</td>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-if="item.isPublic === true" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click="openArticleModal(false, item)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDelArticleModal(item)"
                >刪除</button>
              </div>
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
import ArticleModal from '@/components/ArticleModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      articles: [],
      tempArticle: [],
      isNew: false,
      pagination: {},
    };
  },
  components: {
    ArticleModal,
    DelModal,
    Pagination,
  },
  methods: {
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(url).then((response) => {
        this.articles = response.data.articles;
        console.log(this.articles);
        this.pagination = response.data.pagination;
      });
    },
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
  created() {
    this.getArticles();
  },
};
</script>
