import { Item, Hero } from '../classes/itemCreator'
import { GameSmartItem } from '../classes/GameSmartItem'
import { Quest } from '../classes/Quest'
export const maps = {
  location01: [
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', ' ', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ' ', '1', ' ', ' ', ' ', '0', ' ', '1'],
    ['1', ' ', ' ', ' ', '5', ' ', ' ', ' ', '5', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', '4', '1', ' ', '4', ' ', ' ', '1', '1', '1', '0', '0', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
    ['1', ' ', '0', ' ', '2', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '1'],
    ['1', ' ', '0', ' ', ' ', '4', '0', ' ', ' ', '0', ' ', '0', ' ', '1', '1', '1', '1', '1', '1', '1'],
    ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', '2', ' ', '0', ' ', ' ', '5', ' ', ' ', ' ', '6', '1'],
    ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '2', ' ', '6', '1'],
    ['1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', ' ', '0', ' ', ' ', '2', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', '0', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', '6', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '1', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '2', '1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', ' ', ' ', ' ', '1'],
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
  ]
}

export const drowingBox = obj => {
  let newObj = []
  for (let x = 0; x < obj.x; x++) {
    newObj.push([])
  }
  newObj.map((item, i) => {
    for (let y = 0; y < obj.y; y++) {
      item.push({
        id: ``,
        name: '',
        cssclass: '',
        weight: 0,
        info: ''
      })
    }
  })
  return newObj
}

export const items = {
  ' ': coords => new Item(coords, ' ', ' ', ' ', 0, ' ', { walk: true }, { pick: false }),
  '0': coords => new Item(coords, '0', 'tree', 'tree', 0, 'tree', { walk: true }, { pick: false }),
  '1': coords => new Item(coords, '1', 'wall', 'wall', 0, 'wall', { walk: false }, { pick: false }),
  '2': coords => new Item(coords, '2', 'monster', 'monster', 0, 'monster', { walk: false }, { pick: false }),
  '4': coords => new Item(coords, '4', 'diamond', 'diamond', 50, 'They are known particularly for their use in jewelry, such as rings or necklaces', { walk: true }, { pick: true }),
  '5': coords => new Item(coords, '5', 'gold', 'gold', 4, 'Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber', { walk: true }, { pick: true }),
  '6': coords => new Item(coords, '6', 'food', 'food', 1, 'You need only to view the movie Super Size Me to understand how foods impact the body', { walk: true }, { pick: true })
}
export const mapItems = maps.location01.map((row, x) =>
  row.map((val, y) => {
    return items[val]({ x: x, y: y })
  })
)
const allsmartHeroes = {
  H: coords =>
    new Hero(
      { x: 2, y: 1 },
      'H',
      'hero',
      'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif',
      {
        walk: true,
        getItems: true
      },
      drowingBox({ x: 5, y: 5 }),
      60,
      0,
      false,
      true,
      true
    ),
  G: coords =>
    new Hero(
      { x: 5, y: 5 },
      'G',
      'gnome',
      'http://i.giphy.com/xT4uQpepzMPf9oaBWg.gif',
      {
        walk: true,
        getItems: true
      },
      drowingBox({ x: 4, y: 4 }),
      100,
      0,
      false,
      true,
      true
    ),
  S: coords =>
    new GameSmartItem(
      { x: 1, y: 1 },
      'S',
      'chest',
      'https://i.pinimg.com/736x/b4/c0/f4/b4c0f4c875b7186507479f4368f2276b.jpg',
      {
        walk: false,
        getItems: false
      },
      drowingBox({ x: 8, y: 5 }),
      100,
      0,
      false,
      false,
      false,
      false // opening window
    ),
  C: coords =>
    new Hero(
      { x: 6, y: 6 },
      'C',
      'cat',
      'https://media.giphy.com/media/nQbXUwMsnUt9K/giphy.gif',
      {
        walk: true,
        getItems: false
      },
      drowingBox({ x: 2, y: 2 }),
      10,
      0,
      false,
      false,
      false
    ),
  T: coords =>
    new Hero(
      { x: 18, y: 9 },
      'T',
      'treasure',
      'https://www.chitalnya.ru/upload/208/96353343315422.gif',
      {
        walk: false,
        getItems: false
      },
      false,
      10,
      0,
      false,
      false,
      false
    ),
  g: coords =>
    new Quest(
      {
        // 0: { mess: '', links: [1] },
        0: {
          mess: 'Hello my name is Gnome. A you ready play with me?',
          links: 1
        },
        1: {
          badAnsver: 4,
          ansver: 3,
          mess: 'Can you bring me 3 food? And i will pass you to the treasure',
          links: 4
        },
        3: { mess: 'Ok you bring me all items you can go' },
        4: {
          mess: 'I ask you for 3 food but you bring me',
          badAnsver: 4,
          ansver: 3,
          links: 3
        },
        5: { mess: 'I ask you for bring food, but you have nothing', links: [3, 4, 5] },
        food: 0,
        start: 0
      },
      { x: 18, y: 13 },
      'g',
      'gnomeQuest',
      'http://3.bp.blogspot.com/-OgbmYzOUhnY/UYfrEjPnriI/AAAAAAAAAr8/lbOlb5AgBIc/s1600/AnimatedLeprechaunDancing.gif',
      {
        walk: false,
        getItems: false,
        speak: true
      },
      drowingBox({ x: 5, y: 5 }),
      10,
      0,
      false,
      false,
      false,
      false
    ),
  c: coords =>
    new Quest(
      {
        // done: '', // 'You are sttarting', // each quest must have!
        // name: '', // 'Cheshire Cat', // each quest must have!
        // class: '', // 'enigma', // each quest must have!
        // start: 0, // each quest must have!
        // badAnsver: '',
        // getPrize: false,
        // classPrize: '', // 'enigma-key',
        0: {
          mess: 'Hello. A you ready play with me in the enigma?',
          options: ['yes', 'no'],
          links: 1,
          badAnsver: 'no',
          ansver: 'yes'
        },
        1: {
          mess: '№1 What is found over your head but under your hat?',
          options: ['Hair', 'Calvity', 'Flea'],
          links: 2,
          badAnsver: 4,
          ansver: 'Hair'
        },
        2: {
          mess: '№2 I am round like an apple Flat as a chip I have eyes But I can’t see one bit',
          options: ['Badge', 'Round battery', 'Button'],
          links: 3,
          badAnsver: 4,
          ansver: 'Button'
        },
        3: {
          mess: " №3 What's black when you get it, red when you use it, and white when you're all through with it",
          options: ['Stone', 'Charcoal', 'Iron'],
          links: 5,
          badAnsver: 4,
          ansver: 'Charcoal'
        },
        4: {
          mess: 'This is not the right answer'
        },
        5: {
          mess: 'You win! Now i will give you key',
          prize: '*'
        },
        food: 0,
        start: 0
      },
      { x: 14, y: 1 },
      'c',
      'catQuest',
      'http://www.gifmania.ru/Animated-Gifs-Walt-Disney/Animations-Disney-Movies/Images-Alice-in-Wonderland/Cheshire-Cat/Cheshire-Cat-86017.gif',
      {
        walk: false,
        getItems: false,
        speak: true
      },
      drowingBox({ x: 5, y: 5 }),
      10, // canput
      0, // allweight
      false, // warning
      false, // pickItem
      false // inventoryCreated
    )
}

export const findhero = {
  hero: allsmartHeroes['H']({ x: 4, y: 1 }),
  gnome: allsmartHeroes['G']({ x: 5, y: 5 }),
  chest: allsmartHeroes['S']({ x: 1, y: 1 }),
  // cat: allsmartHeroes['C']({ x: 10, y: 10 }),
  treasure: allsmartHeroes['T']({ x: 18, y: 9 }),
  gnomeQuest: allsmartHeroes['g']({ x: 18, y: 13 }),
  catQuest: allsmartHeroes['c']({ x: 14, y: 1 })
}
// const findingSmartItems = allHero => {
//   let items = []
//   for (let key in allHero) {
//     if (!allHero[key].doIt.walk) {
//       items.push(allHero[key])
//     }
//   }
//   console.log(items)
//   return items
// }
// export const smartItems = findingSmartItems(findhero)
