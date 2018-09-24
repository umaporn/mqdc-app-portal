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
        <SubContentAddShop v-bind:pageContent="pageName"/>
      </div>
    </div>
  </div>
</template>

<script>
	// @ is an alias to /src
	import LeftPanel from '@/components/LeftPanel.vue';
	import HeaderMenu from '@/components/HeaderMenu.vue';
	import SubContentAddShop from '@/components/SubContent/Shop/AddLayout.vue';

	export default {
    name: 'shop-add',
		data(){
			return {
				pageName: 'Create New Shop',
			};
		},
    components: {
      LeftPanel,
      HeaderMenu,
      SubContentAddShop
    }
  }
</script>
