const mutation = {
	get_shoplist_request(state) {
		state.status = 'loading';
	},
	get_shoplist_success(state, data) {
		state.status = 'success';
		state.shopList = data;
	},
	get_shoplist_error(state) {
		state.status = 'error';
	},
	get_shop_categories_request(state) {
		state.status = 'loading';
	},
	get_shop_categories_success(state, data) {
		state.status = 'success';
		state.shopCategories = data;
	},
	get_shop_categories_error(state) {
		state.status = 'error';
	},
	get_tiers_request(state) {
		state.status = 'loading';
	},
	get_tiers_success(state, data) {
		state.status = 'success';
		state.shopTiers = data;
	},
	get_tiers_error(state) {
		state.status = 'error';
	},
	create_shop_request(state) {
		state.status = 'loading';
	},
	create_shop_success(state, data) {
		state.status = 'success';
		state.createShop = data;
	},
	create_shop_error(state) {
		state.status = 'error';
	},
};
export default mutation;
