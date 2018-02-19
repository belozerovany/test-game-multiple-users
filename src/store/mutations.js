export const getCoordinateFromHerro = (state, info) => {
  if (info !== undefined && state.terran[info.x][info.y].walk.walk) {
    state.hero[info.classthis].x = info.x
    state.hero[info.classthis].y = info.y
  }
  if (info !== undefined && info.classTer !== ' ' && info.event) {
    state.hero[info.classthis].inventory[info.invX][info.invY] = Object.assign({}, state.terran[info.x][info.y], { x: info.invX, y: info.invY })
    state.hero[info.classthis].inventory = [...state.hero[info.classthis].inventory]
    state.terran[info.x][info.y].cssclass = ' '
    state.hero[info.classthis].allWeight = info.allWeight // put weight in hero
  }
}
export const DellInventory = (state, obj) => {
  state.hero[obj.whoItIsPicked].inventory[obj.item.x][obj.item.y] = Object.assign({}, obj.newItem)
  state.hero[obj.whoItIsPicked].inventory = [...state.hero[obj.whoItIsPicked].inventory]
  state.hero[obj.whoItIsPicked].allWeight = obj.allWeight
  if (obj.teranClass) {
    state.hero[obj.whoItIsPicked].inventory[obj.item.x][obj.item.y] = Object.assign({}, obj.newItem)
    state.hero[obj.whoItIsPicked].inventory = [...state.hero[obj.whoItIsPicked].inventory]
    state.hero[obj.teranClass].inventory[obj.coords.x][obj.coords.y] = Object.assign({}, obj.item)
  }
}
export const DellChestInventory = (state, obj) => {
  state.hero[obj.whoItIsPicked].inventory[obj.coords.x][obj.coords.y] = Object.assign({}, obj.item)
  state.hero[obj.whoItIsPicked].allWeight = obj.allWeight
  state.hero[obj.whoItIsPicked].inventory = [...state.hero[obj.whoItIsPicked].inventory]
  state.hero[obj.teranClass].inventory[obj.item.x][obj.item.y] = Object.assign({}, obj.newItem)
  state.hero[obj.teranClass].inventory = [...state.hero[obj.teranClass].inventory]
}
export const getWinGame = (state, whoWin) => {
  state.winner.winner = whoWin
  state.winner.win = true
}

export const stopTalk = state => {
  state.modalWindow.opening = false
}

export const getStartTalk = (state, { opening, info }) => {
  state.modalWindow.opening = opening
  state.modalWindow.info = info
  state.modalWindow = { ...state.modalWindow }
}
export const getStartTalkGnome = (state, { opening, start, whospeaks, info }) => {
  state.hero[whospeaks.class].dialog.start = start
  state.modalWindow.opening = opening
  state.modalWindow.info = info
  state.modalWindow = { ...state.modalWindow }
}
export const listeningAnsver = (state, { whospeaks, start, info }) => {
  if (info) {
    state.hero[whospeaks.class].dialog.start = start
    state.modalWindow.info = Object.assign(state.modalWindow.info, info)
    state.modalWindow.info = { ...state.modalWindow.info }
  } else {
    state.modalWindow.opening = false
  }
}
