import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Formulario from './views/Formulario.vue'
import Confirmacion from './views/Confirmacion.vue'
import Propuesta from './views/Propuesta.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
    {
      path: '/formulario/confirmacion',
      name: 'confirmacion',
      component: Confirmacion
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/propuesta/:id',
      name: 'propuesta',
      props: true,
      component: Propuesta
    }
  ]
})
