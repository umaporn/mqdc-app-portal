<template>
  <div class="home">
    <LeftPanel/>
    <div id="right-panel" class="right-panel col">
      <HeaderMenu/>
      <div class="breadcrumbs">
        <div class="col-sm-4">
          <div class="page-header float-left">
            <div class="page-title">
              <h1>{{ pageName }}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="content mt-3">
        <SubContentShop v-bind:pageContent="pageName"/>
      </div>
    </div>
  </div>
</template>

<script>
	// @ is an alias to /src
	import LeftPanel from '@/components/LeftPanel.vue';
	import HeaderMenu from '@/components/HeaderMenu.vue';
	import SubContentShop from '@/components/SubContent/Shop/ListLayout.vue';

	export default {
    name: 'shop',
		data(){
			return {
				pageName: 'List Shop'
			};
		},
    components: {
      LeftPanel,
      HeaderMenu,
      SubContentShop
    },
  }
</script>
