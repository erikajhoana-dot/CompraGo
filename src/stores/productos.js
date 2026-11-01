import { defineStore } from "pinia";

export const useProductosStore = defineStore('productos', {

    state: () => ({
        productos: [
            {
                id: 1,
                nombre: 'Audífonos',
                precio: 350
            },
            {
                id: 2,
                nombre: 'Teclado',
                precio: 500
            }
        ]
    }),

    getters: {

        totalProductos: (state) => {
            return state.productos.length
        }

    },

    actions: {

        agregarProducto(producto) {
            this.productos.push(producto)
        },

        eliminarProducto(id) {
            this.productos = this.productos.filter(producto => producto.id !== id)
        },

        editarProducto(id, nuevosDatos) {
            let productoEncontrado = this.productos.find(producto => producto.id === id)
            
            if (productoEncontrado) {
                Object.assign(productoEncontrado, nuevosDatos)
            }

        }

    }

})
