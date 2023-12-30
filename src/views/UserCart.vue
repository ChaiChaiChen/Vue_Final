<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703905269683.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pe7GQ5G8nVMB5QFoWgYOo72TGvxuYHldee%2BNzQsClWw3CRWjLovXQ231akZofz7PVhWYSmpm6aXiwc4F1DmYeKddARb%2Bedc%2BYllx5AxkUTQnlccH%2FozTujbAehFGUEtHiQsgMWLknASxJf8BH%2FRxZT83L5P43a2bGXNDBeHHJixJA8cRa3zKp9JjusTH8GGXwwVyQN1ldsYzxfcf%2BvHPt8JZy59G%2BUTvWm%2B%2Bl9bupBaX1MakNhyT9VbGRHq7H1yIn7f85nFBGBFwk51d53ezwuwMYx%2F8F1GAHdbeq1HlTlbdO4rSPkAZK%2FoxVgUGS0o0O4DPvSEEoDVdDABreCyC0w%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703905241609.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ahbCcSwGTNpGqQ8XrTQiW7tMhN3pH0u2voFz7xQS0qms%2BPB4RjNZiItdKSOn7mnc9wHbeM5hDSvqd1jrlBlWvbdYtDtM6CX12otI084CThr6tjHtvYR9QzAzlMNWjzaPI0gnqPBCM%2B6YsKOSts6LbkFZaK%2F64sK3E4noTeJySFlq%2Fk3%2FLOlBCAVLKzBF3OLqRisrQFkZ8C0a3dzFKr3Z3FhOIU9Vdbr2gzIjJh5b%2FQ6afMNCCfai7%2BIes2jtfVJcJ2xSJ7AlzfWCDrJ9Kc5SF%2BXZGeD6ky90mm65CAXl9Yc7DbRAb2jdzyj54FJCJfZsU%2Bg5Jq3hi94dX1kzLWjaLw%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703905201509.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jzkq8d27UWpl0IOo9HZtvNiYYbieKcExvxwo0b4HlLcs6S6aAEKJNCRD%2F6JWYkJtZsaSeFVZsbkNmKxgxX82Z0FT7pVbPWt80PoGfZv2kkR7P4ji52qr36pVPvfwwQKXDJrlyb2h8b4ZAAiRt6sD05eZyqr2bfI80UW%2FlrHuRSOaAJCIo9LrurKZqmTigytS0f33z3ALgshHHnX2tM%2FdO4yZp7KLmLIbpzLedBPBkvMUT%2Br3RVxyMHXxOdpyNvKrG29jXkEcuCXRRlb6OgDu%2FGox71so1ksdnw0CEgTSOHSjEvh0zjlt1E5ykN7vY0kwkpNkE9Apnq6lwSFSELfkmA%3D%3D"
 class="d-block w-100" alt="...">
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
<div class="container">
  <div class="row">
    <div class="row justify-content-center">
    <div class="d-flex flex-column align-items-center flex-wrap mt-3 py-4 col-md-6">
      <h2>
        精選商品
      </h2>
    </div>
  </div>
  </div>
</div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-xl-3 py-2" v-for="product in productList" :key="product.Id" v-bind="product">
        <div class="card rounded-0">
          <div class="card border-white text-white text-left" @click="getProduct(product.id)">
            <img :src="product.imageUrl" class="img-cover" height="300">
            <div class="card-img-overlay d-flex justify-content-center align-items-end">
              <button class="btn btn-primary col-8 border-radius-0 btn-default rounded-0"
              @click="getProduct(product.id)">查看更多</button>
              </div>
          </div>
          <div class="card-body text-center">
            <h5 class="card-img-title-lg">{{ product.title }}</h5>
              <p class="card-text">售價：{{ product.price }}</p>
            <button class="btn btn-outline-danger btn-xl rounded-0"
            :disabled ="this.status.loadingItem === product.id"
            @click="addCart(product.id)">
            <div class="spinner-grow text-red spinner-grow-sm" v-if="this.status.loadingItem === product.id">
              <span class="visually-hidden">Loading...</span>
            </div>
            加入購物車</button>
        </div>
        </div>
  </div>
</div>

</div>
<div class="bg-light mb-4 mb-md-6">
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
</div>
</template>
<script>

export default {
  data() {
    return {
      productList: [],
      cartsList: [],
      status: {
        loadingItem: '', // 對應品項id
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      coupon_code: '',
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((response) => {
        this.productList = response.data.products;
        console.log(this.productList);
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        console.log('Products', response);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cartsList = response.data.data;
        console.log('cartsList', this.cartsList);
      });
    },
  },

  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
