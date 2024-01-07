<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container-field mt-5">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704599984989.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YfMM%2FC4HTyvo1ZSnrmVHAcb4OQwxp%2FwAOo%2Bbzuqf464o%2F46SzTQxy366d2fB%2BRW0BDPG3MAOdWgbtLgHwX2IIdw8l8kzyHO5b7YffjtgR9BadR36Ir%2BjrJ4wMPD2Hkz77RXAWVmds0FSIeKC94N2tXyLb69AZoMTjFjPO04yLyXMLkkHPrbjvHZbCCLpzUE5jcYf6nXjHtx2qMsuZFNk%2F4RIhs1IQL1ZnZaIxHek17sHuy5EfyGQ0MNuX0eLBRby%2FUyqRv3iZGkqtyUVQXaJqLgX4f2WDqLGVsLDUeIG5DU6AkS5JDre25SWO2G4Xy8D4dvyS1PIGk9%2B1VUUkqYGEw%3D%3D" class="img-fluid" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704601966892.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TjDAlYUMSWoDZ60Zq%2BFHJdj6yooNwzKzNK4kEbp4SELbTtYawELSGhoWXLA59vjTFyWoM%2FhrSo3uNuBksBHr7vyYnOw60vQaVdq1ZRkG93PW7S7PgLY5QMGVilSYgY9uhprSNCU8tmwHy3a3M4BfYvR%2BPmLWVwgZ68CCPLXZtKZYLWaNn7OVnOL9qK1Prl9gV%2BR3AXkwQHg%2FCm9HrKT3cjTP21QfZtbXd45O4Z0dLFmJG5GdK1l5mHrLD2FMTn52A2ClLQXa6Tg1KDVwz3YwTcXgMnQuHhUitZTJWBP9AdLClRdLQeJUp9jGiBL9gfwKVKWWvhCiw26EFhoniS0ZHQ%3D%3D" class="img-fluid" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704602215770.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Rf6HfbsW0Rcso7vyJ0N%2B0n1dA4NKGCh2sO11obwizz8PAF6BtsEAlYQC7tV9kHk9k%2FpuB25h0RyI%2Ba6fT9mO0670TGV%2Fn%2BnqUIDCbNH0UEJoj0fcftskG58d6lKaEWGReBWGn108Bd4Gfn7lE7XX1IiKSg%2B5vaL2%2FWWNjm9R%2FLr%2Bmy6l3xx5ZFNA2W9Epv3nAYyZvpXbXXNRfz4P9SjQVPk%2Btk1zm252tx%2F%2FiVd2OnURSAKrZ7WW%2BI2KWkrOZmnZOnIFkn31mejwe4MMX8o2CfOwZzhhAUrHXIBw%2BQVN1%2F5akCR%2FRnzQmDBBWuXb0Z7jv2Vj9hg8%2FRFMew3keMxN6w%3D%3D" class="img-fluid" alt="...">
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
<div class="container mt-5 text-theme">
  <div class="row row-cols-3 justify-content-center align-items-center">
    <div class="col-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704610430929.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dYoP%2FdWfpLPM0NJCQqJiHuV18SOP0UcVoeJ5tymjkD%2BdCYx6NILs7taavSwtiCaETrpwHFeV1qahluNkdCV0gjNuigqabK7s%2FxhYRvX%2BNh1kpgHBgGoQTQxmMM8AgM0l8k8zPzH5M2E1sEjiX9VvNc7Ucmt9PUNQcOldoDuQO3CGp8y%2FnwD6MyHtZ5dkcnctefbQ5J%2B%2BS3HS2IzRVh%2BSujibSN19zgvnwttIbVQLIspGUVy3pKWx%2BPzoHudwh3l71mqk0F54nYMvwoOjZQVBtPCFWejqSuaydPhmicTRDsQgl6aaannovtl8fkNIfDnP3zW65joXZNu3U7CGIbqjIQ%3D%3D" class="img-fluid" alt="...">
    </div>
    <div class="col-4 text-center">
      <div class="imgText">
      <h4>全皮沙發</h4>
      <p>原料都來自精心維護的天然牛皮<br>天然皮革透氣度佳</p>
    </div></div>
    <div class="col-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704610411908.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ro08U3YaRBiEopdiPuILAIiiR1%2BnvY248%2FWgXhUDElH6fw9TMvUvw1z56vQzMRSJQoT5IH3r8SoR7%2FkNJ09NjlbvzZQXD0omrxdd3TykzW67AZLNaVmxIfXMWmCt4Wh%2BjGK7g2Jp2xlqe0Clvh0wYFKecpt6LHoYPzSOmdmMt8ron7BqaNF3NGwckDsBk2nglaQKuqQV1EONVsrAw%2FzBRVsljfSQsJU9U6iI%2BLZbzxZq%2Ft7S4HSig%2FeaVqUR3%2FHtoAobeXJeOGaJPa7NE9LneoOB0Q6ai4SnYs%2BR1M5tw9AXCUbfZjBreO11gh9flvSLtSRXtKV6aR2ZRptx8GEwNg%3D%3D" class="img-fluid"
 alt="...">
    </div>
    <div class="col-4 text-center">
      <div class="imgText">
      <h4>布質沙發</h4>
      <p>布料、材質、顏色多樣<br>透氣性佳、不容易悶熱</p>
    </div>
    </div>
    <div class="col-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704610443185.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nd2YIKZiARnJikjGTFuaCSEcxy0UVIcvrBm%2FpglBl1xhl5qOywxFmuX2RnW7GT%2BTCUZGWzIKNmahxXmhP3gfrV3e2IsWPEvIIAbzhyhiDpdbeX7SAs%2FUUWRtHpXzeJp9P%2BTaavCbEVxMTI8S%2FJ%2Baex6iNZM60D7OPH6F2hNsVyd4LluqvpitRciaj7OftJqeZOLFxl6IXXJZB3T0Y3wuWHCNBQp3wBxrFdiGY6A%2FWVf7VDIto9Zlr5neGbQpUwSWwnC4MzaDeHHqPSdWMCtj4Fd0fVviv5gi8%2Bt1Ub5HbRSl2cijuTW%2FffZlTMZSw5J48V8jH4H%2B6iI9GgCSIlHI3A%3D%3D" class="img-fluid" alt="...">
    </div>
    <div class="col-4 text-center">
      <div class="imgText">
      <h4>半皮沙發</h4>
      <p>部分皮質為牛皮<br>與全皮外觀差異不大易維護</p>
    </div>
    </div>
    <div class="col-6 text-center mt-3">
      <button class="btn btn-btn-bg btn-lg text-white">View More</button>
    </div>
  </div>
  <div class="row text-center mt-5 text-black align-items-center">
    <h4>New Post</h4>
    <div class="col-3 mt-5">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704629649408.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qDipYug7%2FuPHex%2B2Edb4cm9l1wSjplWUw45wiRVvhZnUd8StptUkpjM0DjhfwRZqaDBwNB0Uh%2BZP1pfkfKA%2BmW2ENmg6XWgqLlleSLr9Z2%2F4CFSp5LGu%2B%2FxYKM8F1WKOE79%2BVnNQqRXnFhlccxubHWAeaqd9mfW1Twk%2Fi%2BRgB9zHhMDJmqHdBCEC%2FIkmBHUUyh%2BYeV%2Fl%2BFJVn8OwFUtP%2FKl1sz2BGaOC%2FNYSG9pIkaujNY4bNcaoeaK4ONhsrVhmdWK9N%2BpOpshftgw1Iz2kCy2Qa%2Fr%2B5xmQNnMJH4IS%2FW5kFGnT%2BRuNDLK6h7WCYYuxQ5udwp9GatzElsIdWzTCGA%3D%3D" class="img-fluid" alt="">
    </div>
    <div class="col-3 text-black link-bottom">傢俱雜誌 第154期<br>2015/1&2月新發行</div>
    <div class="col-3">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704629676867.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R6X4XrJ%2BCSMUJz5V7UtbFBnIKD2v4rb4NJJpChi02VXj6a1SaX1lKCaFuXZVqnbEFMKKJ2g3YsKnZoNCyNCHIJIrFselUbE2Fbewf60Ryxg42baY8xWKPjm%2FBraHbvX8C%2BaDmaSUeM1ZvWb4lX2clsMZxBqe4vdHbjNqkypxfcdZMRUjGYVvB7X5v7nDEVNUerp3PevVkdz4EN3surwfid3Rj668C9TbnVsKEdf1i5xC1P8txlRLCLa4fAqs5fl6L7QZYrZtOPt%2BZZEt3XEC98oIfStTiJH3HbJtbtfwv45CrHmjLbvW8%2Fp7sQxsmp%2BEKTB2bqhcbCc0ZaoVRAMdHA%3D%3D" class="img-fluid" alt="">
    </div>
    <div class="col-3 text-black link-bottom">傢飾雜誌 第154期<br>2017/2018新發行</div>
  </div>
</div>
<div class="container-fluid">
  <div class="row align-items-center mt-5 bg-text-bg">
    <div class="col-md-7 intro-bg mt-3 mb-3">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704630851982.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EEJ6SWnOGN00q9y%2FSBTUtgkHmQTQWdwQ5qFg%2Bqwaw38FyXSne0lRC2wUGJHeXENwSXvKE934882CKAOpHg2V4VGCpVOhCX%2FW%2F2%2BuBLsaGdjp0ottIhAXiCBimlwWX4GWSY8MG8XLc%2FtH%2FOg3Lw6h1453ELQhy%2BdVQF85BvRsNgjrt7M5PJUF6k2X5w0giWO0Ahae2BEXpA%2BrmA%2FJC5kMibLbeVlGIGXwTzRNHpTruGh1UTuDK5245QY5kd0AInO%2F6FaZdyWxoylbQMkHW%2BvWRzyWdpkVNtpbvlmTFUHPcnQFUG9kcv41iAaMqBDuxQnRoM%2FZtyjQSvYjiCAb469P0w%3D%3D" class="img-fluid" alt="...">
    </div>
    <div class="col-md-5 d-flex justify-content-center">
      <div class="d-flex flex-column px-5 py-5">
        <h4 class="font-md-l fw-bold mb-3 ">一個人的沙發｜享受孤獨    擁有專屬空間</h4>
        <p>假日時窩在沙發上耍廢看劇吃零食，愜意地度過美好時光，即使一個人稱作為孤獨，但擁抱面對孤獨，過上自己喜歡的生活模式，也是另一種享受。</p>
      </div>
    </div>
  </div>
  <div class="row align-items-center mt-5 bg-text-bg">
      <div class="col-md-5 d-flex justify-content-center order-2 order-md-1">
        <div class="d-flex flex-column px-5 py-5">
          <h4 class="font-md-l fw-bold mb-3 ">沙發上享受家庭團聚時光</h4>
          <p>依照不同的居家風格，與家人朋友一同共度美好時光。</p>
        </div>
      </div>
      <div class="col-md-7 intro-bg intro-fashion order-1 order-md-2 mt-3 mb-3">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704631781122.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MiTl%2Be8BdkiJPr2Y4yxtH1UjZveKc2jx81pJ4g4GP2PNiObL%2B2h3E7JLi3nYTVwYHI96z6EdorydbSToOnj956Q4Fi1RkO3K%2FR5LA9W%2FNigZEY%2F9KzrxOASlQzI2bTr59HsMXD05Sd3YSJ%2B5sX1F5r2REaF8sSX%2FHkavP5BPr2qLbYEyXGR%2B7qGzy55AL0e7xbgG6FdEmKJMBFwdIpOyX3p1iYghEH4MA2op6HZL2lwjKREceZbGttmRGK4Ibar85lN4RqyeGIMJZnEJ7yZyNys3izVyLjjjaIQxNTO%2BGAmj8Vjtuv9OA24Gy1nqYcnWJlfYAe6uBUFA4X4HTJaIhQ%3D%3D" class="img-fluid" alt="...">
      </div>
    </div>
</div>

<!-- <div class="bg-light mb-4 mb-md-6">
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-6 intro-bg ">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703914279600.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D3%2BR1cHZTCWTNtNzaAZONyIrLORuBr9wGq6Im25Gm1bX6N2WsKn%2BKTRPzdccYCJpw9xLq6GgJg9TauolJIz1%2BoJlbfwZr412wdy6MpsIlEtyobTyE01MNnmovKPf%2BXhGXUZLOi3yZCBo7f4CK8GLanQZ%2FzTMOcGasSB2Z5JedFOuJMeq9GTJZol%2FkV9QSHwOeGS6T97uOowllwbaFoYdLXwvcrzeL031I%2Bd6OeGT6uP8mPVwIoCyuu4wvE3FVTBszqdflHyQfRn0yOJ8IQhXe1IkkuPR%2FdFzOKBf1VcgpWaKOc0QAH1SufIm1NwR2jmzjrDsfnh3QBwLxwE%2FUZqLyA%3D%3D" class="d-block w-100" alt="...">
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <div class="d-flex flex-column px-5 py-5">
          <h4 class="font-md-l fw-bold mb-3 ">提升耐心</h4>
          <p>魔術方塊並不是非常簡單的益智玩具，從一開始學習六面復原很容易誤判情況，到後期為了追求速度，相同的動作需要練習千萬次，這些都需要很大份量的耐心還有試誤。可以說玩魔術方塊的同時，也是在鍛鍊孩子的意志力。</p>
        </div>
      </div>
    </div>
</div>
</div>
<div class="bg-light mb-4 mb-md-6">
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-6 d-flex justify-content-center order-2 order-md-1">
        <div class="d-flex flex-column px-5 py-5">
          <h4 class="font-md-l fw-bold mb-3 ">增加專注力</h4>
          <p>為了提高復原魔方的速度、減少出錯的機率，進階的玩家會相當專心於當下的轉動，同時眼睛大量接收色彩，腦內快速預判下一步的狀況，這些操作需要高度專注才可以達成。你在看到孩子轉得更快的同時，也代表著他更專注於當下。</p>
        </div>
      </div>
      <div class="col-md-6 intro-bg intro-fashion order-1 order-md-2">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703914139053.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cyrJFB59Z%2FJGSk4AoWv43nVYxFbfXcvm24FNkFNCJUxk%2BD%2BVMFNftogpATjpLpR9CceDSXIr253popa9IQEMtcfJvWcp9cUTbX%2BgNWU7r7VfFo8GkunTwTPILnciHBR6%2FyiyC1Dx%2BJLh1dbLP3Gl4xMuGxkCEXnubH7TbsY1d8ylYyuk1VfWvTgvaR3SVEMguzA2BzWpgUj2bzx%2B1LpGUc6qD0zqRXqh57MG0ThpLes%2Bwl4VR9IiefqHEDh8f4Yt08J8q75cXws3S2Q4kEHCg16tkfuRJMhrHwGQoYy0m%2F3IaswymBtPy7zkg8Wgme2WLzJObmYSLADaY0wPB8S8fw%3D%3D" class="d-block w-100" alt="...">
      </div>
    </div>
</div>
</div>
<div class="bg-light mb-4 mb-md-6">
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-6 intro-bg ">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703868398709.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Wy3Vx5Gqt2%2BJlLH4XTESOEItQz4LzW%2BvUkOMjKtdjvnwJ9nirxiym0rKR0lWT460md9V78v2htavEmyBK1O1sTUazx04gpn8gQqZGRKJ9MD7g0KYmk2JXRjX2hkgUx2E4MuD%2F10Zf3j702dP3r3BfVlp1qnk%2BvH2H%2FjJcUxjO2qo5jC%2FqFDyxDlapPEa%2FUMgV7pKxFR33f8MgSsjfzMYxOgrjLIqJvVfRskigEV2AVk6eLO5eYhMTlUBwQViz9Dyjn8c%2BkNXge1k3Q0qFHG9GGmMlUkZa%2FsQtSqkExwRnzd7vMOH75ccod5aNw%2F8tJRjcfodgUURQ0UBwt%2FfJjEnYA%3D%3D" class="d-block w-100" alt="...">
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <div class="d-flex flex-column px-5 py-5">
          <h4 class="font-md-l fw-bold mb-3 ">提升自信</h4>
          <p>多數人的想法，認為小孩轉魔方都只是在「亂轉」而已，而如果此時你的小孩是真的有辦法轉回來，甚至是能很快地轉回來，肯定是會成為焦點的，這讓孩子不僅可以從掌聲與讚嘆中獲得自信，也會在同年齡的孩子中多一個可以暢快聊天的話題。</p>
        </div>
      </div>
    </div>
</div>
</div> -->
</template>
<style>
.link-bottom{
  border-bottom: solid #888888 1px;
}
.col-4 {
  margin-right: -12px;
  margin-left: -12px;
}
.imgText{
  border-style:solid;
  border-width:1px;
  margin: 0 2rem;
  padding: 4rem 0;
}
.carousel-item{
    width:100%;
    height: 600px !important;
  }
  .carousel-item img{
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }
@media (max-width: 1200px){
  .imgText{
  margin: 0 1.5rem;
  padding: 1rem;
  }
}
@media (max-width: 768px){
  .carousel-item{
    width:100%;
    height: 400px !important;
  }
  .carousel-item img{
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;height: 100%;
  }
}

</style>
<script>

</script>
