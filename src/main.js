import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'
import { mapState, mapMutations } from 'vuex'

//import 'semantic/dist/semantic.min.css'

Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

//Variáveis globais
Vue.prototype.$chaveDaAPI = 'pl38yUoH5uJykkpeBeraTmxrz1ZXSyGf';
Vue.prototype.$message = 'ui dimmable dimmed';


new Vue({
//el: '#app',
store,
render: h => h(App),
//data: {
//  gifBuscado: '',
  //chaveDaAPI: 'pl38yUoH5uJykkpeBeraTmxrz1ZXSyGf',
  //message: 'ui dimmable dimmed',
//  mostra:  false,
//  respostas: []
//},
methods: {
  montaUrl: function(temaDoGif){
    if (temaDoGif === '') {
      return 'https://api.giphy.com/v1/gifs/trending?api_key=' + this.$chaveDaAPI + '&limit=6&rating=G';
    }else {
      return 'https://api.giphy.com/v1/gifs/search?api_key=' + this.$chaveDaAPI + '&q=' + temaDoGif + '&limit=6&offset=0&rating=G&lang=en';
    }
  },
  mostraGifs: function(temaDoGif){
    let url =  this.montaUrl(temaDoGif);
    axios.get(url)
    .then(response => {
      //this.respostas = response.data.data;
      this.RETORNO_API(response.data.data);
      this.CARREGA_GIFS('n');
      console.log(this.populaGifs);

    })
  },
  ...mapMutations([
    'RETORNO_API', 'CARREGA_GIFS'
  ]),
  //defineRetornoAPI: function(retorno){
  //this.RETORNO_API(retorno);
  //}
},
watch: {
  populaGifs(newVal, oldVal){
    if (newVal === 's') {
      this.mostraGifs(this.gifBuscado);
    }
  }
},
computed: {
  ...mapState([
    'gifBuscado',
    'respostas',
    'populaGifs'
  ]),
},
mounted() {
  this.mostraGifs(this.gifBuscado);
}
}).$mount('#app')
