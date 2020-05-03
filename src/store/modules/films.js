import filmData from '../../data/filmData'

const state = {
  films: filmData
};

const mutations = {

};

const actions = {

};

const getters = {
  getFilmByUrl(state, url) {
    for (film in state.films) {
      if (film.url === url)
        return film.url;
    }
    throw 'url not found'
  },
  getFilms: state => {
    return state.films
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
