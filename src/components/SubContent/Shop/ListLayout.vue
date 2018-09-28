<template>
	<div class="col-12">
		<div class="card">
			<div class="card-header">
				<strong class="card-title">{{ pageContent }}</strong>
				<router-link tag="button" to="/shop-add" class="btn btn-primary float-right">
					<i class="fa fa-plus"></i>&nbsp; Add Shop
				</router-link>
			</div>
			<div class="card-body">
				List Shop
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:  'ListLayout',
	};
</script>
