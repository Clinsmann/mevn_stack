import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || "",
    user: {},
    status: '',
    error: null,
    success:null,
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error,
    success: state => state.success
};
const actions = {
    //login Action
    async login({commit}, userData) {
        commit('auth_request');
        try {
            let res = await axios.post('/api/users/login', userData);
            if (res.data.success) {
                const {token, user, msg} = res.data;
                await localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user, msg);
            }
            return res;
        } catch (e) {
            commit('auth_error', e);
        }
    },

    //register user
    async register({commit}, userData) {
        commit('register_request');
        try {
            let res = await axios.post('/api/users/register', userData);
            if (res.data.success !== undefined) {
                commit('register_success', res.data.msg);
            }
            return res;
        } catch (e) {
            commit('register_error', e);
        }
    },

    //get the user profile
    async getProfile({commit}) {
        commit('profile_request');
        let res = await axios.get('/api/users/profile');
        commit('user_profile', res.data.user);
        return res;
    },

    //logout user
    async onLogout({commit}) {
        commit('logout_request');
        await localStorage.removeItem('token');
        commit('user_logout');
        delete axios.defaults.headers.common['Authorization'];
        return router.push('/login');
    }
};
const mutations = {
    auth_request(state) {
        state.error = null;
        state.success = null;
        state.status = "loading";
    },
    auth_success(state, token, user, msg) {
        state.token = token;
        state.user = user;
        state.status = 'success';
        state.error = null;
        state.success = msg;
    },
    auth_error(state, err) {
        state.error = err.response.data.msg;
        state.success = null;
    },

    register_request(state) {
        state.error = null;
        state.success = null;
        state.status = "loading";
    },
    register_success(state, msg) {
        state.error = null;
        state.status = "success";
        state.success = msg;
    },
    register_error(state, err) {
        state.error = err.response.data.msg;
        state.success = null;
    },

    profile_request(state) {
        state.status = "loading";
    },
    user_profile(state, user) {
        state.user = user;
        state.status = 'success';
        state.success = "User successfully logged in";
    },

    logout_request(state) {
        state.success = null;
        state.status = 'loading';
    },

    user_logout(state) {
        state.error = null;
        state.status = '';
        state.token = '';
        state.user = '';
        state.success = "User successfully logged out";
    },
};

export default {state, actions, getters, mutations};