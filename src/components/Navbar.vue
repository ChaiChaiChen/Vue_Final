<!-- eslint-disable vue/multi-word-component-names -->
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand mt-2 ms-3">
              <h4><strong>Soffa</strong></h4>
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
            <router-link class="nav-link" @click="mobileBtn = false"
             aria-current="page" to="products">
              <h4><strong>產品</strong></h4>
            </router-link>
          </li>
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link" @click="mobileBtn = false"
             aria-current="page" to="orders">
             <h4><strong>訂單</strong></h4>
            </router-link>
          </li>
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link" @click="mobileBtn = false"
             aria-current="page" to="coupons">
             <h4><strong>優惠券</strong></h4>
            </router-link>
          </li>
          <li class="nav-item ms-2 mt-2">
            <router-link class="nav-link" @click.prevent="logout"
             aria-current="page" to="/">
             <h4><strong>登出</strong></h4>
            </router-link>
          </li>

        </ul>
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
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
