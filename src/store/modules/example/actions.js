export default {
  doSomethings({ commit }, params) {
    commit('setSomethings', params)
    console.log('doSomethings')
  }
}
