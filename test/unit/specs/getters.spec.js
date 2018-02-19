import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import globalStore from '../../../src/store'
globalStore.state = () => ({ terran: [['0', '1'], ['2', '3']] })
const store = new Vuex.Store(globalStore)
describe('getter', () => {
  it('Should  return array with classes', () => {
    expect(store.getters.mapGetter).toEqual([
      [{ id: 'x=0-y=0', class: 'tree' }, { id: 'x=0-y=1', class: 'wall' }],
      [{ id: 'x=1-y=0', class: 'monster' }, { id: 'x=1-y=1', class: 'hero' }]
    ])
  })
})
