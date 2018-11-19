import axios from 'axios';

const action = {
	login({ commit }, user) {
		return new Promise((resolve, reject) => {
			commit('login_request');
			axios.post(`${process.env.VUE_APP_BASE_URI}login`, user)
				.then((response) => {
					const data = response.data.data;
					localStorage.setItem('userToken', data.token);
					localStorage.setItem('userTokenTimestamp', data.expiredAt.timestamp);
					localStorage.setItem('userEmail', data.userProfile.email);
					axios.defaults.headers.common.Authorization = data.token;
					commit('login_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('login_error');
					localStorage.removeItem('userToken');
					reject(error);
				});
		});
	},
	logout({ commit }) {
		return new Promise((resolve) => {
			commit('logout');
			localStorage.removeItem('userToken');
			localStorage.removeItem('userEmail');
			localStorage.removeItem('userTokenTimestamp');
			delete axios.defaults.headers.common.Authorization;
			resolve();
		});
	},
};

export default action;
