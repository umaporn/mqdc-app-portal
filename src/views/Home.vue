<template>
	<div class="home">
		<Home />
	</div>
</template>

<script>

import { mapGetters } from 'vuex';
import Home from '@/components/Layouts/Home.vue';

export default {
	name: 'home',
	components: {
		Home,
	},
	computed: {
		...mapGetters({
			messages: 'home/messages',
		}),
	},
	mounted() {
		this.$store.dispatch('home/getMessages');
	},
};
</script>
