<script setup>

import { useProductosStore } from '../stores/productos';
import productCard from '../components/productCard.vue';

const productosStore = useProductosStore()

</script>

<template>

    <main>
        <h1>Productos</h1>
        <RouterLink to="/crear-producto" class="btn-crear">Crear producto</RouterLink>
        <div id="contenedor-productos">
            <productCard 
                v-for="producto in productosStore.obtenerProductos"
                :key="producto.id"
                :producto="producto"
            />
        </div>
    </main>

</template>