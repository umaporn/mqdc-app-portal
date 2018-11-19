<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <a href="/shop">Shop List</a> / Shop Creation Form
      </div>
      <div class="card-body">
        <form id="shop-creation" @submit.prevent="ShopCreation">
          <div class="default-tab">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-en"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                  English
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-th"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                  ไทย
                  </a>
              </div>
            </nav>
            <div class="tab-content pl-3 pt-2" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-en" role="tabpanel" aria-labelledby="nav-en-tab">
                <div class="col col-md-6">
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'nameEN'" class=" form-control-label">Shop Name EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'nameEN'"
                        :name="'nameEN'"
                        :placeholder="'Shop Name EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'descriptionEN'" class=" form-control-label">Shop Description EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'descriptionEN'"
                        :name="'descriptionEN'"
                        :placeholder="'Shop Description EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'openDateEN'" class=" form-control-label">Open Date EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'openDateEN'"
                        :name="'openDateEN'"
                        :placeholder="'Open Date EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'openTimeEN'" class=" form-control-label">Open Time EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'openTimeEN'"
                        :name="'openTimeEN'"
                        :placeholder="'Open Time EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'closetimeEN'" class=" form-control-label">Close Time EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'closeTimeEN'"
                        :name="'closeTimeEN'"
                        :placeholder="'Close Time EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
                <div class="col col-md-6">
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'floorEN'" class=" form-control-label">Floor EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'floorEN'"
                        :name="'floorEN'"
                        :placeholder="'Floor EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'zoneEN'" class=" form-control-label">Zone EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'zoneEN'"
                        :name="'zoneEN'"
                        :placeholder="'Zone EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'locationEN'" class=" form-control-label">Location EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'locationEN'"
                        :name="'locationEN'"
                        :placeholder="'Location EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactNameEN'" class=" form-control-label">Contact Name EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactNameEN'"
                        :name="'contactNameEN'"
                        :placeholder="'Contact Name EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactMobileEN'" class=" form-control-label">Contact Mobile EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactMobileEN'"
                        :name="'contactMobileEN'"
                        :placeholder="'Contact Mobile EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactEmailEN'" class=" form-control-label">Contact Email EN</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactEmailEN'"
                        :name="'contactEmailEN'"
                        :placeholder="'Contact Email EN'"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-th" role="tabpanel" aria-labelledby="nav-th-tab">
                  <div class="col col-md-6">
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'nameTH'" class=" form-control-label">Shop Name TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'nameTH'"
                        :name="'nameTH'"
                        :placeholder="'Shop Name TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'descriptionTH'" class=" form-control-label">Shop Description TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'descriptionTH'"
                        :name="'descriptionTH'"
                        :placeholder="'Shop Description TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'openDateTH'" class=" form-control-label">Open Date TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'openDateTH'"
                        :name="'openDateTH'"
                        :placeholder="'Open Date TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'openTimeTH'" class=" form-control-label">Open Time TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'openTimeTH'"
                        :name="'openTimeTH'"
                        :placeholder="'Open Time TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'closeTimeTH'" class=" form-control-label">Close Time TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'closeTimeTH'"
                        :name="'closeTimeTH'"
                        :placeholder="'Close Time TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
                <div class="col col-md-6">
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'floorTH'" class=" form-control-label">Floor TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'floorTH'"
                        :name="'floorTH'"
                        :placeholder="'Floor TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'zoneTH'" class="form-control-label">Zone TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'zoneTH'"
                        :name="'zoneTH'"
                        :placeholder="'Zone TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'locationTH'" class=" form-control-label">Location TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'locationTH'"
                        :name="'locationTH'"
                        :placeholder="'Location TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactNameTH'" class=" form-control-label">Contact Name TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactNameTH'"
                        :name="'contactNameTH'"
                        :placeholder="'Contact Name TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactMobileTH'" class=" form-control-label">Contact Mobile TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactMobileTH'"
                        :name="'contactMobileTH'"
                        :placeholder="'Contact Mobile TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label :for="'contactEmailTH'" class=" form-control-label">Contact Email TH</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input
                        type="text"
                        :id="'contactEmailTH'"
                        :name="'contactEmailTH'"
                        :placeholder="'Contact Email TH'"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-12">

            <hr>
            <div class="row form-group">
            <div class="col col-md-2">
              <label :for="'logo'" class=" form-control-label">Logo</label>
            </div>
            <div class="col-12 col-md-3">
              <input
                type="file"
                :id="'logo'"
                :name="'logo'"
                :placeholder="'Logo'"
                class="form-control"
              >
            <i>Scale for image should be 1:1</i>
            </div>
          </div>
          <div class="row form-group">
            <div class="col col-md-2">
              <label :for="'cover'" class=" form-control-label">Cover</label>
            </div>
            <div class="col-12 col-md-3">
              <input
                type="file"
                :id="'cover'"
                :name="'cover'"
                :placeholder="'Cover'"
                class="form-control"
              >
              <i>Scale for image should be 4:3</i>
            </div>
          </div>
          <div class="row form-group">
              <div class="col col-md-2"><label class=" form-control-label">Category For Shop</label></div>
              <div class="col col-md-9">
                <div class="form-check">
                  <div class="checkbox" v-for="( value, key, index ) in shopCategories" :key="index">
                    <label for="checkbox1" class="form-check-label" >
                      <input type="checkbox" :id="value.id" :name="value.name" :value="value.name" class="form-check-input">{{ value.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col col-md-2"><label class=" form-control-label">Tier For Shop</label></div>
              <div class="col col-md-9">
                <div class="form-check">
                  <div class="checkbox" v-for="( value, key, index ) in shopTiers" :key="index">
                    <label for="checkbox1" class="form-check-label ">
                      <input type="checkbox" :id="value.id" :name="value.name" :value="value.name" class="form-check-input">{{ value.name }}
                    </label>
                  </div>
                </div>
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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'createShopForm',
	computed: {
		...mapGetters({
			shopCategories: 'shop/getShopCategories',
			shopTiers: 'shop/getShopTiers',
		}),
	},
	mounted() {
		this.$store.dispatch('shop/getShopCategories');
		this.$store.dispatch('shop/getShopTiers');
	},
	methods: {
		ShopCreation() {
			const email = this.email || process.env.VUE_APP_API_LOGIN_EMAIL;
			const password = this.password || process.env.VUE_APP_API_LOGIN_PASSWORD;
			const user = { email, password };

			this.$store
				.dispatch('shop/createShop', user)
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
