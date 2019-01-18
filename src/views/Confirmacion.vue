<template>
  <section id="confirmation">
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
    <div class="hero is-white is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="is-size-1 has-text-success"><i class="fas fa-check fa-lg"></i></p>
          <h1 class="title is-2 has-text-centered">¡Tu compromiso ha sido enviado!</h1>
          <router-link :to="{name: 'home'}" class="button is-primary is-large is-outlined">
            <i class="fas fa-home"></i>&nbsp;Volver al inicio
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
