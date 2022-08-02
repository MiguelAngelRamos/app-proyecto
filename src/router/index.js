import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {name: 'my-login'}
  },
  {
    path: '/login',
    name: 'my-login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/RegisterView.vue')
  },
  {
  
    path: '/products',
    name: 'products-app',
    component: () => import(/* webpackChunkName: "Productos" */ '../products/HomeProducts.vue'),
    children: [
      {  //* localhost:3000/products/
        path: '',
        name: 'list-products',
        component: () => import(/* webpackChunkName: "ListaProductos" */ '../products/views/ListProductsView.vue')
      },
      {
        //* localhost:3000/products/2
        path: ':id',
        name: 'product-id',
        component: () => import(/* webpackChunkName: "ProductoId" */ '../products/views/ProductByIdView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
