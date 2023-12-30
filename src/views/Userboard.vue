<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand " href="#/user/cart">Rubik's cube</a>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav navbar-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/user/products">商品一覽</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/user/about">關於我們</a>
          </li>
        </ul>
      </div>
  </div>
</nav>

    <router-view/>
    <Footer></Footer>
</template>
<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>
