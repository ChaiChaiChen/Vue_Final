<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-modal-brown text-white">
            <h5 class="modal-title">
              <span>新增文章</span>
            </h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <img class="img-fluid" :src="tempArticle.imageUrl" alt="" />
              </div>
              <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="title" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.author"
                  placeholder="請輸入作者"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入描述"
                  rows="4"
                  ></textarea>
              </div>
              <div class="mb-3">
                <label for="create_at">新增日期</label>
                <input type="date" class="form-control" id="create_at"
                      v-model="create_at">
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                          v-model="tempArticle.isPublic"
                          :true-value=true
                        :false-value=false
                        id="isPublic">
                  <label class="form-check-label" for="isPublic">
                    是否啟用
                  </label>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary"
                    @click="$emit('update-article', tempArticle)">確認
            </button>
          </div>
          </div>
        </div>
      </div>
  </template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    article: {
      type: Object,
      default() { return {}; },
    },
  },
  emits: ['update-article'],
  watch: {
    article() {
      this.tempArticle = this.article;
      console.log(this.article);
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempArticle.create_at * 1000).toISOString().split('T');
      [this.create_at] = dateAndTime;
      this.tempArticle.content = ' ';
      if (typeof this.tempArticle.isPublic === 'undefined') {
        this.tempArticle.isPublic = false;
      }
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
  data() {
    return {
      tempArticle: {},
      create_at: '',
    };
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempArticle.imageUrl = response.data.imageUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>
