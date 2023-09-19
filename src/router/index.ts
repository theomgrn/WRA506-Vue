import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/session1',
            name: 'session1',
            component: () => import('../views/Session1.vue')
        },
        {
            path: '/session2',
            name: 'session2',
            component: () => import('../views/Session2.vue')
        },
        // {
        //     path: "/infoepisode/:id",
        //     name: "InfoEpisode",
        //     component: () => import("../views/InfoEpisode.vue"),
        // },

    ]
})

export default router