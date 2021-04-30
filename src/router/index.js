import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AdminLayout from '@/layouts/AdminLayout';
import BlankView from '@/layouts/BlankView';
import About from '@/views/About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AdminLayout,
        redirect: '/index/index2',
        children: [
            {
                path: '/index',
                name: 'Home',
                component: BlankView,
                meta: {
                    icon: 'mdi-flag',
                },
                children: [
                    {
                        path: 'index2',
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
                component: BlankView,
                meta: {
                    icon: 'mdi-flag',
                },
                children: [
                    {
                        path: 'about2',
                        name: 'About2',
                        component: Home,
                        meta: {
                            icon: 'mdi-flag',
                        },
                    },
                    {
                        path: 'about3',
                        name: 'About3',
                        component: About,
                        meta: {
                            icon: 'mdi-flag',
                        },
                    },
                ],
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
