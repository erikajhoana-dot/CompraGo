<script setup>

import { ref } from 'vue';
import { useProductosStore } from '../stores/productos';
import { useRoute, useRouter } from 'vue-router';

const productosStore = useProductosStore()
const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)

const producto = productosStore.productos.find(producto => producto.id === id)

const nuevosDatos = ref({
    imagen: producto ? producto.imagen : "",
    nombre: producto ? producto.nombre : "",
    precio: producto ? producto.precio : ""
})

function guardarProductoEditado() {
    if (producto) {
        productosStore.editarProducto(
            producto.id,
            nuevosDatos.value
        )

        router.push('/productos')
    }
}

</script>

<template>
    <main>
        <h1>Editar producto</h1>

        <div v-if="producto" id="form-edit-product">
            <form @submit.prevent="guardarProductoEditado">
                <label>Nombre del producto</label>
                <input
                    type="text"
                    v-model="nuevosDatos.nombre"
                    required
                >
                
                <label>Precio</label>
                <input
                    type="number"
                    v-model.number="nuevosDatos.precio"
                    min="0"
                    required
                >
                
                <label>Imagen</label>
                <input
                    type="text"
                    v-model="nuevosDatos.imagen"
                >

                <div class="btns-edit">
                    <button type="submit">Guardar producto</button>
                    <button type="button" @click="router.push('/productos')">
                        Cancelar
                    </button>
                </div>
            </form>

            <img :src="nuevosDatos.imagen" :alt="nuevosDatos.nombre"/>
        </div>

        <div v-else>
            <p>El producto que buscas no existe.</p>
            <button @click="router.push('/productos')">
                Volver a productos
            </button>
        </div>
    </main>
</template>
