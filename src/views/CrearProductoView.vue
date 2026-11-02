<script setup>

import { ref } from 'vue';
import { useProductosStore } from '../stores/productos';

const nuevoProducto = ref ({
    imagen: "",
    nombre: "",
    precio: ""
})

const productosStore = useProductosStore()

function guardarProducto() {
    const producto = {
        id: Date.now(),
        ...nuevoProducto.value
    }

    productosStore.agregarProducto(producto)
}

</script>

<template>
    <main>
        <h1>Guardar un nuevo producto</h1>
        <div id="form-edit-product">
            <form @submit.prevent="guardarProducto">
                <label>Nombre del producto</label>
                <input type="text" v-model="nuevoProducto.nombre">
                
                <label>Precio</label>
                <input type="number" v-model="nuevoProducto.precio">
                
                <label>Imagen</label>
                <input type="text" v-model="nuevoProducto.imagen">

                <div class="btns-edit">
                    <button type="submit">Guardar producto</button>
                    <button type="button">Cancelar</button>
                </div>
            </form>
            <img/>
        </div>
    </main>
</template>
