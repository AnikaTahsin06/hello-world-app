export class Todos {
    constructor(){
        this.todoList = [
            {
                description: "Aurelia js",
                done: false
            },
            {
                description: "C#",
                done: false
            },
            {
                description: ".Net",
                done: false
            },
            {
                description: "Entity framework",
                done: false
            }
        ];
        this.newItem = '';
    }

    activate(params){
        this.slug = params.slug
    }

    addTodo() {
        this.todoList.push(
            {
                description: this.newItem,
                done: false
            }
        )
        this.newItem = '';
    }

    removeTodo(todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
    }
}