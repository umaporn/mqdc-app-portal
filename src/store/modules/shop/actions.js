import axios from 'axios';

const action = {
	shoplist({ commit }) {
		return new Promise((resolve, reject) => {
			commit('shoplist_request');
			axios.post(`http://${process.env.VUE_APP_BASE_URI}shops`)
				.then((response) => {
					const data = response.data.data;
					commit('shoplist', data);
					resolve(response);
				})
				.catch((error) => {
					commit('shoplist_error');
					localStorage.removeItem('userToken');
					reject(error);
				});
		});
	},
};

export default action;
