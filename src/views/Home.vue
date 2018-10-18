<template>
	<div class="home">
		<Home :pageName="pageName"/>
	</div>
</template>

<script>

import Home from '@/components/Layouts/Home.vue';
import { mapState } from 'vuex';

export default {
	name: 'home',
	computed: mapState({
		pageName: state => state.home.pageName,
	}),
	components: {
		Home,
	},
};
</script>
