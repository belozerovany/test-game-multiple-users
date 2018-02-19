<template id="demo">
  <section class="aligner-space-between">
    <div class=" background-dark box-left" >
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
        <popup-window v-show="this.$store.getters.OpeningClosePopup.opening"/>
      </div>
    </div>
    <div class="box-right">
      <div >
        <router-link to="/" class="button button-huge block-mobile">back to main menu</router-link>
      </div>
      <div class="button button-huge block-mobile" @click="openInventory">Inventory</div>
      <Inventory @information="inform =$event" @clearinformation="inform =$event" v-show="opening"></Inventory>
      <div class="inventory-box" v-for=" box in createBoxInfo">
        <div class="text-gray background-dark inventory-box"  v-if="box.inventoryCreated">
            <h1 class="text-primary text-uppercase">You have: </h1>
            <p v-show="box.class === inform.class" class="text-show">{{inform.text}} <br> {{inform.weight}} / kilo</p>
            <p  class="text-primary text-box"> You can put in bag only / {{box.maxWeight}} kilo</p>
            <p class="text-primary text-uppercase">Now in your bag is</p>
            <p class="text-primary text-uppercase">{{box.allWeight}} / kilo</p>
            <p v-if="box.warning" class="text-error text-uppercase">Weight will be more than allowable</p>
        </div>    
      </div> 
    </div>
  </section>
</template>

<script>
import GameTerran from './GameTerran'
import Inventory from './Inventory'
import PopupWindow from './PopupWindow'
export default {
  name: 'GameScreen',
  components: { GameTerran, Inventory, PopupWindow },
  data: function() {
    return {
      opening: false,
      popupOpening: this.$store.getters.OpeningClosePopup,
      inform: {
        text: '',
        weight: '',
        class: '',
        warnings: this.$store.state.hero.warning
      },
      winner: this.$store.getters.winner
    }
  },
  methods: {
    openInventory() {
      this.opening = !this.opening
    }
  },
  computed: {
    createBoxInfo() {
      return this.$store.state.hero
    }
  },
  update: function() {
    if (this.$store.getters.winner) {
      this.$router.push({ name: 'DevelopersScreen' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  max-width: 1000px;
  margin: auto;
}
.text-box {
  padding: 0;
  margin: 3px auto;
  font-size: 18px;
}
.text-show {
  /* height: 250px; */
  margin: 3px auto;
  font-size: 18px;
  padding: 0;
}
.inventory-box {
  max-width: 300px;
  margin: 20px auto;
}
.aligner-space-between {
  /* flex-wrap: wrap; */
}
.background-dark {
  padding: 0;
  margin: 0 auto;
}
/* .box-left {
  width: 70%;
}*/
.box-right {
  margin: 0 auto;
}
.button {
  max-width: 200px;
}
</style>
