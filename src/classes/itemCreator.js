export class Item {
  constructor(coords, id, name = '', cssclass = '', weight = 0, info = '', interact, pickItem) {
    this.x = coords.x
    this.y = coords.y
    this.id = id
    this.name = name
    this.cssclass = cssclass
    this.weight = weight
    this.info = info
    this.walk = interact
    this.pickItem = pickItem
  }
}

export class Hero {
  constructor(coords, id, name = '', img = '', cando, inventory, maxWeight, allWeight, warning, pickItem, inventoryCreated) {
    this.x = coords.x
    this.y = coords.y
    this.class = name
    this.img = img
    this.doIt = cando
    this.inventory = inventory
    this.maxWeight = maxWeight
    this.allWeight = allWeight
    this.warning = warning
    this.pickItem = pickItem
    this.inventoryCreated = inventoryCreated
  }
  canMuve(event, state) {
    if (this.doIt.walk) {
      switch (event.keyCode) {
        case 40:
          return {
            x: this.x + 1,
            y: this.y,
            classthis: this.class,
            classTer: state.terran[this.x + 1][this.y].cssclass
          }
        case 38:
          return {
            x: this.x - 1,
            y: this.y,
            classthis: this.class,
            classTer: state.terran[this.x - 1][this.y].cssclass
          }
        case 39:
          return {
            x: this.x,
            y: this.y + 1,
            classthis: this.class,
            classTer: state.terran[this.x][this.y + 1].cssclass
          }
        case 37:
          return {
            x: this.x,
            y: this.y - 1,
            classthis: this.class,
            classTer: state.terran[this.x][this.y - 1].cssclass
          }
        case 13:
          if (this.doIt.getItems && state.terran[this.x][this.y].pickItem.pick && this.allWeight + state.terran[this.x][this.y].weight <= this.maxWeight) {
            return {
              x: this.x,
              y: this.y,
              classthis: this.class,
              classTer: state.terran[this.x][this.y].cssclass,
              invX: this.findEmptyPlace(state.hero[this.class].inventory).x,
              invY: this.findEmptyPlace(state.hero[this.class].inventory).y,
              event: true,
              warning: false,
              allWeight: this.countItems(state.terran[this.x][this.y].weight)
            }
          } else {
            return {
              x: this.x,
              y: this.y,
              classthis: this.class,
              classTer: ' ',
              warning: true
            }
          }
      }
    }
  }
  findEmptyPlace(inventory) {
    for (let x = 0; x < inventory.length; x++) {
      for (let y = 0; y < inventory[x].length; y++) {
        if (inventory[x][y].cssclass === '') {
          return { x: x, y: y }
        }
      }
    }
  }
  dellFromInventory(state, item) {
    if (this.x === state.hero.chest.x && this.y === state.hero.chest.y) {
      item.whoItIsPicked = this.class
      return {
        item: item,
        teranClass: state.hero.chest.cssclass,
        coords: this.findEmptyPlace(state.hero.chest.inventory),
        whoItIsPicked: this.class,
        newItem: {
          id: '',
          name: '',
          cssclass: '',
          weight: 0,
          info: ''
        },
        allWeight: this.minuseWeightFromAllWeight(item.weight)
      }
    }
    if (state.terran[this.x][this.y].cssclass !== 'chest') {
      return {
        item: item,
        teranClass: false,
        whoItIsPicked: this.class,
        newItem: {
          id: '',
          name: '',
          cssclass: '',
          weight: 0,
          info: ''
        },
        allWeight: this.minuseWeightFromAllWeight(item.weight)
      }
    }
    if (state.terran[this.x][this.y].cssclass === 'chest') {
      return {
        item: item,
        teranClass: state.terran[this.x][this.y].cssclass,
        coords: this.findEmptyPlace(state.terran[this.x][this.y].inventory),
        chest: state.terran[this.x][this.y],
        newItem: {
          id: '',
          name: '',
          cssclass: '',
          weight: 0,
          info: ''
        },
        allWeight: this.minuseWeightFromAllWeight(item.weight)
      }
    }
  }
  countItems(vall) {
    let allWeight = this.allWeight
    allWeight += vall
    return allWeight
  }
  minuseWeightFromAllWeight(vall) {
    let allWeight = this.allWeight
    allWeight -= vall
    return allWeight
  }
}
