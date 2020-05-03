<template>
<!--  <b-modal-->
<!--    id="modal-xl"-->
<!--    size="xl"-->
<!--    title=film.title-->
<!--  >-->
<!--    <p v-for="(value, name) in film" :key="name">-->
<!--      {{name}} | {{value}}-->
<!--    </p>-->
<!--  </b-modal>-->
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
