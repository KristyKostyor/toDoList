import  { renderTodos } from './renderTodos.js';
import { addItem, btn } from './addItem.js';
import { todos, saveTodos, storageKey, initTodos } from "./log.js";

const inputField = document.querySelector(".inputField");
let editingTodoId = null;

 export const editTodoItem = (todo) => {
  inputField.value = todo.task;
  editingTodoId = todo.id;
  btn.innerText = "V";
  btn.removeEventListener("click", addItem);
  btn.addEventListener("click", saveEditedItem);
};

 export const saveEditedItem = () => {
  if (inputField.value.trim() === "") {
    alert("Сначала введите задачу!");
    return;
  }     

const todoIndex = todos.findIndex((todo) => todo.id === editingTodoId);
  if (todoIndex !== -1) {
    todos[todoIndex].task = inputField.value;
    editingTodoId = null;
    btn.innerText = "+";
    btn.removeEventListener("click", saveEditedItem);
    btn.addEventListener("click", addItem);
  }

  saveTodos();
  renderTodos();
  inputField.value = "";
  btn.disabled = true;
};
