import {
  openModal,
  getUsername,
  closeModal,
  storageKey,
  todos,
  saveTodos,
  initTodos,
  handleAuth
} from "./module/log.js";
import addItem from "./module/addItem.js";
import  renderTodos  from "./module/renderTodos.js";
import { userDisplay } from "./module/accountName.js";



window.addEventListener("beforeunload", () => {
  saveTodos();
});

const  init = () => {
  initTodos();
  renderTodos();
}

init();
