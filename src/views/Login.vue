<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserNavbar></UserNavbar>
    <div class="container-fluid backgroundImg">
        <form action="" class="row justify-content-center align-items-center"
         style="height: 100vh;" @submit.prevent="singIn">
            <div class="col-md-6 login text-white">
                <h1 class="mt-3 mb-3 font-weight-normal text-center">
                    後台登入
                </h1>
                <!-- required進行email驗證 -->
                <!-- autofocus進入畫面不使用滑鼠即可focus在輸入框 -->
                <div class="mb-2">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        placeholder="Email address"
                        required
                        autofocus
                        v-model="user.username"
                    />
                </div>
                <div class="mb-2">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required
                        v-model="user.password"
                    />
                    </div>
                    <div class="text-end mt-4 mb-3">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
                    </div>
            </div>
        </form>
    </div>
</template>
<style>
.backgroundImg{
  background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1705331658454.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oj%2Bz1eT7LCgE84dHTd%2BRHk9QbnpRAhNSERROVFwRNDmjvnRd7KQBlAPzBkPEsVo75meaATb1S0IysdQvxpVbS7kDOP5pkQht2RJdAA6%2FXpJ%2FwEO3RfOlmnIv42uNmxGKctUNASfpL7cCH2h1xNxtPbu9HcNMx8nOoZegKpieTzGkC%2FSgiAr3qgMhKl%2BtliJg%2BRr6n5nHFltoqXIp3RBVBmsSU0GByEnc6H%2F3anRhekbjuGO%2FYoYeVLcWcd4LzdK4n4Yj8NdnJ9GSkT31eROnWIMagNG0yQ5RhnhkTf0USxnOEnNZgK%2FP9C4OwJVtkX9mAUgYYhRGkQEzFd9lduHIfA%3D%3D") ;
  background-repeat: no-repeat;
  background-size: cover;
}
.login {
  backdrop-filter: blur(15px);
  background: rgba(212, 212, 212, 0.16);
  border-radius: 5px;
  border-radius: 10px;
}
</style>

<script>

import UserNavbar from '../components/UserNavbar.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    UserNavbar,
  },
  methods: {
    singIn() {
      // 透過$讀出.env環境變數裡站點的位置，連接後方admin/signin的API路徑
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // 透過axios中的this.$http取得方法，使用POST(包含API,夾帶的資料)
      // promise使用.then方法進行串接
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            // expired為token的到期日
            const { token, expired } = res.data;
            // console.log(token, expired);
            // 將token和到期日儲存到cookie中
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            // console.log(res);
            this.$router.push('/dashboard/chart');
          }
        });
    },
  },
};
</script>
