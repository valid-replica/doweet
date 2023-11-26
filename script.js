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
  allButton.style.cssText =
    "background-color: #fbbf24; background-image: linear-gradient(45deg, #fbbf24, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
};

todoButton.onclick = function () {
  todoButton.style.cssText =
    "background-color: #fbbf24; background-image: linear-gradient(45deg, #fbbf24, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
};

completedButton.onclick = function () {
  completedButton.style.cssText =
    "background-color: #fbbf24; background-image: linear-gradient(45deg, #fbbf24, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
};
