import { todos, saveTodos } from "./log.js";
import { renderTodos, toDoContainer }from "./renderTodos.js";
import { editTodoItem } from "./editBtn.js";

const inputField = document.querySelector(".inputField");
export const btn = document.querySelector(".btn");

export const addItem = () => {
  if (inputField.value.trim() === "") {
    alert("Сначала введите задачу!");
    return;
  }

  const newTodo = {
    task: inputField.value,
    completed: false,
    id:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
  inputField.value = "";
  btn.disabled = true;
};

btn.disabled = inputField.value.trim() === "";

btn.addEventListener("click", addItem);

inputField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addItem();
  }
  btn.disabled = inputField.value.trim() === "";
});

inputField.addEventListener("input", () => {
  btn.disabled = inputField.value.trim() === "";
});

