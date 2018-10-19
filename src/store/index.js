import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {},
  relates: [],
  edpoises: [],
  shorts: [],
  count: 1
}

const actions = {
  fetchShortAction (context, id, token) {
    context.commit('fetchShorts', id, token)
  },
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
  async fetchShorts (state, id, token) {
    let url = `https://api.vimeo.com/me/albums/5413270/videos?page=4&per_page=15&sort=alphabetical`
    const json = await axios.get(url, {
      headers: {'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer 306fd2ec2aac624b874580e2ead9f1e1`}
    })
    state.shorts = json.data.data
    state.relates = json.data.data
  },
  async fetchAlbum (state, id) {
    const json = await axios.get(`http://video.chinesetvall.com/albums/${id}/?format=json&platform=mobile`)
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
    const json = await axios.get(`http://video.chinesetvall.com/related/${id}`)
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
