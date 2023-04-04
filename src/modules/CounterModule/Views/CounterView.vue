<template>
    <v-container>
        <Counter mensaje="Entraron"  :startnum="2"/>
        <Counter mensaje="Salieron" :startnum="5"/>
    </v-container>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'CounterView',
    components:{
        Counter : defineAsyncComponent( () => import('../components/Counter/Counter.vue') )
    }
}
</script>