<template>
    <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in 2"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
         <v-row>
            <v-col sm="6">
                fdñjdhfaidfasdf
            </v-col>
            <v-col sm="6">
                kvjañofijdñoia
            </v-col>
         </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>