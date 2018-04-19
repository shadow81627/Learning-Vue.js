//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'
import actions from './actions'

Vue.use(Vuex)
const state = {
  msg: 'Hello Vue!',
  counter: 0
}
const mutations = {
  [CHANGE_MSG](state, msg) {
    state.msg = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter ++
  }
}
export default new Vuex.Store({state, mutations, getters, actions})