import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {},
  count: 1
}

const actions = {
  fetchAlbumAction (context, id) {
    context.commit('fetchAlbum', id)
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const mutations = {
  async fetchAlbum (state, n) {
    const json = await axios.get('https://api.myjson.com/bins/1esyuk')
    state.data = json.data
  },
  reduce (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
