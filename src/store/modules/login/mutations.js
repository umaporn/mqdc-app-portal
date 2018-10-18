const mutation = {
	login_request(state) {
		state.status = 'loading';
	},
	login_success(state, data) {
		state.status = 'success';
		state.userToken = data.token;
		state.userExpiredAt = data.expiredAt;
	},
	login_error(state) {
		state.status = 'error';
	},
	logout(state) {
		state.status = '';
		state.userToken = '';
	},
};
export default mutation;
