<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/user/cart">Rubik's cube</router-link>
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
