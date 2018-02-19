import { mapItems, findhero } from '../maps/localMap'
export default function() {
  return {
    hero: findhero,
    terran: mapItems,
    modalWindow: {
      opening: false,
      info: ''
    },
    winner: {
      win: false,
      winner: ''
    }
  }
}
