'use strict';

const todoHandlers = require("../controllers/todoController");
const userHandlers = require("../controllers/userController");

module.exports = (app) => {
    app.route('/todos').post(userHandlers.loginRequired, todoHandlers.addTodo);
    app.route('/todos/:id').put(userHandlers.loginRequired, todoHandlers.updateTodo);
    app.route('/todos/:id').delete(userHandlers.loginRequired, todoHandlers.deleteTodo);
    app.route('/todos').get(userHandlers.loginRequired, todoHandlers.listTodos);
    app.route('/todos/:id').get(userHandlers.loginRequired, todoHandlers.showTodo);
}