import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {},
  relates: [],
  count: 1
}

const actions = {
  fetchAlbumAction (context, id) {
    context.commit('fetchAlbum', id)
  },
  fetchRelatesAction (context, id) {
    context.commit('fetchRelates', id)
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const mutations = {
  async fetchAlbum (state, n) {
    const json = await axios.get('http://cdn.100uu.tv/albums/927/?format=json&platform=mobile')
    state.data = json.data
  },
  async fetchRelates (state, n) {
    const json = await axios.get('http://47.93.83.7:8000/related/927/?format=json')
    state.relates = json.data.data
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
