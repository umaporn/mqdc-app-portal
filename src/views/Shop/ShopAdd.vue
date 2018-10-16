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
			<div class="content">
				<ShopAdd :pageName="pageName"/>
			</div>
		</div>
	</div>
</template>

<script>

import LeftPanel from '@/components/LeftPanel.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import ShopAdd from '@/components/Layouts/Shop/ShopAdd.vue';
import { mapState } from 'vuex';

export default {
	name: 'shop-list',
	computed: mapState({
		pageName: state => state.shop.pageName,
	}),
	props: {
		pageName: String,
	},
	components: {
		LeftPanel,
		HeaderMenu,
		ShopAdd,
	},
};
</script>
