<template>
  <div class="variety">
    <div class="c_album">
      <span class="c_album_text">选集</span>
      <span class="c_album_count">共{{ desc.eps }}集</span>
    </div>
    <ul class="album_v_eps">
      <li v-for="item in edpoises" v-bind:key="item.id" @click="download">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Variety',
  props: ['desc', 'relates', 'edpoises'],
  methods: {
    download () {
      this.$parent.downlaodApp()
    }
  },
  watch: {
    edpoises () {
      console.log(this.edpoises.length)
      // this.$refs.li.scrollLeft = 500
      // document.getElementById('ss').scrollLeft = 500
      let edpoises = JSON.parse(JSON.stringify(this.edpoises))
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
      let url = edpoises[0].download[0].link
      this.$parent.setUrl(url)
    }
  },
  data () {
    return {
      msg: 'Variety Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.c_album_text {
  float: left
}
.c_album_count {
  float: right
}
.album_v_eps {
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
  // margin-left: 6px;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar { width: 0 !important };
  li {
    display: inline-block;
    width: 166px;
    height: 66px;
    padding: 6px 8px;
    // line-height: 40px;
    // text-align: center;
    background: #F0F0F0;
    font-size: 13px;
    color: #666666;
    margin-left: 10px;
    white-space: initial;
  }
}
</style>
