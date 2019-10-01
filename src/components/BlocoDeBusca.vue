<template>
  <div class="BlocoDeBusca">
    <div class="ui header">
      <div class="ui huge left floated">
        Sithcida
      </div>
      <div class="ui tiny right floated">
        Powered by Giphy
      </div>
    </div>
    <div class="ui fluid action input">
        <input  type="text" placeholder="Busca..." @keyup.enter="submit" v-model="gifBuscado">
        <button class="ui icon button" type="button" name="button" @click="mostraGifs(gifBuscado)">
          <i class="search icon"></i>
        </button>
    </div>
  </div>

</template>

<script>
//import gifBuscado from '../main.js';

export default {
  name: "BuscaGif",
  data() {
    return {
      gifBuscado: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.gifBuscado);
      this.gifBuscado = "";
    }
  }
}
</script>

<style>
</style>
