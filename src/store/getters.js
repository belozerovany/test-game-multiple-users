export const mapGetter = state => {
  return state.terran.map((val, x) => val.map((val, y) => val))
}
export const drowBoxChestInventory = state => state.hero.chest
export const winner = state => state.winner.win
export const OpeningClosePopup = state => state.modalWindow
