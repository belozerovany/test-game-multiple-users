<template>
        <div class="t-wrapper">
            <div v-for="(row, x) in drawMap" :key="x" class="t-row">
                <div v-for="(val, y) in row"  :class="val.cssclass" class="t-item" > 
                  <img  v-if="hero.chest.x ===x  && hero.chest.y===y" :src="hero.chest.img"  /> 
                  <img  :class="hero.hero.cssclass"  class="hero" v-if="hero.hero.x ===x  && hero.hero.y===y" :src="hero.hero.img" /> 
                  <img  v-if="hero.gnome.x ===x  && hero.gnome.y===y" :src="hero.gnome.img" :class="hero.gnome.cssclass" />   
                  <!-- <img  v-if="hero.cat.x ===x  && hero.cat.y===y" :src="hero.cat.img" :class="hero.cat.cssclass" /> -->
                  <img  v-if="hero.treasure.x ===x  && hero.treasure.y===y" :src="hero.treasure.img" :class="hero.treasure.cssclass"/>
                  <img  v-if="hero.gnomeQuest.x ===x  && hero.gnomeQuest.y===y" :src="hero.gnomeQuest.img" :class="hero.gnomeQuest.cssclass"/>
                  <img  v-if="hero.catQuest.x ===x  && hero.catQuest.y===y" :src="hero.catQuest.img" :class="hero.catQuest.cssclass"/>
                </div>
            </div>
        </div>
</template>

<script>
import mainEvent from '../eventListeners/mainEvent'
import { findhero } from '../maps/localMap'
const allHerro = []

export default {
  components: { mainEvent, findhero },
  data: function() {
    return {
      allHerro: [],
      ev: mainEvent.bind(this, allHerro)
    }
  },
  created: function() {
    window.addEventListener('keydown', this.ev)
    for (let key in findhero) {
      if (findhero[key].doIt.walk) {
        allHerro.push(findhero[key])
      }
    }
  },
  methods: {},
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.ev)
  },
  computed: {
    drawMap() {
      return this.$store.getters.mapGetter
    },
    hero() {
      return findhero
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t-wrapper {
  max-width: 1000px;
}
.t-row {
  display: flex;
  flex-direction: row;
}
.t-item {
  width: 45px;
  height: 45px;
  background-size: 45px 45px;
  background-color: white;
  flex: auto;
  position: relative;
}
.t-item img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 45px;
  height: 45px;
}
.hero {
  z-index: 4;
}
</style>
