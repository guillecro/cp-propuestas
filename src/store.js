import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isAuthenticated: false,
    user: {},
  },
  mutations: {
setLoading(state, loading) {
      // eslint-disable-next-line
      state.isLoading = loading;
    },
    setAuthenticated(state, isAuthenticated) {
      // eslint-disable-next-line
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user) {
      // eslint-disable-next-line
      state.user = user
    },
  },
  actions: {
    logout(context) {
      context.commit('setAuthenticated', false);
      context.commit('setUser', {});
    },
  }
})
