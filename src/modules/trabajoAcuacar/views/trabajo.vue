<template>
  <div class="ma-5">
    <LeerExcel />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    LeerExcel: defineAsyncComponent(() =>
      import("../components/leerExcel.vue")
    ),
  },
};
</script>

<style>
</style>