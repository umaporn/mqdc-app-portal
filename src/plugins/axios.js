

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
	baseURL: process.env.VUE_APP_BASE_URI || '',
	timeout: 60 * 1000, // Timeout
	headers: { Accept: 'application/json' },
	withCredentials: false, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	( config ) => {
		// Do something before request is sent
		return config;
	},
	( error ) => {
		// Do something with request error
		return Promise.reject( error );
	},
);

// Add a response interceptor
_axios.interceptors.response.use(
	( response ) => {
		// Do something with response data
		return response;
	},
	( error ) => {
		// Do something with response error
		return Promise.reject( error );
	},
);

Plugin.install = function (Vue) {
	Vue.axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		axios: {
			get() {
				return _axios;
			},
		},
		$axios: {
			get() {
				return _axios;
			},
		},
	});
};

Vue.use(Plugin);

export default Plugin;
