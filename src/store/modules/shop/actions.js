import axios from 'axios';

const action = {
	getShoplist({ commit }) {
		return new Promise((resolve, reject) => {
			commit('get_shoplist_request');
			axios.get(`${process.env.VUE_APP_BASE_URI}shops`)
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
	getShopCategories({ commit }) {
		return new Promise((resolve, reject) => {
			commit('get_shop_categories_request');
			axios.get(`${process.env.VUE_APP_BASE_URI}categories`)
				.then((response) => {
					const data = response.data.data;
					commit('get_shop_categories_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('get_shop_categories_error');
					reject(error);
				});
		});
	},
	createShop({ commit }) {
		return new Promise((resolve, reject) => {
			commit('create_shop_request');
			axios.post(`${process.env.VUE_APP_BASE_URI}shops`)
				.then((response) => {
					const data = response.data.data;
					commit('create_shop_success', data);
					resolve(response);
				})
				.catch((error) => {
					commit('create_shop_error');
					reject(error);
				});
		});
	},
};

export default action;
