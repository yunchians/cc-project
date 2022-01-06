export default {
  setFBInfo({ commit }, params) {
    commit('setFBInfo', params)
    console.log('setFBInfo', params)
  }
}
