import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    gifBuscado: '',
    respostas: [],
    populaGifs: 'n'
  },
  getters: {

  },
  mutations: {
    BUSCA_GIF: (state, gif) => {
      state.gifBuscado = gif
    },
    RETORNO_API: (state, resultado) => {
      state.respostas = resultado
    },
    CARREGA_GIFS: (state, popula) => {
      state.populaGifs = popula
    }
  },
  actions: {

  }
});
