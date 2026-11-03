<script setup>
</script>

<template>

    <header>
        <img src="../src/assets/Designer (1).png" alt="Logo de CompraGo" />

        <nav>
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/productos">Productos</RouterLink>
            <RouterLink to="/carrito">Carrito</RouterLink>
        </nav>
    </header>

    <main>
        <RouterView />
    </main>

</template>
