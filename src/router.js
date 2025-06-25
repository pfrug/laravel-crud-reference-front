import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import CreateClient from './views/CreateClient.vue'
import Login from './views/Login.vue'
import CountriesList from './components/CountriesList.vue'
import EditClient from './components/EditClient.vue'

const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('access_token')
  token ? next() : next('/login')
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/clients' },
    { path: '/login', component: Login },
    { path: '/clients', component: Home, beforeEnter: requireAuth },
    { path: '/clients/create', component: CreateClient, beforeEnter: requireAuth },
    { path: '/clients/:id/edit', component: EditClient, props: true },
    { path: '/countries', component: CountriesList, beforeEnter: requireAuth }
  ]
})
