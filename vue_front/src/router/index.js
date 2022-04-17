import { createRouter, createWebHistory } from 'vue-router'
import ShowProducts from '../views/ShowProducts.vue'
import CreateProduct from '../views/CreateProduct.vue'
import EditProduct from '../views/EditProduct.vue'

const routes = [
    {
        path: '/',
        name: 'show',
        component: ShowProducts
    },
    {
        path: '/create',
        name: 'create',
        component: CreateProduct
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditProduct
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
