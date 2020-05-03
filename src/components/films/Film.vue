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
          <b-button v-b-modal.modal-xl variant="primary">
           how details
          </b-button>
          <film-details-modal :film="selectedFilm"></film-details-modal>
        </b-card>
    </div>
</template>

<script>
  import FilmDetailsModal from './FilmDetailsModal';

    export default {
      name: "Film",
      props: ['film'],
      components: {
        filmDetailsModal: FilmDetailsModal
      },
      data() {
        return {
          selectedFilm: null
        }
      }
    }
</script>

<style scoped>

</style>
