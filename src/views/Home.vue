<template>
  <section id="home">
    <div class="hero is-medium is-primary background-one">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-8 is-offset-2">

          <h1 class="title is-1">Propuestas y compromisos</h1>
          <h1
            class="subtitle is-5"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ipsum eveniet, repudiandae eius qui consequuntur commodi alias sapiente nemo incidunt natus quod maxime obcaecati soluta cupiditate. Accusamus nostrum aliquam consequuntur.</h1>
            <router-link :to="{name: 'formulario'}" class="button is-info is-large">
              <i class="fas fa-plus"></i>&nbsp;Sumar nueva propuesta
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h1 class="title is-4 has-text-centered">Explorá por categorias</h1>
        <div class="buttons is-centered the-tags">
          <button
            class="button is-primary is-medium is-rounded"
            :class="{'is-outlined': !selectedTags.includes(tag), 'is-active': selectedTags.includes(tag) }"
            v-for="(tag,index) in availableTags"
            @click="toggleTag(tag)"
            :key="index"
          >{{tag}}</button>
        </div>
        <div class="has-text-centered section" v-if="fetching">
          <h2 class="subtitle is-4">
          <i class="fas fa-spinner fa-spin fa-2x"></i>
          <br>
            Cargando
          </h2>
        </div>
        <div class="section" v-else>
          <div class="columns is-multiline">
            <div class="column is-4" v-for="(proposal,index) in proposals" :key="index">
              <router-link :to="{name: 'propuesta', params: { id: proposal._id }}">
              <div class="card">
                <div class="card-content">
                  <h1 class="title is-5 has-text-primary">{{proposal.title}}</h1>
                  <div class="content">
                  <p>{{proposal.objective}}</p>
                  </div>
                  <div class="tags">
                    <p class="tag is-primary" v-for="(topic,index) in proposal.topics" :key="index">{{topic}}</p>
                  </div>
                  <h1 class="subtitle is-7">Presentado por {{proposal.contact.surnames.toUpperCase()}}, {{proposal.contact.names}}
                  <span v-if="proposal.contact.institution"><br>{{proposal.contact.institution}}</span>
                  </h1>
                </div>
              </div>
              </router-link>
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
      fetching: true,
      proposals: [],
      availableTags: [
        "Educación",
        "Salud",
        "Ciudadania",
        "Transparencia",
        "Gobierno Abierto",
        "Seguridad",
        "Derechos humanos"
      ],
      selectedTags: []
    };
  },
  created: function(){
    this.fetching = true
    this.getProposals();
  },
  methods: {
    getProposals(){
      let url = '/proposal'
      if(this.selectedTags.length){
        let querystring = this.selectedTags.join(',')
        url = `${url}?tags=${querystring}`
      }
      this.$http.get(url).then(response => {
        this.proposals = response.data
      }).catch( err => {
        console.error(err)
      }).finally( () => {
        this.fetching = false;
        this.stopLoading();
      })
    },
    toggleTag(tag){
      if(this.selectedTags.includes(tag)){
        this.selectedTags = this.selectedTags.filter( t => {
          return t !== tag
        })
      } else {
        this.selectedTags.push(tag);
      }
      this.startLoading()
      this.getProposals()
      let el = document.querySelector( ':focus' );
      if( el ) el.blur();
    }
  }
};
</script>

<style lang="scss">

</style>
