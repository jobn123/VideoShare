import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {},
  relates: [],
  edpoises: [],
  count: 1
}

const actions = {
  fetchAlbumAction (context, id) {
    context.commit('fetchAlbum', id)
  },
  fetchEdpoiseAction (context, id) {
    context.commit('fetchEdpoises', id)
  },
  fetchRelatesAction (context, id) {
    context.commit('fetchRelates', id)
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const mutations = {
  async fetchAlbum (state, id) {
    const json = await axios.get(`http://cdn.100uu.tv/albums/${id}/?format=json&platform=mobile`)
    state.data = json.data
    // getEdipoise
    const url = json.data.genre_id === 3 ? `https://api.vimeo.com/videos/${json.data.vimeo_id}` : `https://api.vimeo.com/me/albums/${json.data.vimeo_id}/videos?direction=desc&page=1&per_page=100`
    const json2 = await axios.get(url, {
      headers: {'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${json.data.vimeo_token}`}
    })
    state.edpoises = json.data.genre_id === 3 ? json2.data : json2.data.data
  },
  async fetchRelates (state, id) {
    const json = await axios.get(`http://47.93.83.7:8000/related/${id}/?format=json`)
    state.relates = json.data.data
  },
  async fetchEdpoises (state, n) {
    const json = await axios.get('https://api.vimeo.com/me/albums/4585946/videos?direction=desc&page=1&per_page=100', {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${token}`
    })
    state.edpoises = json.data.data
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
