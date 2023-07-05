import {
  openModal,
  getUsername,
  closeModal,
  storageKey,
  todos,
  saveTodos,
  initTodos,
} from "./module/log.js";
import addItem from "./module/addItem.js";
import  renderTodos  from "./module/renderTodos.js";
import { userDisplay } from "./module/accountName.js";

const handleAuth = () => {
  const savedUsername = localStorage.getItem("username");
  if (!savedUsername) {
    openModal().then(() => {
      getUsername();
      closeModal();
      init();
    });
  } else {
    getUsername();
    init();
  }
};

handleAuth();

window.addEventListener("beforeunload", () => {
  saveTodos();
});

const  init = () => {
  initTodos();
  renderTodos();
}

init();
