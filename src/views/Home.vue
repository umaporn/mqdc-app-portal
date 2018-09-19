<template>
  <div class="home">
    <LeftMenu/>
	  <HeaderMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/LeftMenu.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'home',
  components: {
	  HeaderMenu,
    LeftMenu
  }
}
</script>
