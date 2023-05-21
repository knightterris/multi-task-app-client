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
import ChangePasswordView from '../views/PasswordView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'
import ProductShowView from '../views/ShowProductView.vue'
import ProductEditView from '../views/EditProductView.vue'
import WishlistView from '../views/WishlistView.vue'
import CommentView from '../views/CommentView.vue'

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
  },
  {
    path: '/change/password',
    name: 'changePassword',
    component: ChangePasswordView
  },
  {
    path: '/product/list',
    name: 'productList',
    component: ProductListView
  },
  {
    path: '/product/create',
    name: 'productCreate',
    component: ProductCreateView
  },
  {
    path: '/product/show/:id',
    name: 'productShow',
    component: ProductShowView
  },
  {
    path: '/product/edit/:id',
    name: 'productEdit',
    component: ProductEditView
  },
  {
    path: '/wishList',
    name: 'wishList',
    component: WishlistView
  },
  {
    path: '/comments',
    name: 'comments',
    component: CommentView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
