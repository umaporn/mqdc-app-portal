import axios from 'axios';

const action = {
	authentication({ commit }) {
		return new Promise((resolve, reject) => {
			commit('auth_request');
			axios.post(`${process.env.VUE_APP_BASE_URI}/client/authenticate`, {
				username: process.env.VUE_APP_API_USERNAME,
				password: process.env.VUE_APP_API_PASSWORD,
			})
				.then((response) => {
					const data = response.data;
					localStorage.setItem('clientToken', data.token);
					localStorage.setItem('clientTokenTimestamp', data.expiredAt.timestamp);
					axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
					commit('auth_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('auth_error');
					localStorage.removeItem('clientToken');
					reject(error);
				});
		});
	},
};

export default action;
