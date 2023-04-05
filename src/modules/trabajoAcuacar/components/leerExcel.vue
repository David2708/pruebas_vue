<template>
  <div>
    <input style="display:none" type="file" ref="fileInput" @change="convertToJSON" accept=".xlsx"/>
    <v-btn @click="uploadFile">Subir archivo</v-btn>
  </div>
</template>

<script>
import { read, utils } from 'xlsx';


export default {
  methods: {
    uploadFile() {
      // Disparar el evento "click" del input de tipo file
      this.$refs.fileInput.click();
    },
    convertToJSON(event) {
      try {
        // Obtener el archivo seleccionado
        const file = event.target.files[0];

        // Leer el archivo utilizando FileReader
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // Convertir los datos a JSON utilizando SheetJS
            const data = new Uint8Array(reader.result);
            const workbook = read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = utils.sheet_to_json(sheet);
            console.log(json);
            if(Object.keys(json[0]).length === 3) {
                console.log('Correcto')
            }else{
                console.log('Incorrecto')
            }
        }
      } catch (error) {
        //Error al no seleccionar el archivo
        console.log(error)
      }
    },
  },
};
</script>