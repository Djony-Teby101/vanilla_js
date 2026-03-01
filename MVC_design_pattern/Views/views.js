// View - Gère l'affichage
class TodoView {
    constructor() {
        // Récupération des éléments du DOM
        this.app = document.getElementById('app');
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.submitButton = document.createElement('button');
        this.todoList = document.createElement('ul');

        // Configuration des éléments
        this.input.type = 'text';
        this.input.placeholder = 'Ajouter une tâche...';
        this.submitButton.textContent = 'Ajouter';
        
        // Assemblage
        this.form.appendChild(this.input);
        this.form.appendChild(this.submitButton);
        this.app.appendChild(this.form);
        this.app.appendChild(this.todoList);
    }

    // Afficher la liste des tâches
    displayTodos(todos) {
        // Vider la liste
        this.todoList.innerHTML = '';

        // Créer les éléments pour chaque tâche
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.id = todo.id;
            li.className = todo.completed ? 'completed' : '';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;

            const span = document.createElement('span');
            span.textContent = todo.text;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer';
            deleteButton.className = 'delete-btn';

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            this.todoList.appendChild(li);
        });
    }

    // Récupérer la valeur de l'input
    getInputValue() {
        return this.input.value;
    }

    // Effacer l'input
    clearInput() {
        this.input.value = '';
    }

    // Gestionnaires d'événements
    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (this.input.value.trim()) {
                handler(this.input.value);
                this.clearInput();
            }
        });
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete-btn') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }
}
export default TodoView;