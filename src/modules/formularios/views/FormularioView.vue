<template>
  <!-- <div class="pa-10">
    <v-text-field
      v-model="main"
      label="Main input"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div> -->

  <!-- <v-row>
    <v-switch v-model="showMessages" label="Show messages"></v-switch>
    <v-input persistent-hint :messages="messages"> Input </v-input>
    
  </v-row> -->
  <v-text-field
      class="pa-5"
      v-model="firstname"
      :rules="nameRules"
      :counter="10"
      label="First name"
      required
    ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],

    showMessages: false,
  }),

  computed: {
    messages() {
      return this.showMessages ? "true" : "false";
    },
  },
};

//   export default {

//     data: () => ({
//       main: '',
//       rules: [
//         value => !!value || 'Required.',
//         value => (value && value.length >= 3) || 'Min 3 characters',
//       ],
//     }),

//     watch:{
//         main(value){
//             console.log(value)
//         }
//     }
//   }
</script>

<style>
</style>