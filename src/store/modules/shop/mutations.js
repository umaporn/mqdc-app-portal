const mutation = {
	shoplist_request(state) {
		state.status = 'loading';
	},
	shoplist_success(state, data) {
		state.status = 'success';
		state.userToken = data.token;
		state.userExpiredAt = data.expiredAt;
		state.userProfile = data.userProfile;
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
