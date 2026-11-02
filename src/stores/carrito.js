import { defineStore } from "pinia";

export const useCarritoStore = defineStore('carrito', {

    state: () => ({
        productosCarrito: []
    }),

    getters: {
        obtenerCarrito: (state) => state.productosCarrito,

        totalProductos: (state) => state.productosCarrito.length,

        totalCompra: (state) => state.productosCarrito.reduce(
            (total, producto) => total + producto.precio,
            0
        )
    },

    actions: {
        agregarAlCarrito(producto) {
            this.productosCarrito.push(producto)
        },

        eliminarDelCarrito(id) {
            this.productosCarrito = this.productosCarrito.filter(
                producto => producto.id !== id
            )
        },

        vaciarCarrito() {
            this.productosCarrito = []
        }
    }
})
