import { createRouter, createWebHistory } from 'vue-router'

import CarritoView from "../views/CarritoView.vue"
import CrearProductoView from "../views/CrearProductoView.vue"
import EditarProductoView from "../views/EditarProductoView.vue"
import InicioView from '../views/InicioView.vue'
import ProductosView from "../views/ProductosView.vue"

const routes = [
    {
        path: "/",
        component: InicioView
    }, 
    {
        path: "/carrito",
        component: CarritoView
    }, 
    {
        path: "/productos/crear",
        component: CrearProductoView
    },
    {
        path: "/productos/:id",
        component: EditarProductoView
    },
    {
        path: "/productos",
        component: ProductosView
    }
]

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }
)

export default router
