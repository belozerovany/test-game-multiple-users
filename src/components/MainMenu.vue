<template>
  <div class="">
   <h2 class="text-big text-gray">Maze Adventures</h2>
   <div>
      <router-link to="/game" class="button button-huge block-mobile">New Game</router-link>
   </div>
   <div>
      <router-link to="/save" class="button button-huge block-mobile">Save Game</router-link>
   </div>
   <div>
      <router-link to="/load" class="button button-huge block-mobile">Load Game</router-link>
   </div>
   <div>
      <router-link to="/teststore" class="button button-huge block-mobile">TEST STORE</router-link>
   </div>

  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
