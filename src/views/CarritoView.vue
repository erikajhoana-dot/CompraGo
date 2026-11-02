<script setup>

import { useCarritoStore } from '../stores/carrito';

const carritoStore = useCarritoStore()

</script>

<template>

    <main>
        <h1>Mi carrito</h1>

        <div id="contenedor-carrito">

            <div v-if="carritoStore.obtenerCarrito.length === 0" class="carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para comenzar tu compra.</p>
            </div>

            <div v-else>

                <div 
                    v-for="producto in carritoStore.obtenerCarrito" 
                    :key="producto.id" 
                    class="producto-carrito"
                >
                    <img :src="producto.imagen" :alt="producto.nombre">

                    <div class="info-producto-carrito">
                        <h3>{{ producto.nombre }}</h3>
                        <p>${{ producto.precio }}</p>
                    </div>

                    <button 
                        class="btn-eliminar" 
                        @click="carritoStore.eliminarDelCarrito(producto.id)"
                    >
                        Eliminar
                    </button>

                </div>

                <div class="resumen-carrito">

                    <h2>Total: ${{ carritoStore.totalCompra }}</h2>

                    <button 
                        class="btn-vaciar" 
                        @click="carritoStore.vaciarCarrito()"
                    >
                        Vaciar carrito
                    </button>

                </div>

            </div>

        </div>
    </main>

</template>
