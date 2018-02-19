import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import globalStore from '../../../src/store'
const store = new Vuex.Store(globalStore)
describe('store', () => {
  it("Should  exist  store use 'toBeDefined'", () => {
    expect(store).toBeDefined()
  })
})
describe('store', () => {
  it("Should  exist  state in store use 'toBeDefined'", () => {
    expect(store.state).toBeDefined()
  })
})
describe('store', () => {
  it("Should  exist getters in store use 'toBeDefined'", () => {
    expect(store.getters).toBeDefined()
  })
})
