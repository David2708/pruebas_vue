export default{

    props:{
        mensaje:{
            type: String
        },
        startnum:{
            type: Number,
            default: 1
        }
    },

    data(){
        return{
            counter: this.startnum
        }
    },

    methods:{
        incrementar(){
            this.counter ++
        },

        decrementar(){
            this.counter --
        }
    },


    computed: {
        potencia(){
            return this.counter ** 2
        }
    }

}