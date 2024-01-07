<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link to="/user/cart" class="navbar-brand mt-2 ms-3"><h4>
        <strong>Soffa</strong></h4></router-link>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        :class="{'active': mobileBtn}" @click="mobileBtn = !mobileBtn">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'active': mobileBtn }">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link" @click="mobileBtn = false"
             aria-current="page" to="/user/products/所有商品">
              <h5><strong>商品一覽</strong></h5>
            </router-link>
          </li>
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link" @click="mobileBtn = false"
             aria-current="page" to="/user/about">
             <h5><strong>關於我們</strong></h5>
            </router-link>
          </li>
        </ul>
        <div class="nav navbar-nav ms-auto">
          <li class="me-2 ms-2 d-none d-lg-block">
            <router-link class="nav-link bi bi-cart fs-4" @click="mobileBtn = false"
             aria-current="page" to="/user/checkout">
            </router-link>
          </li>
          <li class="me-3 ms-2 d-none d-lg-block">
            <router-link class="nav-link bi bi-person fs-3" @click="mobileBtn = false"
             aria-current="page" to="/login">
            </router-link>
          </li>
        </div>
        <div class="nav navbar-nav ms-auto d-lg-none d-xl-none">
          <li class="me-2 ms-2">
            <router-link class="nav-link fs-5" @click="mobileBtn = false"
             aria-current="page" to="/user/checkout"><strong>購物車</strong>
            </router-link>
          </li>
          <li class="me-5 ms-2">
            <router-link class="nav-link fs-5" @click="mobileBtn = false"
             aria-current="page" to="/login"><strong>後台登入</strong>
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
