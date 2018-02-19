export default function(actionsArr, event) {
  this.$store.dispatch('action', { event, actionsArr })
  if (this.$store.getters.winner) {
    this.$router.push({ name: 'DevelopersScreen' })
  }
}
