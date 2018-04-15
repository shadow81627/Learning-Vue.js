//getters.js
export default {
  getMessage(state) {
    return (state.msg).toUpperCase()
  },
  getCounter(state) {
    return (state.counter)
  }
}
