<template>
	<div class="home">
		<LeftPanel/>
		<div id="right-panel" class="right-panel col">
			<HeaderMenu/>
			<div class="breadcrumbs">
				<div class="col-sm-4">
					<div class="page-header float-left">
						<div class="page-title">
							<h1>Shop List</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<ShopList/>
			</div>
		</div>
	</div>
</template>

<script>

import LeftPanel from '@/components/LeftPanel.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import ShopList from '@/components/Layouts/Shop/ShopList.vue';

export default {
	name: 'shop-list',
	components: {
		LeftPanel,
		HeaderMenu,
		ShopList,
	},
};
</script>
