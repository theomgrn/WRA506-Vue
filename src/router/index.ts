import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'HOME',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/session1',
        name: 'Session1',
        component: () => import('../views/Session1.vue')
    },
    {
        path: '/session2',
        name: 'Session2',
        component: () => import('../views/Session2.vue')
    },
    {
        path: '/session3',
        name: 'Session3',
        component: () => import('../views/Session3.vue')
    },
    {
        path: '/session4',
        name: 'Session4',
        component: () => import('../views/Session4.vue')
    },
    {
        path: '/info/:pokedexId',
        name: 'Card',
        component: () => import('../components/Card.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router