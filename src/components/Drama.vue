<template>
  <div class="drama">
    <div class="c_album">
      <span class="c_album_text">选集</span>
      <span class="c_album_count">共{{ desc.eps }}集</span>
    </div>
    <ul class="album_eps" ref="li" id="ss">
      <li v-for="(item, index) in edpoises" v-bind:key="item.id" @click="download" v-bind:class="{ active: active === index }">
        {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Drama',
  props: ['desc', 'relates', 'edpoises', 'active'],
  data () {
    return {
      msg: 'Drama Page'
    }
  },
  methods: {
    download () {
      this.$parent.downlaodApp()
    }
  },
  watch: {
    edpoises (a, b) {
      if (b.length > 0) return
      console.log(this.edpoises.length)
      // this.$refs.li.scrollLeft = 500
      // document.getElementById('ss').scrollLeft = 500
      let edpoises = this.edpoises
      edpoises.sort((a, b) => {
        let nameA = a.name.replace(/[^0-9]/ig, '')
        let nameB = b.name.replace(/[^0-9]/ig, '')
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
      let url = edpoises[this.active].download[0].link
      this.$parent.setUrl(url)
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.c_album {
  width: 88.8%;
  margin: 12px auto;
  span {
    display: inline-block;
    font-size: 13px;
    color: #666
  }
  &:after {
    display: block;
    content: '';
    clear: both;
  }
}
.c_album_text {
  float: left
}
.c_album_count {
  float: right
}
.desc_arrow {
  width: 26px;
  height: 26px;
  background: url('../assets/arrowdoen.png');
  background-repeat: no-repeat;
  background-size: 16px 4px;
}
.album_eps {
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
  // margin-left: 6px;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar { width: 0 !important };
  li {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #F0F0F0;
    font-size: 16px;
    color: #666666;
    margin-left: 10px;
  }
  .active {
    color: #0BBF06;
  }
}
</style>
