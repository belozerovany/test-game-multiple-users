import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import globalStore from '../../../src/store'
const store = new Vuex.Store(globalStore)
describe('heroDraw', () => {
  store.dispatch('heroDraw')
  it('Should  return true if hero x,y === terran x,y', () => {
    expect(store.state.terran[store.state.hero.x][store.state.hero.y] === '3').toBe(true)
  })
})
describe('hero', () => {
  it('Should  return new hero coords', () => {
    store.dispatch('heroMove', { x: 10, y: 10 })
    expect(store.state.hero).toEqual({ x: 10, y: 10 })
  })
})
describe('heroDelete', () => {
  it('Should  return empty field', () => {
    store.dispatch('heroDelete')
    expect(store.state.terran[store.state.hero.x][store.state.hero.x]).toEqual(' ')
  })
})
describe('store.state', () => {
  it("Should  exist  store.state.terran 'toBeDefined'", () => {
    expect(store.state.terran).toEqual(jasmine.any(Array))
  })
})
