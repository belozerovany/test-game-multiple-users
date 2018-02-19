<template class="PopupWindow" >
  <div class="PopupWindow">
   <div class="text-huge text-white text-with-subtitle"> 

       <h2>{{ dialog.name }}</h2> 
      <div :class="dialog.class" class="picture"></div> 
      <div>{{dialog.badAnsver}}</div>
      <div>{{ dialog.mess }}</div>
      <div>{{dialog.food}}</div>
       <div v-for="(item, index) in dialog.options">
          <button class="button button-secondary block-mobile" @click="checkAnswers(item, dialog)">{{item}}</button>
        </div>
    </div>
  
  </div>
</template>
<script>
export default {
  name: 'PopupWindow',
  data() {
    return {}
  },
  computed: {
    dialog() {
      return this.$store.state.modalWindow.info
    }
  },
  methods: {
    checkAnswers(item, dialog) {
      // console.log('thisclick', this)
      // console.log('dialog', dialog)
      this.$store.dispatch('checkingAnswer', { item, dialog })
    }
  }
}
</script>
<style scoped>
.picture {
  margin: auto;
  width: 250px;
  height: 250px;
  background-color: #2c3e50;
}
.over {
  position: static;
  text-align: center;
  width: 50%;
  margin: auto;
}
.PopupWindow {
  width: 600px;
  position: absolute;
  z-index: 999;
  top: 20%;
  left: 50%;
  margin-left: -300px;
  padding: 20px;
  background-color: #2c3e50;
}
</style>
