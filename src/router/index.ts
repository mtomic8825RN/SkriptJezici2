
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Gallery from '../views/Gallery.vue'
import Artwork from '../views/Artwork.vue'
import Drawing from '../views/Drawing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/gallery', component: Gallery },
    { path: '/artwork', component: Artwork },
    { path: '/drawing', component: Drawing }
  ]
})

export default router
