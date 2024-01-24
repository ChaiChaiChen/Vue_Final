<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserNavbar></UserNavbar>
    <router-view/>
    <Footer></Footer>
    <ToastMessages></ToastMessages>
</template>
<script>
import emitter from '@/methods/emitter';
import Footer from '@/components/Footer.vue';
import UserNavbar from '@/components/UserNavbar.vue';
import ToastMessages from '../../components/ToastMessages.vue';

export default {
  components: {
    UserNavbar,
    Footer,
    ToastMessages,

  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
