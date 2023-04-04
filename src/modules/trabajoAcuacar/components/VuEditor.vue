<template>
  <div>
    <vueditor ref="editor"></vueditor>
    <v-btn class="mr-4" @click="mostrarContenido">Mostrar contenido</v-btn>
    <v-btn @click="establecerContenido">Establecer contenido</v-btn>
  </div>
</template>

<script>
import 'vueditor/dist/style/vueditor.min.css'
import { createEditor } from 'vueditor'

export default {
  name: 'MyComponent',
  mounted() {
    // Crear una instancia de vueditor y establecerla como una propiedad de datos del componente
    this.editorInstance = createEditor(this.$refs.editor.$el, {})
  },
  methods: {
    mostrarContenido() {
      // Obtener el contenido actual del editor y mostrarlo en una alerta
      alert(this.editorInstance.getContent())
    },
    establecerContenido() {
      // Establecer el contenido del editor
      this.editorInstance.setContent('Contenido de ejemplo')
    }
  }
}
</script>