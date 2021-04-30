import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AdminLayout from '@/layouts/AdminLayout';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AdminLayout,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'Home',
                component: Home,
                meta: {
                    icon: 'mdi-flag',
                },
            },
            {
                path: '/index',
                name: 'Home',
                component: Home,
                meta: {
                    icon: 'mdi-flag',
                },
            },
        ],
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
