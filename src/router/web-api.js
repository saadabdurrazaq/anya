//import vue router
import { createRouter, createWebHistory } from 'vue-router'; // initiate route config

//define a routes
const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import( /* webpackChunkName: "login" */ '@/views/user/Welcome.vue') // This part is integrated with C:\xampp\htdocs\my-project\laravue\vue-passport\public\index.html
    },
    {
        path: '/user/syarat-berperkara',
        name: 'syarat-berperkara',
        component: () => import('@/views/user/syarat-berperkara.vue'),
    },
    {
        path: '/user/perceraian',
        name: 'perceraian',
        component: () => import('@/views/user/perceraian.vue'),
    },
    {
        path: '/user/narasi',
        name: 'narasi',
        component: () => import('@/views/user/narasi.vue'),
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router