<template lang="html">
<div class="BlocoDeGifs">
  <div class="ui linked cards">
    <template v-for="resposta in respostas_">
    <div class="ui raised card">
      <div class="image" :class="mostra ? message : ''">
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
</div>
</template>

<script>
import gifBuscado from '../main.js';
import respostas from '../main.js';

export default {
  data() {
    return {
      gifBuscado_: gifBuscado,
      respostas_: respostas
    }
  }
}
</script>

<style>
</style>
