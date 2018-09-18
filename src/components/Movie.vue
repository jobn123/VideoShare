<template>
  <div class="movie">
  </div>
</template>

<script>

export default {
  name: 'Movie',
  props: ['edpoises'],
  data () {
    return {
      msg: 'Movie Page'
    }
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
