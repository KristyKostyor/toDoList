import { todos, saveTodos, storageKey, initTodos } from "./log.js";
import { editTodoItem } from "./editBtn.js";
import { addItem, btn } from "./addItem.js";

export const toDoContainer = document.querySelector(".toDoContainer");

 export const renderTodos = () => {
  toDoContainer.innerHTML = "";
  for (let todo of todos) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const item = document.createElement("li");
    item.innerText = todo.task;
    item.classList.add("toDoAdded");
    if (todo.completed) item.classList.add("toDoCompleted");

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "";
    completeBtn.classList.add("item-btn");
    if (todo.completed) completeBtn.style.display = "none";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "";
    deleteBtn.classList.add("del-btn");
    if (!todo.completed) deleteBtn.style.display = "none";


    const editBtn = document.createElement("button");
     editBtn.type = "button";
     editBtn.title = "edit task";
      editBtn.innerHTML = "";
    editBtn.classList.add('edit-btn');
      editBtn.addEventListener("click", () => {
        editTodoItem(todo);
      });

    completeBtn.addEventListener("click", () => {
      todo.completed = true;
      item.classList.add("toDoCompleted");
      saveTodos();
      completeBtn.style.display = "none";
      deleteBtn.style.display = "inline";
    });

    deleteBtn.addEventListener("click", () => {
      const confirmation = confirm(
        "Вы уверены, что хотите удалить эту задачу?"
      );
      if (confirmation) {
        const index = todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
          todos.splice(index, 1);
          saveTodos();
          renderTodos();
        }
      }
    });

    itemContainer.append(item,editBtn, completeBtn, deleteBtn, );
    toDoContainer.append(itemContainer);
  }
};


