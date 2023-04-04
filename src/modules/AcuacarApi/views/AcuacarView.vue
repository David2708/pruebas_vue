<template>
  <v-container>
    <v-btn class="mr-4" @click="ingresar" color="success"> Ingresar </v-btn>
    <v-btn @click="registrarse" color="success"> Registrarse </v-btn>
  </v-container>
</template>

<script>

import { login, register } from "../services/usuariosServices";

export default {

  methods: {

    async ingresar() {
      await login( "user1@user.com" , "12345" )
    },

    async registrarse() {
      await register( "user1", "user1@user.com" , "12345" )
    },

  },

};
</script>

<style>
</style>