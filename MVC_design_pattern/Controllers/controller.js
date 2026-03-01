

// Controller - Fait le lien entre Model et View
class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Afficher les tâches initiales
        this.onTodoListChanged(this.model.getTodos());

        // Lier les événements
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
    }

    // Mettre à jour la vue quand les données changent
    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos);
    }

    // Gérer l'ajout d'une tâche
    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText);
        this.onTodoListChanged(this.model.getTodos());
    }

    // Gérer la suppression d'une tâche
    handleDeleteTodo = (id) => {
        this.model.deleteTodo(id);
        this.onTodoListChanged(this.model.getTodos());
    }

    // Gérer le changement d'état
    handleToggleTodo = (id) => {
        this.model.toggleTodo(id);
        this.onTodoListChanged(this.model.getTodos());
    }
}

export default TodoController;