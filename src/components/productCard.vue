<script setup>

import { defineProps } from 'vue';
defineProps({producto: Object})

</script>

<template>

    <div class="tarjeta-producto">
        <img>
        <h3>{{ producto.nombre }}</h3>
        <p>${{ producto.precio }}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
    </div>

</template>