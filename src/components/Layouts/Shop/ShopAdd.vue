<template>
  <div class="card">
    <div class="card-header">
      <a class="text-dark" href="/shop">Shop List</a> / Shop Creation Form
    </div>
    <div class="card-body">
      <div class="col col-md-6">
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'name'" class=" form-control-label">Shop Name</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'name'"
              :name="'name'"
              :placeholder="'Shop Name'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'name'" class=" form-control-label">Shop Description</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'description'"
              :name="'description'"
              :placeholder="'Shop Description'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Open Date'" class=" form-control-label">Open Date</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'openDate'"
              :name="'openDate'"
              :placeholder="'Open Date'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Open Time'" class=" form-control-label">Open Time</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'openTime'"
              :name="'openTime'"
              :placeholder="'Open Time'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Close Time'" class=" form-control-label">Close Time</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'closeTime'"
              :name="'closeTime'"
              :placeholder="'Close Time'"
              class="form-control"
            >
          </div>
        </div>
      </div>
      <div class="col col-md-6">
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Floor'" class=" form-control-label">Floor</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'Floor'"
              :name="'Floor'"
              :placeholder="'Floor'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Zone'" class=" form-control-label">Zone</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'Zone'"
              :name="'Zone'"
              :placeholder="'Zone'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'Location'" class=" form-control-label">Location</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'Location'"
              :name="'Location'"
              :placeholder="'Location'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'contactName'" class=" form-control-label">Contact Name</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'contactName'"
              :name="'contactName'"
              :placeholder="'Contact Name'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'contactMobile'" class=" form-control-label">Contact Mobile</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'contactMobile'"
              :name="'contactMobile'"
              :placeholder="'Contact Mobile'"
              class="form-control"
            >
          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label :for="'contactEmail'" class=" form-control-label">Contact Email</label>
          </div>
          <div class="col-12 col-md-9">
            <input
              type="text"
              :id="'contactEmail'"
              :name="'contactEmail'"
              :placeholder="'Contact Email'"
              class="form-control"
            >
          </div>
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-primary btn-sm">
          <i class="fa fa-paper-plane"></i> Submit
        </button>
        <button type="reset" class="btn btn-danger btn-sm">
          <i class="fa fa-ban"></i> Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'create-shop-form',
	props: {
		language: String,
	},
};
</script>
