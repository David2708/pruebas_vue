export default {

    data(){
      return {
        editarForm: false,
        idTarea: '',
        titulo:'',
        descripcion: '',
        tareas: [
          {
            id:0,
            titulo: 'Lorem Ipsum',
            descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime id quidem deserunt ipsam ab iusto! Vero esse, quod voluptate sunt non officiis molestias exercitationem in! Voluptatem accusantium placeat dolorum nihil?'
          }
        ]
      }
    },
  
    methods: {

      agregarTarea(){
        if(this.titulo == '' || this.descripcion == '') return
        this.tareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion
        })
        this.titulo = ''
        this.descripcion = ''
      },

      eliminarTarea(id){
        console.log(id)
        this.tareas = this.tareas.filter( tarea => tarea.id != id )
      },

      editar(id){

        this.tareas.forEach(tarea => {
          if(tarea.id == id){
            this.titulo = tarea.titulo
            this.descripcion = tarea.descripcion
            this.idTarea = id
            return
          }
        });

        this.editarForm = true

      },

      editarTarea(){

        this.tareas.forEach(tarea => {
          if(tarea.id == this.idTarea){
            tarea.titulo = this.titulo
            tarea.descripcion= this.descripcion
            return
          }
        });

        this.titulo = ''
        this.descripcion = ''
        this.idTarea = ''

        this.editarForm = false


      }

    }
  
  
  };