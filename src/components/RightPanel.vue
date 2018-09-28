<template>
	<div id="right-panel" class="right-panel col">
		<HeaderMenu/>
		<div class="breadcrumbs">
			<div class="col-sm-4">
				<div class="page-header float-left">
					<div class="page-title">
						<h1>{{ pageName }}</h1>
					</div>
				</div>
			</div>
			<div class="col-sm-8">
				<div class="page-header float-right">
					<div class="page-title">
						<ol class="breadcrumb text-right">
							<li class="active">{{ pageName }}</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
		<div class="content mt-3">

		</div>
	</div>
</template>

<script>

	import HeaderMenu from '@/components/HeaderMenu.vue';

	export default {
		name:       'RightPanel',
		props:      {
			pageName: String,
		},
		components: {
			HeaderMenu,
		},
	};
</script>