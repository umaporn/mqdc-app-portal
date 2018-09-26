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
    methods: {
    },
  }
</script>


<style>
#app {
  color: #2c3e50;
}
</style>
