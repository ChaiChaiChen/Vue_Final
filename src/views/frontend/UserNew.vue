<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-12 mt-5">
              <h3>{{ tempArticle.title }}</h3>
              <p class="text-dark-gray">{{ $filters.date(tempArticle.create_at) }}</p>
            <img :src="tempArticle.imageUrl" style="height: 300px; width: 300px;" alt="">
            <p v-for="(description) in descriptionList" :key="description">{{ description }}</p>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tempArticle: {},
      descriptionList: '',
    };
  },
  methods: {
    getArticle() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      console.log(this.id);
      this.$http.get(api)
        .then((res) => {
          this.tempArticle = res.data.article;
          console.log(this.tempArticle);
          const { description } = this.tempArticle;
          this.descriptionList = description.split('\n');
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
