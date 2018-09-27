<template>
	<div>
		<div class="col col-md-6">
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'name'+language" class=" form-control-label">Shop Name</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'name'+language" :name="'name'+language" :placeholder="'Shop Name '+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'name'+language" class=" form-control-label">Shop Description</label>
				</div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'description'+language" :name="'description'+language" :placeholder="'Shop Description '+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Open Date'+language" class=" form-control-label">Open Date</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'openDate'+language" :name="'openDate'+language" :placeholder="'Open Date '+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Open Time'+language" class=" form-control-label">Open Time</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'openTime'+language" :name="'openTime'+language" :placeholder="'Open Time '+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Close Time'+language" class=" form-control-label">Close Time</label>
				</div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'closeTime'+language" :name="'closeTime'+language" :placeholder="'Close Time '+language" class="form-control">
				</div>
			</div>
		</div>
		<div class="col col-md-6">
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Floor'+language" class=" form-control-label">Floor</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'Floor'+language" :name="'Floor'+language" :placeholder="'Floor'+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Zone'+language" class=" form-control-label">Zone</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'Zone'+language" :name="'Zone'+language" :placeholder="'Zone'+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'Location'+language" class=" form-control-label">Location</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'Location'+language" :name="'Location'+language" :placeholder="'Location'+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'contactName'+language" class=" form-control-label">Contact Name</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'contactName'+language" :name="'contactName'+language" :placeholder="'Contact Name'+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'contactMobile'+language" class=" form-control-label">Contact Mobile</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'contactMobile'+language" :name="'contactMobile'+language" :placeholder="'Contact Mobile'+language" class="form-control">
				</div>
			</div>
			<div class="row form-group">
				<div class="col col-md-3"><label :for="'contactEmail'+language" class=" form-control-label">Contact Email</label></div>
				<div class="col-12 col-md-9">
					<input type="text" :id="'contactEmail'+language" :name="'contactEmail'+language" :placeholder="'Contact Email'+language" class="form-control">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name:  'create-shop-form',
		props: {
			language: String,
		},

	};
</script>
