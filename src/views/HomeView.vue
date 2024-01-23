<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container-field">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src=banners.img[0] class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
          <h1 class="bannerText">極致舒適&emsp;<br>&emsp;優雅生活</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img :src=banners.img[1] class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
          <h1 class="bannerText">輕奢設計<br>添色於你的家居</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img :src=banners.img[2] class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
          <h1 class="bannerText">專屬你的沙發時光<br>品味獨特生活</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
  </div>
  <div class="container mt-xl-5">
    <div class="row g-3 align-items-center">
      <div class="col-xl-7 d-flex order-2 order-xl-1">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705157449372.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U50nUI5gDnrJGIEYP7nCnWaL7VlDZbbHNoNUC1uGXwUeFQ%2BpduJVwkcR1DmOpPSWiPADBSteF3BQz8L5fddRUhaqI7odZEnZm8lGh64vGbEjqRyvkn8BrEF19uIsvTqaHb7%2FV6hi8esQd7c0VKQb%2BXgYWFnlpJVdy37wMNnQwX1CXYFbfdE3hGIXmcfmZCPEEv6RwsxoaygxtkSKRqotZA68iQ3RdUAprjXLgaw3HSxGHhWMSEsevkfb8oaUqPRpSLVEW%2FtnDsntNJa3B%2BKd5wHLsf4CXbRP5F2BbDm6Uo8W0d%2BXZVumoaq6ighDxOk3wWVZ82MsJVRqFM%2BuTY6KMQ%3D%3D" class="img-fluid imgIntroduce" alt="">
      </div>
      <div class="col-xl-5 col-sm-12 order-1 order-xl-2 text-center text-xl-start">
          <h1 class="text-theme">打造您理想的家居空間</h1>
          <p class="mt-4 mb-4 lh-lg">我們為每一位注重生活品質的顧客打造了一個極致奢華的客廳體驗。<br>提供優質、個性化的沙發，打造出滿足顧客期望的獨特家居風格。</p>
        <router-link to="/products">
          <button class="btn btn-btn-bg btn-lg text-white btn-add-view ">View More</button>
        </router-link>

      </div>
      <div class="col-xl-5 order-3 order-xl-3">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705157404490.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B5tQ8wq8%2BeIP%2FsYP7MI%2F3U6Iu%2F4Y%2FqVYduVFGG0fhZzlaL4XMoMtpzTQr%2BB1jz4OB1wQHIKoNLaUa0uNrNFIPrAagxMjxKdDHaWuT%2B3EqUKVsuni4321Q18c7gXyqY7EYeIzMNivkP%2Bt8EZDYPQ0QUIxcyMgpTan%2BfMYBfml6KqUqU%2FJIkqisObrfymuguMV5Ntua6dOQvx0IT7adLRcESUcqzr1blCyuxLnS21QRx9SrkjWyt7p8mMxvL417HOSN0K4MNWOMvo1TlAGsPJj%2FHRpK6Yxosg16YCwXA%2F2aFxplQGUSS6tdBsZywJ6QSljJmw0KAUO7ZWsuTltAPVY6A%3D%3D" class="img-fluid imgIntroduce" alt="...">
      </div>
      <div class="col-xl-7 order-4 order-xl-4">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705157491372.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P%2FJVFBTOu%2F6YoXS0Lqcp3%2B9rZE8DIuwuggPf4mECZxErDBkdcNGVfWQI97R0OF4z5g%2BALCsexb3KuE3%2Bbq4t0Mawx1AhuBak98eHDf2vWDQbEJ5M2y6ENY%2BbwmTSIEK8A%2BR6qLiGGOMGRRFVcW1xbXwUxtfqzHzRuB7kjedXSB77%2Bb%2FoyaIQUTwpRG0mxCjiQTWMS1%2FnXiqoPJa0R8D9nvXHQLKP1P1UZQ9%2FJcD3p8PBsY5pjhwEnDlY%2Fbjzg6q5cutOuuvG7ZHG4ZQ6x2dLiNOUc8Oh0Nsrt5zx4TMV89FQwjB1Iew5w8RYOQO9v4T5vLZ1eAHZKIVNfFhlkUodkw%3D%3D" class="img-fluid imgIntroduce" alt="">
      </div>
    </div>
  </div>
  <div class="container-fluid mt-5">
    <div class="row align-items-center bg-text-bg">
      <div class="col-md-6 gx-0">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704630851982.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EEJ6SWnOGN00q9y%2FSBTUtgkHmQTQWdwQ5qFg%2Bqwaw38FyXSne0lRC2wUGJHeXENwSXvKE934882CKAOpHg2V4VGCpVOhCX%2FW%2F2%2BuBLsaGdjp0ottIhAXiCBimlwWX4GWSY8MG8XLc%2FtH%2FOg3Lw6h1453ELQhy%2BdVQF85BvRsNgjrt7M5PJUF6k2X5w0giWO0Ahae2BEXpA%2BrmA%2FJC5kMibLbeVlGIGXwTzRNHpTruGh1UTuDK5245QY5kd0AInO%2F6FaZdyWxoylbQMkHW%2BvWRzyWdpkVNtpbvlmTFUHPcnQFUG9kcv41iAaMqBDuxQnRoM%2FZtyjQSvYjiCAb469P0w%3D%3D" class="img-fluid" alt="...">
      </div>
      <div class="col-md-6 d-flex justify-content-center gx-0">
        <div class="d-flex flex-column m-5">
          <h4 class="font-md-l fw-bold mb-3 ">一個人的沙發｜享受孤獨    擁有專屬空間</h4>
          <p>假日時窩在沙發上耍廢看劇吃零食，愜意地度過美好時光，<br>即使一個人稱作為孤獨，但擁抱面對孤獨，過上自己喜歡的生活模式，也是另一種享受。</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 d-flex justify-content-center order-2 order-md-1 gx-0">
        <div class="d-flex flex-column m-5">
          <h4 class="font-md-l fw-bold mb-3 ">家庭團聚｜沙發上享受時光</h4>
          <p>沙發不僅是一張椅子，更是家庭生活的精華。它象徵著愛、溫馨和共享，是家人聚集的場所，擁抱著每一個家庭成員的獨特故事。無論是歡笑還是淚水，沙發都是家庭中最溫暖的存在。</p>
        </div>
      </div>
      <div class="col-md-6 order-1 order-md-2 gx-0">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704631781122.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MiTl%2Be8BdkiJPr2Y4yxtH1UjZveKc2jx81pJ4g4GP2PNiObL%2B2h3E7JLi3nYTVwYHI96z6EdorydbSToOnj956Q4Fi1RkO3K%2FR5LA9W%2FNigZEY%2F9KzrxOASlQzI2bTr59HsMXD05Sd3YSJ%2B5sX1F5r2REaF8sSX%2FHkavP5BPr2qLbYEyXGR%2B7qGzy55AL0e7xbgG6FdEmKJMBFwdIpOyX3p1iYghEH4MA2op6HZL2lwjKREceZbGttmRGK4Ibar85lN4RqyeGIMJZnEJ7yZyNys3izVyLjjjaIQxNTO%2BGAmj8Vjtuv9OA24Gy1nqYcnWJlfYAe6uBUFA4X4HTJaIhQ%3D%3D" class="img-fluid" alt="...">
      </div>
    </div>
  <div class="row align-items-center bg-text-bg">
    <div class="col-md-6 gx-0">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704699055694.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U%2F7Iow4ZIgyBjcRrwNPmAYY5vqC%2FomMRT6sFMlUgH9z6eHOeAnBsuv99fA7RY6VYQhGY49aeGmP8vHmCgTVb2BsQxUxbbH7bI76PVqrAdS562HzP7Z19WK6ZnC7fE%2FZ75QMz4lU4NN8HGTn9p2PTe1M1EaU917pJVcAzYuGgUHYbieq9lrgDRHN64Byzk6KBp%2Faj19mv8%2Bl0pmdwqXB%2FubciiHngWkF4bHvPJHbChE%2BUY%2BZ1qfMQoOtSJuVZnM5mTeH3QQJRfNSOlO0DcMJKBKng%2FTaQSiZ98CbDix1ooEuVzbWMeWM7FKvQZntCHXH6IjzIkr3k5vEV0RuRRIEnzw%3D%3D" class="img-fluid" alt="...">
    </div>
    <div class="col-md-6 d-flex justify-content-center gx-0">
      <div class="d-flex flex-column m-5">
        <h4 class="font-md-l fw-bold mb-3 ">朋友聚會｜共度歡笑時光</h4>
        <p>沙發也是朋友聚會的靈感發源地，它提供了一個舒適自在的環境，讓大家盡情放鬆，開展心靈深處的對話。無論是看電影、打遊戲還是閑聊，沙發都是朋友間歡樂的起點。</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 middleBg gy-0 d-flex align-items-center justify-content-center">
      <button class="btn btn-btn-bg btn-lg btn-add-view" @click="coupon">領取優惠碼</button>
    </div>
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      banners: {
        img: ['https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705311402637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QLjGMCEC%2BUAICf0hSSZ4VJUo7ww6ANtpWBMInS%2BAm%2BO1HbYu2%2FuMdRDk2IkHtRSOQmj%2BDhPgcRcLHg81BGtz%2Fd8It0KeNdAs2zs%2F4Zr1m7Al%2FvWmrByB9YTXbQYx%2Fl70Yxg2fj%2BpFIrvDKVt9dhhhSEpA9JHW8QdjXKV%2F3CxEsP%2B3SuyslZ4zFIDsmvXhC8vDxIrcVqBbHqIyksHPyE9mIcKvF9dzeFcUBgdfAzWyMMWNTg46dyLVr9m1BOC9h%2FHswBDJotROHD5mAqyo%2FVhHqCXQXvajSev64npZR03vFZt5VMDBHzDx9eyGIBsQlpRdnffq355dv1TZEk9ZYRy0w%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705311990681.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eTGojm8G75jJYEjyGnerTWsSS%2B626TnSS4Yxl%2FiTX7GJA27x401h7kufycqaJLZGrXeG66UvKUdl5DzZg%2F2lnmd4zXXHU8q90oYZ5neM%2F6nPx1KDEgTfH9ixTbykmNIrVgHYyiN5gDWesFYmea5aKzDnw0AyZ3%2FakkJVAWeUJrRmxphicBSpB2A1tYXoKCVgHAdmDb5i%2FQ6WW55b6jKxM6uLv1K7yLVmFi7SUDEOjY43POtwU9EpGRUCIvxH4vvli13og1QkgEndPOPGxxZhcaHhl2jVzloZW4VMNGwckA4XkUEOk8tgKs3hl8%2BZipo1p8ObQJObuGBfq%2Fjv%2BJsgHQ%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705312139600.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eZKkrOkD4NBLlJQDJ2NMbfXk0wiU7w7Xy32jCbWrwn2ceoqD%2FzXhgDF3exQ6omXa8gsS5bP3fVdO926IX3Chcn1tERCMDGB4XcCTAqWu9e2g2mzf7wNkK4eCW1RGlNaHhVBQj3u56FKV0LmRStG8IuRRbuBJdGiB0%2B1FTSU85RHnsLWxNKY3HmqI6Mzd9YOAtEhnqFYvv%2BAAkNis3aqap7wC7sRFbqI8Gz03oBmg%2BwDflnyqfYvJFcu25L2Mq7LFsseyLZ3xQrExnxK2rIMVUrNwCBiQeWPOUJQ%2BeMJI%2BV6RjAayZ8t4HDKBoh97c1KySiONcULh8baMqTI5godgWA%3D%3D'],
      },
    };
  },
  inject: ['emitter'],
  methods: {
    coupon() {
      navigator.clipboard.writeText('95%')
        .then(() => {
          const response = {
            // eslint-disable-next-line no-undef
            data: {
              success: true,
            },
          };
          this.$httpMessageState(response, '已複製序號');
        });
    },
  },
};
</script>
