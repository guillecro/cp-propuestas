<template>
  <section id="formulario">
    <div class="hero is-primary">
      <div class="hero-head">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <router-link :to="{name: 'home'}">
                  <i class="fas fa-home"></i>&nbsp;Inicio
                </router-link>
              </li>
              <li class="is-active">
                <a href="#">Formulario</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 has-text-centered">Sumar compromiso</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h2
              class="subtitle is-5 has-text-centered"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio voluptate itaque, reprehenderit eaque excepturi aliquid cum in. Doloremque vitae sequi neque et rerum, maiores amet atque omnis! Sequi, blanditiis?</h2>
            <hr>
            <div class="field">
            <p class="has-text-danger">(*) Requerido</p>
            </div>
            <text-input name="Nombre de la institución a la que representa" :model.sync="proposal" field="institution" :rules="{}"></text-input>
            <text-input name="Titulo de la propuesta" :model.sync="proposal" field="title" :rules="{required: true}"></text-input>
            <large-input name="Objetivo general de la propuesta" :model.sync="proposal" field="objective" :rules="{required: true}"></large-input>
            <large-input name="Breve descripcion de la propuesta" :model.sync="proposal" field="description" :rules="{required: true}"></large-input>
            <div class="field">
              <div class="buttons is-centered">
                <button class="button is-success has-text-centered is-large ">&nbsp;&nbsp;&nbsp;<i class="fas fa-paper-plane"></i>&nbsp;ENVIAR&nbsp;&nbsp;&nbsp;</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import LargeInput from '@/components/LargeInput.vue'

export default {
  data() {
    return {
      proposal:{
        institution: null,
        title: null,
        description: null,
        objective: null
      }
    }
  },
  components: {
    TextInput,
    LargeInput
  }
}
</script>


<style lang="scss" scoped>
.hero-head{
  background-color: rgba(0, 0, 0, 0.219);
  padding: 1rem;
}
</style>
