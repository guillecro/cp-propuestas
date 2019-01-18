import store from '@/store';
// import http from '@/http';

const globals = {
  methods: {
    startLoading() {
      store.commit('setLoading', true);
    },
    stopLoading() {
      store.commit('setLoading', false);
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;
    },
    lastTimeUpdated() {
      return this.$store.state.lastTimeUpdated;
    },
    userAvatar() {
      return `${this.user.avatar}${this.lastTimeUpdated}`;
    },
    user() {
      return this.$store.state.user;
    },
    authenticated() {
      return this.$store.state.isAuthenticated;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};

export default globals;
