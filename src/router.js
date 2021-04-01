
import {createWebHistory, createRouter} from 'vue-router';

import Home from './home/Home'
// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    /* {
        path: '/login',
        name: 'login',
        component: Login,
    }, */
]

const router = createRouter( {
	history: createWebHistory(),
	routes,
} );

export default router;