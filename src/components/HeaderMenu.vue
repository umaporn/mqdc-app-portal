<template>
	<header id="header" class="header">
		<div class="header-menu">
			<div class="col-sm-7">
				<a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
					<div class="user-area dropdown float-left">
					<a href="#"> Welcome, {{ userEmail }} </a>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="user-area dropdown float-right">
					<button type="button" class="btn btn-outline-secondary" v-on:click="logout">Logout</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	name: 'HeaderMenu',
	data() {
		return {
			userEmail: localStorage.getItem('userEmail'),
		};
	},
	methods: {
		logout() {
			this.$store.dispatch('login/logout').then(() => {
				this.$router.push('/login');
			});
		},
	},
};
</script>

<style>

</style>
