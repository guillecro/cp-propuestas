<template>
  <section id="admin">
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
              <li class="">
                <a href="#">Administración</a>
              </li>
              <li class="is-active">
                <a href="#">Propuestas recibidas</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 has-text-centered">Propuestas recibidas</h1>
          <h1 class="subtitle is-4 has-text-centered">Administración</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <h1 class="title is-4 has-text-centered">Filtrar por categorias</h1>
      <div class="buttons is-centered">
        <button
          class="button is-primary is-rounded is-outlined"
          v-for="(tag,index) in availableTags"
          :key="index"
        >{{tag}}</button>
      </div>
      <div class="field">
        <div class="control">
          <input type="text" class="input is-large" placeholder="Buscar por texto">
        </div>
      </div>
          <div class="card">
            <div class="card-content">
              <div class="is-pulled-right">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-clock"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-success">
                      <i class="fas fa-check"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-eye-slash"></i>
                  </a>
                </p>
              </div>
              <div class="field has-text-right">
                <span class="tag is-success">Visible</span>
              </div>
              </div>
              <h1 class="title is-6">Este seria un titulo de una propuesta</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nostrum autem error sunt quae accusamus magnam aut eius corporis voluptatum quas molestias praesentium, maiores nam iure odit culpa, est laborum!</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="is-pulled-right">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-warning">
                      <i class="fas fa-clock"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-check"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-eye-slash"></i>
                  </a>
                </p>
              </div>
              <div class="field has-text-right">
                <span class="tag is-warning">Pendiente</span>
              </div>
              </div>
              <h1 class="title is-6">Este seria un titulo de una propuesta</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nostrum autem error sunt quae accusamus magnam aut eius corporis voluptatum quas molestias praesentium, maiores nam iure odit culpa, est laborum!</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="is-pulled-right">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-clock"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-outlined">
                      <i class="fas fa-check"></i>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-dark">
                      <i class="fas fa-eye-slash"></i>
                  </a>
                </p>
              </div>
              <div class="field has-text-right">
                <span class="tag is-dark">Ocúlto</span>
              </div>
              </div>
              <h1 class="title is-6">Este seria un titulo de una propuesta</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nostrum autem error sunt quae accusamus magnam aut eius corporis voluptatum quas molestias praesentium, maiores nam iure odit culpa, est laborum!</p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      availableTags: [
        "Educación",
        "Salud",
        "Transparencia",
        "Gobierno Abierto",
        "Seguridad",
        "Derechos humanos"
      ]
    };
  }
};
</script>

<style>
</style>
