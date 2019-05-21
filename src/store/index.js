import Vue from 'vue'
import Vuex from 'vuex'

import position from './module/position'
import user from "./module/user";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    position,
    user
  }
})
