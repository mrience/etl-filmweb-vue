<template>
  <div class="container">
    <h1 class="display-3">your films</h1>
      <app-film v-for="film in films" :film="film" :key="film.url"></app-film>
  </div>
</template>

<script>
  import Film from './Film'

    export default {
      name: "Films",
      components: {
        appFilm: Film
      },
      computed: {
        films() {
          return this.$store.getters.getFilms;
        }
      }
    }
</script>

<style scoped>

</style>
