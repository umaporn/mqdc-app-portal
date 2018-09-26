<template>
  <div class="home">
    <LeftPanel/>

    <div id="right-panel" class="right-panel col">
      <HeaderMenu/>
      <div class="breadcrumbs">
        <div class="col-sm-4">
          <div class="page-header float-left">
            <div class="page-title">
              <h1>Home</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="content mt-3">
        <SubContentDashboard :pageContent="pageName"/>
      </div>
    </div>
  </div>
</template>

<script>
	// @ is an alias to /src
	import LeftPanel from '@/components/LeftPanel.vue';
	import HeaderMenu from '@/components/HeaderMenu.vue';
	import SubContentDashboard from '@/components/SubContent/Home/ListLayout.vue';

	export default {
  name: 'home',
	props: {
		pageName: 'Home',
	},
  components: {
    LeftPanel,
    HeaderMenu,
    SubContentDashboard
  },
}
</script>
