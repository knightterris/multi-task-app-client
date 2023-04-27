import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import AdminProfileView from '../views/AdminProfileView.vue'
import AdminProfileEditView from '../views/EditProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUsView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/adminHome',
    name: 'adminHome',
    component: AdminHomeView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/admin/profile',
    name: 'adminProfile',
    component: AdminProfileView
  },
  {
    path: '/admin/profile/edit',
    name: 'adminProfileEdit',
    component:AdminProfileEditView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
