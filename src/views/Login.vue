<template>
	<div class="login bg-info">
		<div class="sufee-login d-flex align-content-center flex-wrap">
			<div class="container">
				<div class="login-content">
					<h3 class="login-logo text-white">
						MQDC App Portal
					</h3>
					<div class="login-form">
						<form @submit.prevent="login" class="login">
							<div class="form-group">
								<label>Email address</label>
								<input type="email" v-model="email" class="form-control" name="email" required placeholder="Email">
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" v-model="password" class="form-control" required name="password" placeholder="Password">
							</div>
							<div class="checkbox">
								<label class="align-content-center">
									<a href="#" class="text-primary">Forgotten Password?</a>
								</label>
							</div>
							<button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
							<div class="register-link m-t-15 text-center">
								<p>Don't have account ? <a href="#"> Register Here</a></p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@import "../../public/assets/css/normalize.css";
	@import "../../public/assets/css/bootstrap.min.css";
	@import "../../public/assets/css/font-awesome.min.css";
	@import "../../public/assets/css/themify-icons.css";
	@import "../../public/assets/css/flag-icon.min.css";
	@import "../../public/assets/scss/style.css";
</style>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		login() {
			const { email } = this.email;
			const { password } = this.password;
			this.$store.dispatch('login/login', { email, password })
				.then(() => this.$router.push('/'))
				.catch(error => console.log(error));
		},
	},
};
</script>
