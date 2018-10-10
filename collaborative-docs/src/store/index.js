import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    folders: {name: 'Documents', type: 'dir', children: null}
  },

  mutations: mutations,

  actions: actions,
})

export default store
