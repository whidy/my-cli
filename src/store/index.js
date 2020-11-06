import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'js-cookie';
import $axios from '../plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: cookie.get('token') || '',
    status: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    }
  },
  actions: {
    login({ commit }, { email = 'whidy@whidy.net', password = '123' }) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        // needs backend api
        // axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
        //   .then(resp => {
        //     const token = resp.data.token
        //     const user = resp.data.user
        //     cookie.set('token', token, { expires: 1 })
        //     axios.defaults.headers.common['Authorization'] = token
        //     commit('auth_success', token, user)
        //     resolve(resp)
        //   })
        //   .catch(err => {
        //     commit('auth_error')
        //     localStorage.removeItem('token')
        //     reject(err)
        //   })
        const token = 'abcdefgisok';
        // user = {
        //   name: 'whidy',
        //   avatar: 'imgurl'
        // };
        cookie.set('token', token, { expires: 1 });
        $axios.defaults.headers.common.Authorization = token;
        commit('auth_success', token, {
          email, password
        });
        resolve();
      });
    }
    // register({ commit }, user) {
    //   return new Promise((resolve, reject) => {
    //     commit('auth_request');
    //     $axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
    //       .then((resp) => {
    //         const { token } = resp.data;
    //         const { user } = resp.data;
    //         localStorage.setItem('token', token);
    //         $axios.defaults.headers.common.Authorization = token;
    //         commit('auth_success', token, user);
    //         resolve(resp);
    //       })
    //       .catch((err) => {
    //         commit('auth_error', err);
    //         localStorage.removeItem('token');
    //         reject(err);
    //       });
    //   });
    // }
  },
  modules: {},
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status
  }
});
