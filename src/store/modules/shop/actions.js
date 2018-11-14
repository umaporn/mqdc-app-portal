import axios from 'axios';

const action = {
	shoplist({ commit }) {
		return new Promise((resolve, reject) => {
			commit('get_shoplist_request');
			axios.get(`http://${process.env.VUE_APP_BASE_URI}shops`)
				.then((response) => {
					const data = response.data.data;
					commit('get_shoplist_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('get_shoplist_error');
					localStorage.removeItem('userToken');
					reject(error);
				});
		});
	},
	create_shoplist({ commit }) {
		return new Promise((resolve, reject) => {
			commit('create_shoplist_request');
			axios.post(`http://${process.env.VUE_APP_BASE_URI}shops`)
				.then((response) => {
					const data = response.data.data;
					commit('create_shoplist_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('create_shoplist_error');
					localStorage.removeItem('userToken');
					reject(error);
				});
		});
	},
};

export default action;
