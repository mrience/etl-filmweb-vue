<template>
  <b-modal

    :id="film.url"
    size="xl"
    :title="film.title"
    ok-only
    no-stacking
  >
    <p v-for="(value, name) in film" :key="name">
      {{name}} | {{value}}
    </p>
  </b-modal>
</template>

<script>
    export default {
      name: "FilmDetailsPopup",
      props: ['film'],
      mounted(){
        console.log(this.film)
      }
    }
</script>

<style scoped>

</style>
