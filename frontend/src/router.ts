import { Contract } from 'ethers'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import ContractPage from './views/Contract.vue'
import { updateChainId } from './utils/url'
import useConfig from './config'

// For info on using Vue Router with the Composition API, see https://next.router.vuejs.org/guide/advanced/composition-api.html

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contract/:address',
    name: 'Contract',
    component: ContractPage,
  },
  // Fallback route for handling 404s
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('./views/Error404.vue'),
  },
]

const router = createRouter({
  // If app is not hosted at the domain root, make sure to pass the `base` input here: https://next.router.vuejs.org/api/#parameters
  history: createWebHistory(),
  routes,
})

router.afterEach((to, from) => {
  const { appChainId, isDev } = useConfig()
  if (to.query.chainId) {
    appChainId.value = Number(to.query.chainId)
  }
  updateChainId(appChainId.value)
  if (isDev) console.log('router.beforeEach: updateChainId')
})

export default router
