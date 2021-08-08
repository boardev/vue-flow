import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    redirect: '/basic'
  },
  {
    path: '/basic',
    component: () => import('./Basic/Basic.vue')
  },
  {
    path: '/custom-connectionline',
    component: () => import('./CustomConnectionLine/CustomConnectionLine.vue')
  },
  {
    path: '/custom-node',
    component: () => import('./CustomNode/CustomNode.vue')
  },
  {
    path: '/drag-n-drop',
    component: () => import('./DragNDrop/DnD.vue')
  },
  {
    path: '/edges',
    component: () => import('./Edges')
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
