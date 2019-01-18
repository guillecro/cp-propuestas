<template>
  <nav class="navbar is-transparent">
    <div class="container">

  <div class="navbar-brand">
    <router-link :to="{ name: 'home' }" class="navbar-item">
      <img src="@/assets/img/logo-presidencia.svg" class="the-logo">
    </router-link>
    <div class="navbar-burger burger" :class="{'is-active': showMobileNav }" @click="toggleMobileNav" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" :class="{'is-active': showMobileNav }" class="navbar-menu">
    <div class="navbar-start">
      <!-- <router-link :to="{ name: 'home' }" @click.native="closeMobileNav" class="navbar-item">
        Propuestas
      </router-link> -->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
         <router-link :to="{ name: 'home' }" @click.native="closeMobileNav" class="button is-primary is-medium">
        <i class="fas fa-plus"></i>&nbsp;Sumar compromiso
      </router-link>
      </div>
      <!-- <div class="navbar-item">
        <i class="fas fa-sign-in-alt fa-lg"></i>
      </div> -->
    </div>
  </div>
    </div>
</nav>
</template>

<script>
export default {
  data(){
    return {
      showMobileNav: true
    }
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    closeMobileNav() {
      this.showMobileNav = false;
    },
    logout() {
      this.showMobileNav = false;
      // this.$http
      //   .post('/user/logout')
      //   .then(() => {
      //     this.$store.dispatch('logout');
      //     this.$router.push({ name: 'home' });
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //     this.$snackbar.open({
      //       message: this.$t('globals.logoutError'),
      //       type: 'is-warning',
      //     });
      //   });
    },
    computed:{
      authenticated() {
      return this.$store.state.isAuthenticated;
      },
      user() {
        return this.$store.state.user;
      },
      isAdmin() {
        return this.$store.getters.isAdmin;
      }
    }
  },
}
</script>

<style lang="scss">
.the-logo{
  height: 72px;
  // width: ;;
}
</style>
