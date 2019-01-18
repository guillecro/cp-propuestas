<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <the-footer/>
    <b-loading ref="loader" :active="isLoading"></b-loading>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TheFooter from '@/components/Footer.vue'
export default {
  components:{
    Navbar,
    TheFooter
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss";
.hero-head{
  background-color: rgba(0, 0, 0, 0.219);
  padding: 1rem;
}
</style>
