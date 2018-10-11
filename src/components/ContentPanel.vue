<template>
	<ListLayout v-bind:pageContent="pageContent"/>
</template>

<script>

import ListLayout from '@/components/SubContent/Shop/ListLayout.vue';

export default {
	name: 'contentPanel',
	props: {
		pageContent: String,
	},
	components: {
		ListLayout,
	},
};
</script>
