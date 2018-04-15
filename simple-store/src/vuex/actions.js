//actions.js
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

export default {
  changeMessage ({ commit }, msg) {
    commit(CHANGE_MSG, msg)
  },
  incrementCounter ({ commit }) {
    commit(INCREMENT_COUNTER)
  }
}
