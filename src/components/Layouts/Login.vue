<template>
	<div class="sufee-login d-flex align-content-center flex-wrap">
		<div class="container">
			<div class="login-content">
				<div class="login-logo">
					<a href="index.html">
						<img class="align-content" src="assets/images/logo-highlight.png" alt="">
					</a>
				</div>
				<div  class="login-form">
					<div v-if="errorText" class="sufee-alert alert with-close alert-danger alert-dismissible fade show">
						<span class="badge badge-pill badge-danger">Error</span>
							{{ errorText }}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form id="submit-login" @submit.prevent="loginSubmission">
						<div class="form-group">
							<label>Email address</label>
							<input type="email" v-model="email" class="form-control" placeholder="Email">
						</div>
						<div class="form-group">
							<label>Password</label>
							<input type="password" v-model="password" class="form-control" placeholder="Password">
						</div>
						<div class="checkbox">
							<label>
									<input type="checkbox"> Remember Me
							</label>
							<label class="pull-right">
									<a href="#">Forgotten Password?</a>
							</label>
						</div>
						<button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
						<div class="register-link m-t-15 text-center">
							<p>Don't have account ? <a href="#"> Sign Up Here</a></p>
						</div>
					</form>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

import LeftPanel from '@/components/LeftPanel.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
	name: 'Login',
	components: {
		LeftPanel,
		HeaderMenu,
	},
	data() {
		return {
			email: '',
			password: '',
			errorText: '',
		};
	},
	methods: {
		loginSubmission() {
			const email = (this.email !== '') ? this.email : process.env.VUE_APP_API_LOGIN_EMAIL;
			const password = (this.password !== '') ? this.password : process.env.VUE_APP_API_LOGIN_PASSWORD;
			const user = { email, password };

			this.$store.dispatch('login/login', user)
				.then(() => {
					this.$router.push('/');
				})
				.catch((error) => {
					if (error.response) {
						this.errorText = error.response.data.message;
					}
				});
		},
	},
};
</script>
