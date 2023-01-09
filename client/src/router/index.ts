import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact/index.vue'),
  },
  {
    path: '/quote',
    name: 'Quote',
    component: () => import('../views/quote/index.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/services/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
