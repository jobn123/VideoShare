<template>
  <div class="movie">
    <div>title</div>
  </div>
</template>

<script>

export default {
  name: 'Short',
  props: ['edpoises', 'desc'],
  data () {
    return {
      msg: 'Movie Page'
    }
  },
  created () {
    debugger
  },
  watch: {
    edpoises (a, b) {
      let url = this.edpoises.download[0].link
      this.$parent.setUrl(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.movie {
  margin-top: 16px
}
</style>
