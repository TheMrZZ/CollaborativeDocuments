import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    folders: {name: 'Documents', type: 'dir', childrens: null}
  },

  mutations: mutations
})

export default store
