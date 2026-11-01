import { createRouter, createWebHistory } from 'vue-router'

import CarritoView from "../views/CarritoView.vue"
import CrearProductoView from "../views/CrearProductoView.vue"
import EditarProductoView from "../views/EditarProductoView.vue"
import InicioView from '../views/InicioView.vue'
import ProductosView from "../views/ProductosView.vue"
import { Component } from 'react'

const routes = [
    {
        path: "/",
        redirect: "/inicio"
    }, 
    {
        path: "/carrito",
        Component: CarritoView
    }, 
    {
        path: "/crear-producto",
        Component: CrearProductoView
    },
    {
        path: "/editar-producto",
        Component: EditarProductoView
    },
    {
        path: "/inicio",
        Component: InicioView
    },
    {
        path: "/productos",
        Component: ProductosView
    }
]

const router = (
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }
)

export default router