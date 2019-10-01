<template>
  <div id="app">
      <div class="ui container">
        <!--<BlocoDeBusca />-->
        <div class="ui header">
          <div class="ui huge left floated">
            Sithcida
          </div>
          <div class="ui tiny right floated">
            Powered by Giphy
          </div>
        </div>

        <div class="ui fluid action input">
            <input  type="text" placeholder="Busca..." @keydown="defineGif" @keyup.enter="carregaGifs" v-model="gifDigitado">
            <button class="ui icon button" type="button" name="button" @click="carregaGifs">
              <i class="search icon"></i>
            </button>
        </div>
        </br>
        <!--<BlocoDeGifs />-->
        <div class="ui linked cards">
          <template v-for="resposta in respostas">
          <div class="ui raised card">
            <div class="image" :class="mostra ? $message : ''">
              <div class="ui simple dimmer">
                <div class="content">
                  <div class="header">{{resposta.title}}</div>
                  <p>{{resposta.username}}</p>
                </div>
              </div>
              <img :src="resposta.images.fixed_height.url">

              <a class="ui right corner label" @click="inverte">
                <i class="plus icon"></i>
              </a>

            </div>
          </div>
         </template>
       </div>
        <observer />
      </div>
  </div>
</template>

<script>
import BlocoDeBusca from './components/BlocoDeBusca';
import BuscaGif from './components/BlocoDeBusca';
import BlocoDeGifs from './components/BlocoDeGifs';
import Observer from './components/Observer';
import { mapState, mapMutations } from 'vuex';


export default {
  name: 'app',
  components: {
    BlocoDeBusca,
    BlocoDeGifs,
    Observer
  },
  data() {
    return {
      gifDigitado: '',
      mostra: false
    }
  },
  computed: {
    ...mapState([
      'gifBuscado',
      'respostas',
      'populaGifs'
    ]),
  },
  methods: {
    inverte: function(event){
      this.mostra = !this.mostra;
    },
    ...mapMutations([
      'BUSCA_GIF', 'CARREGA_GIFS'
    ]),
    defineGif: function(){
    this.BUSCA_GIF(this.gifDigitado);
    },
    carregaGifs: function(){
    this.CARREGA_GIFS('s');
    },
  }

}
</script>

<style>

</style>
