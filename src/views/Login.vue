<template>
	<div class="login">
		<Login/>
	</div>
</template>

<script>

import Login from '@/components/layouts/Login.vue';

export default {
	name: 'login',
	props: {
		pageName: 'Login',
	},
	components: {
		Login,
	},
};
</script>
