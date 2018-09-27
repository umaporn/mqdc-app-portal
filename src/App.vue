<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    mounted () {
      let username = 'mqdc-app-portal'
      let password = 'mUU9wJHV'
      this.$store.dispatch('authentication', { username, password })
    },
  }
</script>


<style>
#app {
  color: #2c3e50;
}
</style>
