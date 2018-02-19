export const action = async ({ commit, state }, { event, actionsArr }) => {
  commit('stopTalk', state) // for closing popupWindow
  for (let i = 0; i < actionsArr.length; i++) {
    if (actionsArr[i].x === state.hero.treasure.x && actionsArr[i].y === state.hero.treasure.y && event.keyCode === 13) {
      commit('getWinGame', actionsArr[i])
    }
    commit('getCoordinateFromHerro', actionsArr[i].canMuve(event, state))
    for (let key in state.hero) {
      if (state.hero[key].doIt.speak) {
        if (
          (actionsArr[i].x === state.hero[key].x && actionsArr[i].y === state.hero[key].y + 1) ||
          (actionsArr[i].x === state.hero[key].x - 1 && actionsArr[i].y === state.hero[key].y) ||
          (actionsArr[i].x === state.hero[key].x + 1 && actionsArr[i].y === state.hero[key].y) ||
          (actionsArr[i].x === state.hero[key].x && actionsArr[i].y === state.hero[key].y - 1)
        ) {
          if (state.hero[key].class !== 'gnomeQuest') {
            commit('getStartTalk', state.hero[key].startingTalk(state, actionsArr[i]))
          } else {
            commit('getStartTalkGnome', state.hero[key].startingTalk(state, actionsArr[i]))
          }
          // opening first window who talking
        }
      }
    }
  }
}
export const DellFromInventory = async ({ commit, state }, { elem, WhoWantDeleteItem }) => {
  commit('DellInventory', WhoWantDeleteItem.dellFromInventory(state, elem))
}

export const DellFromChest = async ({ commit, state }, { elem, perent }) => {
  commit('DellChestInventory', perent.dellFromInventory(state, elem, perent))
}
// opening next window  items who talking
export const checkingAnswer = async ({ commit, state }, { item, dialog }) => {
  switch (dialog.class) {
    case 'catQuest':
      commit('listeningAnsver', state.hero[dialog.class].answeringOnEnigma(state, item, dialog))
      break
    case 'gnomeQuest':
      // commit('сheckingbasket', state.hero[dialog.class].сheckingbasket(state, { item, dialog }))
      break
  }
}
