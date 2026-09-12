import { createRouter, createWebHistory } from 'vue-router'
import { routeRecords } from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes: routeRecords,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
