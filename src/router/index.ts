// Packages
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

// Local Imports
import HomeView from '../views/home/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('../views/about/index.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/services/index.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/index.vue'),
  },
  {
    path: '/quote',
    name: 'quote',
    component: () => import('../views/quote/index.vue'),
  },
  {
    path: '/request-quote',
    name: 'quote',
    component: () => import('../views/quote/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
