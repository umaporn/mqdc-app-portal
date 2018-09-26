import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const SERVICE_API = 'http://dev.api.mqdcapp.com:3002/api/v2/'

export default new Vuex.Store({
  state: {
    isToken: !!localStorage.getItem("token"),
    shopList: []
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    set_shopList(state, shopList){
      state.shopList = shopList
    }
  },
  actions: {
    authentication({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: SERVICE_API + 'mqdc/client/authenticate', data: user, method: 'POST' })
          .then(response => {
            const token = response.data.token
            const expiredAt = response.data.expiredAt.utc
            localStorage.setItem('token', token)
            localStorage.setItem('expiredAt', expiredAt)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(response)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    getShopList ({ commit }) {
      axios
        .get(SERVICE_API + 'mqdc/shops')
        .then(response => response.data)
        .then(shopList => {
          commit('set_shopList', shopList)
        })
    }
  },
  getters : {
    isToken: state => !!state.isToken,
  }
})
