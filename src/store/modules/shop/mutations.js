const mutation = {
	shoplist_request(state) {
		state.status = 'loading';
	},
	shoplist_success(state, data) {
		state.status = 'success';
		state.shopList = data;
	},
	shoplist_error(state) {
		state.status = 'error';
	},
	logout(state) {
		state.status = '';
		state.userToken = '';
	},
};
export default mutation;
