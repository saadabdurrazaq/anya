//import vue router
import { createRouter, createWebHistory } from 'vue-router'; // initiate route config

//define a routes
const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import( /* webpackChunkName: "login" */ '@/views/user/Welcome.vue') // This part is integrated with C:\xampp\htdocs\my-project\laravue\vue-passport\public\index.html
    },
    // {
    //     path: '/user/chat',
    //     name: 'chat',
    //     component: () => import('@/views/user/chat.vue'),
    // },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router