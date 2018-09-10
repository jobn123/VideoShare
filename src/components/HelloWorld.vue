<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <nav>{{ data.name }}</nav>
    <video :src="url" autoplay controls="controls"></video>
    <div class="d_download">
      <span class="download_text">更多中国影视剧尽在“华语影视”</span>
      <span class="download_btn" @click="downlaodApp()">立即下载</span>
    </div>
    <!-- {{data.name}} -->
    <router-view :desc="data" :edpoises="edpoises" :active="index"></router-view>
    <div class="album_desc">
      <div class="album_desc_director">
        导演：<span class="desc_190">{{ data.director }}</span>
      </div>
      <div class="album_desc_actor">
        主演：<span class="desc_190">{{ data.cast1 }} {{ data.cast2 }} {{ data.cast3 }} {{ data.cast4 }}</span>
      </div>
      <div class="album_desc_jj">
        简介：<span class="desc_190">{{ data.description }}</span>
      </div>
    </div>
    <div class="rectline"></div>
    <ul class="relates">
      <h2>更多影片推荐</h2>
      <li v-for="item in relates" v-bind:key="item.id" @click="downlaodApp()">
        <img :src="item.landscape_poster_s" alt="loading..." class="relates_img">
        <div class="rtd">
          <p class="rt">{{ item.name }}</p>
          <p class="rd">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'

import store from '@/store/index'

import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index: 0,
      url: ''
    }
  },
  computed: mapState({
    data: state => state.data,
    relates: state => state.relates,
    edpoises: state => state.edpoises
  }),
  watch: {
    data (val) {
      // keywordsMeta
      var keywordsMeta = `<meta data-vue-meta="true" itemprop="keywords" name="keywords" content="${val.description} ,${val.cast1}, ${val.cast2}" />`
      // descriptionMeta
      var descriptionMeta = `<meta data-vue-meta="true" itemprop="description" name="description" content="${val.description}" />`
      // titleMeta
      var titleMeta = `<meta data-vue-meta="true" property="og:title" content="${val.name}" />`
      // imageMeta
      var imageMeta = `<meta data-vue-meta="true" property="og:image" content="${val.landscape_poster_s}" />`
      // keywordsMeta['data-vue-meta'] = true
      // keywordsMeta.itemprop = 'keywords'
      // keywordsMeta.name = 'keywords'
      // keywordsMeta.content = val.description + val.cast1 + val.cast2
      // descriptionMeta
      // var descriptionMeta = document.createElement('meta')
      // descriptionMeta['data-vue-meta'] = true
      // descriptionMeta.itemprop = 'description'
      // descriptionMeta.name = 'description'
      // descriptionMeta.content = val.description
      // titleMeta
      // var titleMeta = document.createElement('meta')
      // titleMeta['data-vue-meta'] = true
      // titleMeta.property = 'og:title'
      // titleMeta.content = val.name
      // imageMeta
      // var imageMeta = document.createElement('meta')
      // imageMeta['data-vue-meta'] = true
      // imageMeta.property = 'og:image'
      // imageMeta.content = val.landscape_poster_s

      // document.getElementsByTagName('head')[0].appendChild(keywordsMeta)
      // document.getElementsByTagName('head')[0].appendChild(descriptionMeta)
      // document.getElementsByTagName('head')[0].appendChild(titleMeta)
      // document.getElementsByTagName('head')[0].appendChild(imageMeta)
      // var a = $('head')[0]
      // a.prepend(keywordsMeta)
      $('head').prepend(imageMeta)
      $('head').prepend(titleMeta)
      $('head').prepend(descriptionMeta)
      $('head').prepend(keywordsMeta)
    }
  },
  methods: {
    ...mapMutations(['fetchAlbum', 'reduce']),
    ...mapActions(['fetchAlbumAction', 'reduceAction', 'fetchRelatesAction']),
    downlaodApp () {
      console.log('-----downlaodApp----')
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isAndroid) {
        return window.open('http://baidu.com')
      } else if (isiOS) {
        return window.open('http://google.com')
      }
    },
    setUrl (url) {
      this.url = url
    }
  },
  store,
  created () {
    let { id, index } = this.$route.query
    this.index = index === undefined ? 0 : parseInt(index)
    console.log('-----vid----' + id)
    this.fetchAlbumAction(id)
    this.fetchRelatesAction(id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
nav {
  background: #2F2D30;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #FFF
}
video {
  width: 100%;
  height: 210px;
}
.d_download {
  width: 100%;
  height: 40px;
  background: rgba(11,191,6,0.12);
  line-height: 40px;
  margin-top: -5px;
}
.download_text {
  display: inline-block;
  font-size: 14px;
  color: #0BBF06;
  margin-left: 28px;
}
.download_btn {
  display: inline-block;
  background: #0BBF06;
  border-radius: 100px;
  width: 78px;
  height: 28px;
  font-size: 13px;
  color: #FFFFFF;
  text-align: center;
  line-height: 28px;
  margin-left: 43px;
}
.rectline {
  width: 100%;
  height: 8px;
  background-color: #F2F2F2;
  margin-top: 10px;
  margin-bottom: 20px
}
.relates {
  width: 88.8%;
  margin: 0 auto;
  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #666666
  }
  li {
    list-style: none;
    height: 90px;
    overflow-y: hidden;
    margin-bottom: 12px;
  }
}
.relates_img {
  widows: 155px;
  height: 90px;
  float: left;
}
.rt {
  font-size: 14px;
  color: #2F2D30;
}
.rd {
  font-size: 12px;
  color: #808080;
}
.rtd {
  height: 100%;
  float: right;
  width: 160px;
}
.album_desc {
  width: 88.8%;
  margin: 0px auto 10px auto;
  font-size: 13px;
  height: 114px;
  overflow-y: hidden;
  color: #666;
}
.desc_190 {
  color: rgb(190, 190, 190)
}
</style>
