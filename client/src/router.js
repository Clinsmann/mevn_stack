import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');
const Login = () => import(/* webpackChunkName: "login" */ './views/user/Login.vue');
const Profile = () => import(/* webpackChunkName: "profile" */ './views/user/Profile.vue');
const Register = () => import(/* webpackChunkName: "register" */ './views/user/Register.vue');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/login', name: 'login', component: Login, meta: {requiresGuest: true}},
        {path: '/profile', name: 'profile', component: Profile, meta: {requiresAuth: true}},
        {path: '/register', name: 'register', component: Register, meta: {requiresGuest: true}}
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            //redirect to the login page
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            //redirect to the login page
            next('/profile');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;