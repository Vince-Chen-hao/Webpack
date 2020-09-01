<style lang="stylus">
  
</style>

<template>
  <div id="app">
    <header>
      <router-link to='/home'>Home</router-link>
      <router-link to='/xxx'>XXX</router-link>
      <headerside></headerside>
    </header>
    <router-view></router-view>

  </div>
</template>

<script lang="ts">
  import headerside from './components/header.vue'

  export default {
    components: {
    headerside,
  },
    data() {
      return {
        
      }
    }
  }
</script>