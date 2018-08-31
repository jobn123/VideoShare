<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <video src="http://www.w3school.com.cn/i/movie.ogg" autoplay controls="controls"></video>
    {{data.name}}
  </div>
</template>

<script>
import store from '@/store/index'

import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState({
    data: state => state.data,
  }),
  methods: {
    ...mapMutations(['fetchAlbum', 'reduce']),
    ...mapActions(['fetchAlbumAction', 'reduceAction'])
  },
  store,
  created () {
    let { id } = this.$route.query
    console.log('-----vid----' + id)
    this.fetchAlbumAction(id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
video {
  width: 100%
}
</style>
