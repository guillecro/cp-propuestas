import Vue from 'vue'
import Buefy from 'buefy';

import esValidationMessages from 'vee-validate/dist/locale/es';
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router'
import globals from './globals'
import http from './http'
import store from './store'

const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dateLocaleString = 'es-AR';

Vue.mixin(globals);

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDialogConfirmText: 'OK',
  defaultDialogCancelText: 'Cancelar',
  defaultDayNames: days,
  defaultMonthNames: months,
  defaultDateFormatter: date => date.toLocaleDateString(dateLocaleString),
});

Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es: esValidationMessages,
  },
});

Vue.prototype.$http = http;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  http,
  render: h => h(App)
}).$mount('#app')
