<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
        <form action="" class="row justify-content-center" @submit.prevent="singIn">
            <div class="col-md-6">
                <h1 class="h3 mb-3 font-weight-normal">
                    請先登入
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
                    <div class="text-end mt-4">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
                    </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
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
            this.$router.push('/dashboard/products');
          }
        });
    },
  },
};
</script>
