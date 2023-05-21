import { createStore } from 'vuex'

export default createStore({
  state: {
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {},
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    loginStatus: localStorage.getItem('loginStatus') ? localStorage.getItem('loginStatus') : '',
    data:{},
  },
  getters: {
    getToken: state => state.token,
    getUserData: state => state.userData,
    getLoginStatus: state => state.loginStatus,
    getData: state => state.data,
  },
  mutations: {
    SET_TOKEN(state, value) {
      state.token = value;
      localStorage.setItem('token', value);
    },
    SET_USER_DATA(state, value) {
      state.userData = value;
      localStorage.setItem('userData', JSON.stringify(value));
    },
    SET_LOGIN_STATUS(state, value) {
      state.loginStatus = value;
      localStorage.setItem('loginStatus', JSON.stringify(value));
    },
  },
  actions: {
    setToken: ({ commit }, value) => {
      commit('SET_TOKEN', value);
    },
    setUserData: ({ commit }, value) => {
      commit('SET_USER_DATA', value);
    },
    setLoginStatus: ({ commit }, value) => {
      commit('SET_LOGIN_STATUS', value);
    }
  },
  modules: {}
})