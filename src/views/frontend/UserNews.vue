<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
<div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706077463262.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QXfnqNZnXmmFs6cbZe%2B9zxEhBhrLaFiBOvWI6UCSblbdA5aNmKSWPFm4aLSSlfiqOE9sSjRwND6a7QOJiAxA%2FcI3db944J87n5H%2B9wLO3A0hucrwGkjYCfUAW%2FO6cGK7PeNAsrgxvdDXMuW%2Bgox9oVNZMiz0Y%2BFWNn%2BBExrKD9vCrxZOX9v787IyOXgtVixOsnN573CdXko1DiWhyPlSjXHnUvb4T4MKP8upsrOYm4dYbp05Y36c8bQrFeZwnpx9VNvTOPSRCIAsCANjAV3wxWmcprl9vvfrMdzO%2B%2BiCfv0N1ng4mWrTulCvuiJGRYiAYzuu3kIL3ENFv70QaAMvnw%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
        <h1 class="bannerText">一手掌握&emsp;<br>&emsp;最新消息</h1>
      </div>
      </div>
    </div>
  </div>
<div class="container">
  <div class="row my-5">
    <div class="col-lg-6" v-for="(item, key) in news" :key="key">
      <div class="card card-shadow mb-3 border border-gray newsCard"
        @click="getNew(item.id)">
      <div class="row g-0">
        <div class="col-md-5 my-2 px-2 d-flex justify-content-center align-items-center">
          <img :src="item.imageUrl" class="rounded img-fluid newsImg" alt="...">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text text-truncate-2 text-dark-gray">{{item.description}}</p>
            <p class="card-text"><small class="text-muted">{{ $filters.date(item.create_at) }}</small></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      news: [],
      pagination: {},
    };
  },
  inject: ['emitter'],
  methods: {
    getNews() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`;
      this.$http.get(url).then((response) => {
        this.news = response.data.articles;
        console.log(response.data);
        this.pagination = response.data.pagination;
        console.log(this.pagination);
      });
    },
    getNew(id) { // 取得產品id切換到該產品頁面
      console.log(id);
      this.$router.push(`/new/${id}`);
    },
  },
  created() {
    this.getNews();
  },
};
</script>
