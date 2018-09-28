<template>
	<div class="col-12">
		<div class="card">
			<div class="card-header">
				<strong class="card-title">{{ pageContent }}</strong>
			</div>
			<div class="card-body">
				Home
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:  'ListLayout',
		props: {
			pageContent: String,
		},
	};
</script>