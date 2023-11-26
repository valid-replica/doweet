"use strict";

document.querySelector("#add-task-button").onclick = function () {
  if (document.querySelector("#add-task input").value.length === 0) {
    alert("Please input a task");
  } else {
  }
};

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
