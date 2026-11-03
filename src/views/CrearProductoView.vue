<script setup>

import { ref } from 'vue';
import { useProductosStore } from '../stores/productos';
import { useRouter } from 'vue-router';

const nuevoProducto = ref ({
    imagen: "",
    nombre: "",
    precio: ""
})

const productosStore = useProductosStore()
const router = useRouter()

function guardarProducto() {
    productosStore.agregarProducto(nuevoProducto.value)

    nuevoProducto.value = {
        imagen: "",
        nombre: "",
        precio: ""
    }

    router.push('/productos')
}

</script>

<template>
    <main>
        <h1>Guardar un nuevo producto</h1>

        <div id="form-edit-product">
            <form @submit.prevent="guardarProducto">

                <label>Nombre del producto</label>
                <input 
                    type="text" 
                    v-model="nuevoProducto.nombre"
                    required
                >
                
                <label>Precio</label>
                <input 
                    type="number" 
                    v-model.number="nuevoProducto.precio"
                    min="0"
                    required
                >
                
                <label>Imagen</label>
                <input 
                    type="text" 
                    v-model="nuevoProducto.imagen"
                >

                <div class="btns-edit">
                    <button type="submit">
                        Guardar producto
                    </button>

                    <button 
                        type="button" 
                        @click="router.push('/productos')"
                    >
                        Cancelar
                    </button>
                </div>

            </form>

            <img 
                v-if="nuevoProducto.imagen"
                :src="nuevoProducto.imagen"
                :alt="nuevoProducto.nombre"
            />

        </div>
    </main>
</template>
