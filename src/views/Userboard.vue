<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserNavbar></UserNavbar>
    <router-view/>
    <Footer></Footer>
</template>
<script>
import Footer from '@/components/Footer.vue';
import UserNavbar from '@/components/UserNavbar.vue';

export default {
  components: {
    UserNavbar,
    Footer,

  },
};
</script>
