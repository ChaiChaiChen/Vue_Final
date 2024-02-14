<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Navbar></Navbar>
      <router-view/>
    <ToastMessages></ToastMessages>
</template>
<style>
body{
  background-color: var(--bs-light-yellow);
}
</style>
<script>
import emitter from '@/methods/emitter';
import Navbar from '../../components/Navbar.vue';
import ToastMessages from '../../components/ToastMessages.vue';

export default {
// 區域註冊Navbar
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // alert(token);
    // 將token加入到headers
    this.$http.defaults.headers.common.Authorization = token;

    // 透過$讀出.env環境變數裡站點的位置，連接後方api/user/check的API路徑
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // 透過axios中的this.$http取得方法，使用POST(包含API,夾帶的資料)
    // promise使用.then方法進行串接
    this.$http.post(api, this.user).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};

</script>
