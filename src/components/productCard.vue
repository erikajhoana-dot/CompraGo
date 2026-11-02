<script setup>

import { useProductosStore } from '../stores/productos';
import { useCarritoStore } from '../stores/carrito';
import { useRouter } from 'vue-router';

const props = defineProps({producto: Object})

const productosStore = useProductosStore()
const carritoStore = useCarritoStore()
const router = useRouter()

function editarProducto() {
    router.push(`/productos/${props.producto.id}`)
}

</script>

<template>

    <div class="tarjeta-producto">
        <img :src="producto.imagen" :alt="producto.nombre">
        <h3>{{ producto.nombre }}</h3>
        <p>${{ producto.precio }}</p>

        <div id="edit-elim">
            <button class="btn-editar" @click="editarProducto">
                Editar
            </button>
  
            <button class="btn-eliminar" v-on:click="productosStore.eliminarProducto(producto.id)">
                Eliminar
            </button>
        </div>

        <button class="agregar-carrito" @click="carritoStore.agregarAlCarrito(producto)">
            Agregar al carrito
        </button>
    </div>

</template>

