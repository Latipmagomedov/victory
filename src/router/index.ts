import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import UserList from '../views/UserList.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'userList',
        component: UserList
    },
    {
        path: '/user/:id',
        name: 'userDetail',
        component: () => import('../views/UserDetail.vue')
    },
    {
        path: '/create-user',
        name: 'createUser',
        component: () => import('../views/CreateUser.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
