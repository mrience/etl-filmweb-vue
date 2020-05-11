<template>
    <div>
        <b-card
          :img-src="film.poster.length !== 0 ? film.poster: './graphics/noimage.png'"
          img-alt="Card image"
          img-left class="mb-3"
          img-width=12%
          img-height=12%
          bg-variant="light"
          text-variant="dark"
        >
          <b-card-text>
            <h1>{{film.title}}</h1>
          </b-card-text>
          <b-button variant="primary" @click="$bvModal.show(film.url)">
           show details
          </b-button>
          <film-details-modal :film="film" :key="film.url"></film-details-modal>
        </b-card>
    </div>
</template>

<script>
  import FilmDetailsModal from './FilmDetailsModal';

    export default {
      name: "film",
      props: ['film'],
      components: {
        filmDetailsModal: FilmDetailsModal
      }
    }
</script>

<style scoped>

</style>
