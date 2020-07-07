<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>



<script>
  export default {
    watch: {
      $route() {

        if (this.$route.meta.title) {
          document.title = this.$route.meta.title;
        } else {
          document.title = '百度音乐'
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  #app {
    background-color: #f9f9f9;
  }
</style>