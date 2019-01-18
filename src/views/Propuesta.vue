<template>
  <section id="propuesta">
    <div class="hero is-primary" v-if="!fetching">
      <div class="hero-head">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <router-link :to="{name: 'home'}">
                  <i class="fas fa-home"></i>&nbsp;Inicio
                </router-link>
              </li>
              <li class>
                <a href="#">Propuesta</a>
              </li>
              <li class="is-active">
                <a href="#">{{proposal.title}}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 has-text-centered">Propuestas</h1>
          <h1 class="subtitle is-4 has-text-centered">{{proposal.title}}</h1>
        </div>
      </div>
    </div>
    <section class="section" v-if="!fetching">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Objetivo general de la propuesta</h1>
                <p class="is-size-5">{{proposal.objective}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Breve descripción de la propuesta</h1>
                <p>{{proposal.description}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Qué problemática intenta modificar/resolver la propuesta</h1>
                <p>{{proposal.problems}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Hitos de la propuesta</h1>
                <table class="table is-fullwidth is-narrow is-bordered">
                  <tbody>
                    <tr v-for="(milestone,index) in proposal.milestones" :key="index">
                      <td><i class="fas fa-angle-right"></i>&nbsp;{{milestone}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">En que aporta la propuesta a la temática de Gobierno Abierto</h1>
                <p>{{proposal.problems}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">A que nivel alcanza la propuesta</h1>
                <p>{{proposal.scale}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Organismo/s que identifica como responsable/s </h1>
                <p>{{proposal.responsible}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Otros actores que tendrían que participar para cumplir la meta</h1>
                <p>{{proposal.otherActors}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Tipo de compromiso</h1>
                <p>{{proposal.type}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Información adicional</h1>
                <p>{{proposal.extra}}</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Temas</h1>
                <div class="tags">
                <span v-for="(milestone,index) in proposal.milestones" :key="index" class="tag is-rounded is-medium is-primary">{{milestone}}</span>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4">Qué problemática intenta modificar/resolver la propuesta</h1>
                <p>{{proposal.problems}}</p>
              </div>
            </div>
            <br>
            <h1 class="title is-3">Representante</h1>
            <div class="card">
              <div class="card-content">
                <div class="columns">
                  <div class="column is-8">     
                <h1 class="title is-4">Apellidos y nombres</h1>
                <p>{{proposal.contact.surnames.toUpperCase()}}, {{proposal.contact.names}}</p>
                  </div>
                  <div class="column is-4 has-text-centered">
                    <h1 class="title is-4">Provincia</h1>
                    <p>{{proposal.contact.province}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="columns">
                  <div class="column is-8">     
                <h1 class="title is-4">Institucion</h1>
                <p>{{proposal.contact.institution}}</p>
                  </div>
                  <div class="column is-4 has-text-centered">
                    <h1 class="title is-4">Sector</h1>
                    <p>{{proposal.contact.institutionSector}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      fetching: false,
      proposal: null
    };
  },
  created() {
    this.startLoading();
    this.getProposal();
  },
  methods: {
    getProposal() {
      this.$http
        .get(`/proposal/${this.id}`)
        .then(response => {
          this.proposal = response.data;
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.stopLoading();
        });
    }
  }
};
</script>

<style>
</style>
