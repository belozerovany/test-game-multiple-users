import { Hero } from './itemCreator'
export class Quest extends Hero {
  constructor(dialog, coords, id, name = '', img = '', cando, inventory, maxWeight, allWeight, warning = false, interact, pickItem = false, inventoryCreated = false, opening = false) {
    super(coords, id, name, img, cando, inventory, maxWeight, allWeight, warning, interact, pickItem, inventoryCreated, opening)
    this.dialog = dialog
  }
  startingTalk(state, whoComeToMe) {
    this.whoComeToMe = whoComeToMe
    switch (this.class) {
      case 'catQuest':
        return this.answeringOnEnigma(state)
      case 'gnomeQuest':
        return this.сheckingbasket(state)
    }
  }
  listenAnsweringFromItems(state, item, dialog) {
    return {
      start: this.dialog[this.dialog.start].links,
      whospeaks: this,
      info: {
        name: this.class,
        class: this.class,
        mess: this.dialog[this.dialog[this.dialog.start].links].mess,
        options: this.dialog[this.dialog[this.dialog.start].links].options,
        quest: this
      }
    }
  }
  answeringOnEnigma(state, item, dialog) {
    if (item === 'no') {
      return {
        opening: false
      }
    }
    if (item === undefined) {
      return {
        opening: true,
        quest: this,
        info: {
          name: this.class,
          class: this.class,
          mess: this.dialog[this.dialog.start].mess,
          options: this.dialog[this.dialog.start].options,
          quest: this
        }
      }
    }
    if (item === this.dialog[this.dialog.start].ansver) {
      return {
        start: this.dialog[this.dialog.start].links,
        whospeaks: this,
        info: {
          badAnsver: '',
          name: this.class,
          class: this.class,
          mess: this.dialog[this.dialog[this.dialog.start].links].mess,
          options: this.dialog[this.dialog[this.dialog.start].links].options,
          quest: this
        }
      }
    } else {
      return {
        start: this.dialog.start,
        whospeaks: this,
        info: {
          badAnsver: this.dialog[this.dialog[this.dialog.start].badAnsver].mess
        }
      }
    }
  }
  сheckingbasket(state) {
    let foods = 0
    if (this.dialog.start === 0 || this.dialog.start === 1) {
      return {
        opening: true,
        start: this.dialog[this.dialog.start].links,
        whospeaks: this,
        info: {
          name: this.class,
          class: this.class,
          mess: this.dialog[this.dialog.start].mess,
          options: this.dialog[this.dialog.start].options
        }
      }
    }
    if (this.dialog.start > 1) {
      this.whoComeToMe.inventory.map(first =>
        first.map(item => {
          if (item.name === 'food') {
            foods++
          }
        })
      )
      if (foods !== this.dialog[this.dialog.start].ansver) {
        return {
          opening: true,
          start: this.dialog[this.dialog.start].badAnsver,
          whospeaks: this,
          info: {
            name: this.class,
            class: this.class,
            mess: this.dialog[this.dialog[this.dialog.start].badAnsver].mess,
            food: foods
          }
        }
      }
      if (foods === this.dialog[this.dialog.start].ansver) {
        return {
          opening: true,
          start: this.dialog[this.dialog.start].links,
          whospeaks: this,
          info: {
            name: this.class,
            class: this.class,
            mess: this.dialog[this.dialog[this.dialog.start].links].mess
          }
        }
      }
    }
  }
}
