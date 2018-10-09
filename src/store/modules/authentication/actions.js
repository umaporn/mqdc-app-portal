import axios from 'axios';

const actions = {
	authentication( { commit } ){
		return new Promise( ( resolve, reject ) =>{
			commit( 'auth_request' );
			axios.post( 'http://dev.api.mqdcapp.com:3002/api/v2/mqdc/client/authenticate', {
				username: process.env.VUE_APP_API_USERNAME,
				password: process.env.VUE_APP_API_PASSWORD,
			}  )
				.then( response =>{
					const token = response.data.token;
					const user  = response.data.user;
					localStorage.setItem( 'token', token );
					axios.defaults.headers.common['Authorization'] = token;
					commit( 'auth_success', token, user );
					resolve( response );
				} )
				.catch( error =>{
					commit( 'auth_error' );
					localStorage.removeItem( 'token' );
					reject( error );
				} );
		} );
	},
};

export {
	actions,
};
