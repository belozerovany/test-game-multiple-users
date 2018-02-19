<template>
    <div class="Inventory">
        <ul class="inventory-maine" v-for="box in drowBoxInventory">
          <h2 class="text-primary text-uppercase" v-if="box.inventoryCreated">{{box.class}}</h2>
           <li v-for="(item, x) in  box.inventory" v-if="box.inventoryCreated">
                <div
                 v-for="(i,y) in item" class="box"  
                 v-bind:class="x === elfromInventory.x &&y === elfromInventory.y? `active ${i.cssclass}`: i.cssclass"
                  @mouseenter="getInformationItem(i,box )"
                  @mouseleave="cleanItemInfo" @click="DropFromInventory(i,box)"
                  ></div>
            </li>  
        </ul>
        <div class="button button-primary block-mobile" @click="DellFromInventory">Drop From Inventory</div>
        <div class="button button-outlined block-mobile" @click="DellFromChestInventory" v-show="open">Drop From Chest</div> 
          <ul class="inventory-maine" v-for="box in this.$store.state.hero" v-if="box.doIt.getItems">
            <li v-for="(item, x) in drowBoxChestInventory.inventory" v-show="drowBoxChestInventory.x=== box.x && drowBoxChestInventory.y=== box.y">
              <div 
              v-for="(i,y) in item"
              class="box"
              v-bind:class="i.cssclass"
              @mouseenter="getInformationItem(i)"
              @mouseleave="cleanItemInfo"
              @click="DropFromChest(i, drowBoxChestInventory)"
              >{{test}}
              </div>
            </li> 
          </ul>    
    </div>
</template>
<script>
export default {
  name: 'Inventory',
  data: function() {
    return {
      elfromInventory: '',
      WhoWantDeleteItem: '',
      open: false,
      elemFromchest: '',
      test: this.drowBoxInventory
    }
  },
  methods: {
    getInformationItem(val, obj) {
      this.$emit('information', {
        text: val.info,
        weight: val.weight,
        class: obj ? obj.class : ''
      })
    },
    cleanItemInfo(event) {
      this.$emit('clearinformation', {
        text: '',
        weight: ''
      })
    },
    DropFromInventory(val, obj) {
      this.elfromInventory = val
      this.WhoWantDeleteItem = obj
    },
    DellFromInventory() {
      this.$store.dispatch('DellFromInventory', {
        elem: this.elfromInventory,
        WhoWantDeleteItem: this.WhoWantDeleteItem
      })
      this.elfromInventory = ''
    },
    DropFromChest(elem, perent) {
      this.elemFromchest = { elem: elem, perent: perent }
      this.open = true
    },
    DellFromChestInventory() {
      this.$store.dispatch('DellFromChest', { elem: this.elemFromchest.elem, perent: this.elemFromchest.perent })
      this.open = !this.open
      this.elemFromchest = ''
    }
  },
  computed: {
    drowBoxInventory() {
      return this.$store.state.hero
    },
    drowBoxChestInventory() {
      return this.$store.getters.drowBoxChestInventory
    },
    ReturnStateHerro() {
      return this.$store.state.hero
    },
    openingChest() {
      for (let key in this.drowBoxInventory) {
        if (this.drowBoxInventory[key].doIt.walk) {
          return {
            x: this.drowBoxInventory[key].x,
            y: this.drowBoxInventory[key].y
          }
        }
      }
    }
  }
}
</script>
<style>
.active {
  border: 2px solid white !important;
}
.inventory-maine {
  max-width: 300px;
  text-align: center;
  margin: 20px auto;
}
li {
  display: flex;
  max-width: 300px;
  margin: 0;
  padding: 0;
}
.box {
  width: 60px;
  height: 60px;
  border: 1px solid #18232f;
}
</style>
