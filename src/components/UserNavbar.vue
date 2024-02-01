<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-theme fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click="mobileBtn = false">
        <img src="../assets/static/logo.png" class="logo" alt="">
        </router-link>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        :class="{'active': mobileBtn}" @click="mobileBtn = !mobileBtn">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'active': mobileBtn }">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link text-nav" @click="mobileBtn = false"
             aria-current="page" to="/products">
              <h5><strong>商品一覽</strong></h5>
            </router-link>
          </li>
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link text-nav" @click="mobileBtn = false"
             aria-current="page" to="/news">
             <h5><strong>最新消息</strong></h5>
            </router-link>
          </li>
        </ul>
        <div class="nav navbar-nav ms-auto">
          <li class="me-2 ms-2 d-none d-lg-block">
            <router-link class="nav-link bi bi-cart fs-4 text-nav" @click="mobileBtn = false"
             aria-current="page" to="/checkout">
            </router-link>
          </li>
          <li class="me-3 ms-2 d-none d-lg-block">
            <router-link class="nav-link bi bi-person fs-3 text-nav" @click="mobileBtn = false"
             aria-current="page" to="/login">
            </router-link>
          </li>
        </div>
        <div class="nav navbar-nav ms-auto d-lg-none d-xl-none">
          <li class="me-2 ms-2">
            <router-link class="nav-link text-nav" @click="mobileBtn = false"
             aria-current="page" to="/checkout"><h5><strong>購物車</strong></h5>
            </router-link>
          </li>
          <li class="me-5 ms-2">
            <router-link class="nav-link text-nav" @click="mobileBtn = false"
             aria-current="page" to="/login"><h5><strong>後台登入</strong></h5>
            </router-link>
          </li>
        </div>
      </div>
  </div>
</nav>

</template>

<script>
export default {
  data() {
    return {
      mobileBtn: false,
    };
  },
};
</script>
