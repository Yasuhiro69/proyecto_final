<script setup>
import { ref } from 'vue'
import { obtenerToken } from '../../services/api.js'

const correo = ref('')
const licencia = ref('')
const mensaje = ref('')


// ... (correo, licencia y mensaje se quedan igual)
    async function iniciarSesion() {
        const respuesta = await obtenerToken(correo.value, licencia.value)
        console.log(respuesta)
    }

</script>

<template>
    <h1>Acceso a la API</h1>
    <form @submit.prevent="iniciarSesion">
        <label>Correo</label>
        <input v-model="correo" type="email" required />
        <label>Licencia</label>
        <input v-model="licencia" type="password" required />
        <button type="submit">Obtener token</button>
    </form>

    <p>{{ mensaje }}</p>
</template>
