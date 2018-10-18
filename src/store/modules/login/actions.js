import axios from 'axios';

const action = {
	login({ commit }, user) {
		return new Promise((resolve, reject) => {
			commit('login_request');
			axios.post('http://' + `${process.env.VUE_APP_BASE_URI}` + 'login', user)
				.then((response) => {
					const data = response.data.data;
					localStorage.setItem('userToken', data.token);
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
};

export default action;
