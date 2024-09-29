let todoList = [];

function addTodo(item) {
    todoList.push(item);
}

function displayTodos() {
    console.log("Todos: ");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

addTodo("Buy groceries");
addTodo("Water the plants");
displayTodos();


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
