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
	create_shoplist_request(state) {
		state.status = 'loading';
	},
	create_shoplist_success(state, data) {
		state.status = 'loading';
		state.shopList = data;
	},
	create_shoplist_error(state) {
		state.status = 'error';
	},
};
export default mutation;
