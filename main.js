

const app = new Vue({
  el: '#app',
  data:{
    // situazione di default
    todos:[
      {
        text: 'Fare la spesa',
        done: false
      },
      {
        text: 'Studiare Vue',
        done: true
      },
      {
        text: 'Pagare la bolletta',
        done: false
      }
    ],
    newTodo: ''
  },
  methods:{
    // funzione di aggiunta
    // chiamata dal click del bottone e dal keyup del tasto enter
    addTodo(){
      // il v-model del input (newTodo) deve essere almene lungo 2 caratteri
      if(this.newTodo.length > 1) {
        // lo pusho nell'array principale
        const newTodoToPush = {
          text: this.newTodo,
          done: false
        }
        this.todos.push(newTodoToPush);
        // resetto
        this.newTodo = '';
      }   
    },
    // funzione di rimozione
    // chiamata dal click del cestino inviado l'index del ciclo dei todos
    removeTodo(index){

      // confirm restituisce true o false (ok, annulla)
      if(confirm(`Sei sicuro di eliminare: ${this.todos[index]}?`)){
        // effettuo lo splice in base all'index passato
        this.todos.splice(index, 1);
      }
    },
    toggleDone(index){
      this.todos[index].done = !this.todos[index].done;
    }
  }
})