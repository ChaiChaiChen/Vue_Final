<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 mt-5">標題</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tempArticle: {},
    };
  },
  methods: {
    getArticle() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      console.log(this.id);
      this.$http.get(api)
        .then((res) => {
          this.tempArticle = res.data;
          console.log(res);
        });
    },
  },
  created() {
    // 透過$route.params接收UserNews所傳送的newId
    this.id = this.$route.params.newId;
    this.getArticle();
  },
};
</script>
