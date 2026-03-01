import TodoModel from "./Models/model.js"
import TodoView from "./Views/views.js"
import TodoController from "./Controllers/controller.js"

addEventListener('DOMContentLoaded',()=>{
    const model = new TodoModel();
    const view = new TodoView();
    const controller = new TodoController(model, view);
   
})