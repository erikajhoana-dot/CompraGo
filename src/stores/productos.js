import { defineStore } from "pinia";

export const useProductosStore = defineStore('productos', {

    state: () => ({
        productos: [
            {
                imagen: "../src/assets/p1.png",
                id: 1,
                nombre: 'Audífonos',
                precio: 350
            },
            {
                imagen: "../src/assets/p2.png",
                id: 2,
                nombre: 'Teclado',
                precio: 500
            },
            {
                imagen: "../src/assets/p3.jpg",
                id: 3,
                nombre: 'Mouse inalámbrico',
                precio: 250
            },
            {
                imagen: "../src/assets/p4.jpg",
                id: 4,
                nombre: 'Taza de cerámica',
                precio: 120
            },
            {
                imagen: "../src/assets/p5.jpg",
                id: 5,
                nombre: 'Termo de acero inoxidable',
                precio: 280
            },
            {
                imagen: "../src/assets/p6.jpg",
                id: 6,
                nombre: 'Mochila casual',
                precio: 550
            },
            {
                imagen: "../src/assets/p7.jpg",
                id: 7,
                nombre: 'Libreta de notas',
                precio: 90
            },
            {
                imagen: "../src/assets/p8.jpg",
                id: 8,
                nombre: 'Lámpara de escritorio',
                precio: 320
            },
            {
                imagen: "../src/assets/p9.jpg",
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
