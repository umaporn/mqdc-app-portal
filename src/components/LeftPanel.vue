<template>
	<aside id="left-panel" class="left-panel">
		<nav class="navbar navbar-expand-sm navbar-default">

			<div class="navbar-header">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fa fa-bars"></i>
				</button>
				<a class="navbar-brand" href="/"><img src="assets/images/logo-highlight.png" alt="Logo"></a>
			</div>

			<div id="main-menu" class="main-menu collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<h3 class="menu-title">Shop Management</h3>
					<li class="menu-item-has-children dropdown">
						<router-link to="/shop" tag="a">
							<i class="menu-icon fa fa-shopping-bag"></i>Shop
						</router-link>
					</li>
					<h3 class="menu-title">User Management</h3>
					<li class="menu-item-has-children dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="menu-icon fa fa-user-circle"></i>User
						</a>
						<ul class="sub-menu children dropdown-menu">
							<li><i class="menu-icon fa fa-sign-in"></i><a href="#">Login</a></li>
							<li><i class="menu-icon fa fa-sign-in"></i><a href="#">Register</a></li>
							<li><i class="menu-icon fa fa-paper-plane"></i><a href="#">Forget Pass</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</aside>
</template>

<script>
	export default {
		name: 'LeftMenu',
	};
</script>
