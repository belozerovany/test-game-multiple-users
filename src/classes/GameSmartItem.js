import { Hero } from './itemCreator'
export class GameSmartItem extends Hero {
  constructor(coords, id, name = '', img = '', cando, inventory, maxWeight, allWeight, warning, interact, pickItem, inventoryCreated, opening) {
    super(coords, id, name, img, cando, inventory, maxWeight, allWeight, warning)
    this.x = coords.x
    this.y = coords.y
    this.class = name
    this.img = img
    this.doIt = cando
    this.inventory = inventory
    this.maxWeight = maxWeight
    this.cssclass = name // it for create on map
    this.walk = interact // true or false
    this.pickItem = pickItem // can or no pick item
    this.inventoryCreated = inventoryCreated // need or no created like hero inventory
    this.opening = opening
  }
  dellFromInventory(state, elem, perent) {
    return {
      item: elem,
      teranClass: state.hero.chest.cssclass,
      coords: this.findEmptyPlace(state.hero[elem.whoItIsPicked].inventory),
      whoItIsPicked: elem.whoItIsPicked,
      newItem: {
        id: '',
        name: '',
        cssclass: '',
        weight: 0,
        info: ''
      },
      allWeight: this.countItems.call(state.hero[elem.whoItIsPicked], elem.weight)
    }
  }
}
