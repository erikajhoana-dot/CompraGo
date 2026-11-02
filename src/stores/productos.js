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
            },
            {
                id: 3,
                nombre: 'Mouse inalámbrico',
                precio: 250
            },
            {
                id: 4,
                nombre: 'Taza de cerámica',
                precio: 120
            },
            {
                id: 5,
                nombre: 'Termo de acero inoxidable',
                precio: 280
            },
            {
                id: 6,
                nombre: 'Mochila casual',
                precio: 550
            },
            {
                id: 7,
                nombre: 'Libreta de notas',
                precio: 90
            },
            {
                id: 8,
                nombre: 'Lámpara de escritorio',
                precio: 320
            },
            {
                id: 9,
                nombre: 'Bocina portátil',
                precio: 390
            }
        ]
    }),

    getters: {

        obtenerProductos: (state) => state.productos,

        totalProductos: (state) => state.productos.length

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
