<script setup>
import { ref } from 'vue'
import LoginForm from './components/LoginForm.vue'
import PerfilUsuario from './components/PerfilUsuario.vue'

const token = ref(localStorage.getItem('token'))

function alIniciarSesion(nuevoToken) {
    token.value = nuevoToken
}

function alCerrarSesion() {
    localStorage.removeItem('token')
    token.value = null
}
</script>

<template>
  <PerfilUsuario v-if="token" @sesion-cerrada="alCerrarSesion"/>
  <LoginForm v-else @sesion-iniciada="alIniciarSesion"/>
</template>
