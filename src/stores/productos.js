import { defineStore } from "pinia";

export const useProductosStore = defineStore('productos', {

    state: () => ({
        productos: [
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p1.png',
                id: 1,
                nombre: 'Audífonos',
                precio: 350
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p2.png',
                id: 2,
                nombre: 'Teclado',
                precio: 500
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p3.jpg',
                id: 3,
                nombre: 'Mouse inalámbrico',
                precio: 250
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p4.jpg',
                id: 4,
                nombre: 'Taza de cerámica',
                precio: 120
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p5.jpg',
                id: 5,
                nombre: 'Termo de acero inoxidable',
                precio: 280
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p6.jpg',
                id: 6,
                nombre: 'Mochila casual',
                precio: 550
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p7.jpg',
                id: 7,
                nombre: 'Libreta de notas',
                precio: 90
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p8.jpg',
                id: 8,
                nombre: 'Lámpara de escritorio',
                precio: 320
            },
            {
                imagen: import.meta.env.BASE_URL + 'imagenes/p9.jpg',
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
            const productoNuevo = {
                id: Date.now(),
                ...producto
            }
            this.productos.push(productoNuevo)
        },

        eliminarProducto(id) {
            this.productos = this.productos.filter(producto => producto.id !== id)
        },

        editarProducto(id, nuevosDatos) {
            let productoEncontrado = this.productos.find(producto => producto.id === id)
            
            if (productoEncontrado) {
                Object.assign(productoEncontrado, nuevosDatos)
            }

        }, 

        encontrarProducto(id) {
            let productoEncontrado = this.productos.find(producto => producto.id === id)
            return productoEncontrado
        }

    }

})
