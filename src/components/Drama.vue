<template>
  <div class="drama">
    <div class="c_album">
      <span class="c_album_text">选集</span>
      <span class="c_album_count">共{{ desc.eps }}集</span>
    </div>
    <ul>
    </ul>
    <div class="album_desc">
      <div class="album_desc_director">
        导演：<span class="desc_190">{{ desc.director }}</span>
      </div>
      <div class="album_desc_actor">
        主演：<span class="desc_190">{{ desc.cast1 }} {{ desc.cast2 }} {{ desc.cast3 }} {{ desc.cast4 }}</span>
      </div>
      <div class="album_desc_jj">
        简介：<span class="desc_190">{{ desc.description }}</span>
      </div>
    </div>
    <!-- <div class="desc_arrow"></div> -->
  </div>
</template>

<script>

export default {
  name: 'Drama',
  props: ['desc', 'relates'],
  data () {
    return {
      msg: 'Drama Page'
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
.album_desc {
  width: 88.8%;
  margin: 20px auto 10px auto;
  font-size: 13px;
  height: 114px;
  overflow-y: hidden;
  color: #666;
}
.desc_190 {
  color: rgb(190, 190, 190)
}
.desc_arrow {
  width: 26px;
  height: 26px;
  background: url('../assets/arrowdoen.png');
  background-repeat: no-repeat;
  background-size: 16px 4px;
}
</style>
