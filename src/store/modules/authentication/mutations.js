export const mutations = {
	auth_request(state){
		state.status = 'loading'
	},
	auth_success(state, data){
		state.status = 'success'
		state.clientToken = data.token
		state.expiredAt = data.expiredAt
	},
	auth_error(state){
		state.status = 'error'
	},
	logout(state){
		state.status = ''
		state.clientToken = ''
	},
};