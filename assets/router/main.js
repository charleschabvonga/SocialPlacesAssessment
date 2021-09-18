import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'contact-us',
        component: ()=>import('../views/ContactUs.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/Login.vue')
    },
    {
        path: '/messages',
        name: 'messages',
        component: ()=>import('../views/Messages.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: ()=>import('../views/Register.vue')
    },
    {
        path: '/see-you-soon',
        name: 'see-you-soon',
        component: ()=>import('../views/SeeYouSoon.vue')
    },
    {
        path: '/logout',
        name: 'logout',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router