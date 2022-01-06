import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
// console.log(module.default)
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  // 嚴格模式，禁止直接修改 state
  strict: true
})
