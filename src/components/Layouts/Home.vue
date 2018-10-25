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
			<div class="content">
				<p>{{message}}</p>
			</div>
		</div>
	</div>
</template>

<script>

import { mapGetters, mapState } from 'vuex';
import LeftPanel from '@/components/LeftPanel.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
	name: 'home',
	components: {
		LeftPanel,
		HeaderMenu,
	},
	computed: {
		...mapGetters('home', ['getMessage']),
		...mapState('home', ['message']),
	},
	mounted() {
		this.$store.dispatch('home/actionMessage');
	},
};
</script>
