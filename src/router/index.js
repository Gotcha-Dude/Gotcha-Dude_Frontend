import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/view/HomeView.vue";
import TestView from "@/view/TestView.vue";

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/test',
    component: TestView
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
