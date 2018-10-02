<template>
    <main role='main' class='movie-wrapper'>
        <h1>{{ title }}</h1>
        <movie v-bind:selected-movie='selectedMovie'></movie>
    </main>
</template>

<script>
import Vue from 'vue'
import Movie from '@/components/Movie/Movie'
export default {
  name: 'app',
  components: {
    Movie
  },
  data () {
    return {
      title: "Movues: find your tonight's plan",
      selectedMovie: {}
    }
  },
  mounted () {
    this.searchMovie('deadpool-2')
  },
  methods: {
    searchMovie (movie) {
      return window
        .fetch(`${Vue.config.movues.ENDPOINT}${movie}`)
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          this.selectedMovie = json
        }.bind(this))
    }
  }
}
</script>
<style scoped>
.movie-wrapper {
  height: 100vh;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
}
.movie-wrapper > h1 {
  font-weight: 300;
  text-align: center;
  margin: 0;
  padding: 2rem;
}
</style>
