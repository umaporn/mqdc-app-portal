import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use( Vuex );
Vue.use( axios );

const SERVICE_API = 'http://dev.api.mqdcapp.com:3002/api/v2/';

export default new Vuex.Store( {
  state: {
   isToken:  !!localStorage.getItem( 'token' ),
   shopList: [],
  },
  mutations: {
   auth_request( state ){
     state.status = 'loading';
   },
   auth_success( state, token, user ){
     state.status = 'success';
     state.token  = token;
     state.user   = user;
   },
   auth_error( state ){
     state.status = 'error';
   },
   login_success(state, token, user){
     state.status     = 'success';
     state.userToken  = token;
     state.user       = user;
   },
   login_error( state ){
     state.status = 'error';
   },
   getShopList( state, shopList ){
     state.shopList = shopList;
   },
   getShopList_error( state ){
     state.status = 'error';
   },
   getCategoryList( state, categoryList ){
     state.categoryList = categoryList;
   },
   getCategoryList_error( state ){
     state.status = 'error';
   },
  },
  actions: {
   authentication( { commit }, user ){
     return new Promise( ( resolve, reject ) => {
       commit( 'auth_request' );
       axios( { url: SERVICE_API + 'mqdc/client/authenticate',
                data: user,
                method: 'POST',
              } )
         .then( response => {
           const token     = response.data.token;
           const expiredAt = response.data.expiredAt.utc;
           localStorage.setItem( 'token', token );
           localStorage.setItem( 'expiredAt', expiredAt );
           commit( 'auth_success', token, user );
           resolve( response );
         } )
         .catch( error => {
           commit( 'auth_error' );
           localStorage.removeItem( 'token' );
           reject( error );
         } );
     } );
   },
   login( { commit }, data ){
     axios
       .post( SERVICE_API + 'mqdc/login', data )
       .then( response => {
         const token     = response.data.data.token;
         const expiredAt = response.data.data.expiredAt;
         localStorage.setItem( 'userToken', token );
         localStorage.setItem( 'userTokenExpiredAt', expiredAt.utc );
         axios.defaults.headers.common['Authorization'] = token;
         commit( 'auth_success', token, data );
       } )
       .catch( error => {
         commit( 'login_error', error );
         localStorage.removeItem( 'Usertoken' );
       })
   },
   getShopList( { commit } ){
     axios
       .get( SERVICE_API + 'mqdc/shops' )
       .then( response => response.data )
       .then( shopList => {
         commit( 'getShopList', shopList );
       } )
       .catch( error => {
         commit( 'getShopList_error', error );
         localStorage.removeItem( 'token' );
       } );
   },
   getCategoryList( { commit } ){
     axios
       .get( SERVICE_API + 'mqdc/categories' )
       .then( response => {
         commit( 'getCategoryList', response );
       } )
       .catch( error => {
         commit( 'getCategoryList_error', error );
         localStorage.removeItem( 'token' );
       } );
   },
  },
  getters: {
   isToken: state => !!state.isToken,
  },
} );
