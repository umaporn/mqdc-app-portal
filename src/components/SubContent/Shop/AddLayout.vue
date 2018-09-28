<template id="AddLayout">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<strong>{{pageContent}}</strong>
			</div>
			<div class="card-body card-block">
				<form action="" method="post" id="createShopSubmissionForm" enctype="multipart/form-data" class="form-horizontal">
					<div class="default-tab">
						<nav>
							<div class="nav nav-tabs" id="nav-tab" role="tablist">
								<a class="nav-item nav-link" :class="{ 'active': index === 0 }" v-for="(value, key, index) in languages" v-bind:key="index" :id="'nav-' + value + '-tab'" data-toggle="tab" :href="'#nav-'+value" role="tab" :aria-controls="'nav-'+value" aria-selected="true">{{value}}</a>
							</div>
						</nav>
						<div style="margin-top:20px" class="tab-content pl-3 pt-2" id="nav-tabContent">
							<div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(value, key, index) in languages" v-bind:key="index" :id="'nav-'+value" role="tabpanel" :aria-labelledby="'nav-'+value+'-tab'">
								<CreateShopForm v-bind:language="value" />
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<button type="submit" class="btn btn-primary btn-sm">
					<i class="fa fa-dot-circle-o"></i> Submit
				</button>
				<button type="reset" class="btn btn-danger btn-sm">
					<i class="fa fa-ban"></i> Reset
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import CreateShopForm from '@/components/SubContent/Shop/CreateShopForm.vue';

	export default {
		name: 'AddLayout',
		data(){
			return {
				languages: {
					languages_thai:    'TH',
					languages_english: 'EN',
				},
			};
		},
		props:      {
			pageContent: String,
		},
		components: {
			CreateShopForm,
		},
	};
</script>