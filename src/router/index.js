import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '../components/MainMenu'
import GameScreen from '../components/GameScreen'
import SaveScreen from '../components/SaveScreen'
import LoadScreen from '../components/LoadScreen'
import DevelopersScreen from '../components/DevelopersScreen'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/game',
      name: 'GameScreen',
      component: GameScreen
    },
    {
      path: '/save',
      name: 'SaveScreen',
      component: SaveScreen
    },
    {
      path: '/load',
      name: 'LoadScreen',
      component: LoadScreen
    },
    {
      path: '/developers',
      name: 'DevelopersScreen',
      component: DevelopersScreen
    }
  ]
})
