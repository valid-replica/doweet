"use strict";

let todoInput = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");
let addTodo = document.querySelector("#add-task-button");

addTodo.onclick = function () {
  if (todoInput.value.length === 0) {
    alert("Please input a task");
  } else {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    updateTodoList();
  }
};

function updateTodoList() {
  todoList.innerHTML = "";

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <li class="todo">
            <span>${todo}</span>
            <i class="fa-solid fa-trash trash" onclick="deleteTodo(${index})" aria-hidden="true"></i>
    </li>
    `;
    todoList.appendChild(li);
  });
}

function deleteTodo(index) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  updateTodoList();
}

let allButton = document.querySelector("#all-button");
let todoButton = document.querySelector("#todo-button");
let completedButton = document.querySelector("#completed-button");

allButton.onclick = function () {
  allButton.style.cssText = `color: #181123; background-color: #fafafa; font-size: 26px;`;
};

todoButton.onclick = function () {
  todoButton.style.cssText = `color: #181123; background-color: #fafafa; font-size: 26px;`;
};

completedButton.onclick = function () {
  completedButton.style.cssText = `color: #181123; background-color: #fafafa; font-size: 26px;`;
};

updateTodoList();
