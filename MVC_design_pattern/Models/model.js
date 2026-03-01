console.log("model initialiser")
// Model - Gère les données et la logique métier
class TodoModel {
    constructor() {
        this.todos = [
            { id: 1, text: "Apprendre le MVC", completed: false },
            { id: 2, text: "Coder un exemple", completed: true }
        ];
    }

    // Récupérer toutes les tâches
    getTodos() {
        return this.todos;
    }

    // Ajouter une tâche
    addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    // Supprimer une tâche
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // Basculer l'état d'une tâche
    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}
export default TodoModel;
