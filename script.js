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
      initTodos();
      renderTodos();
    });
  } else {
    getUsername();
    closeModal();
    initTodos();
    renderTodos();
  }
};

handleAuth();

window.addEventListener("beforeunload", () => {
  saveTodos();
});

const  init = () => {
 
  getUsername();
  openModal();
  initTodos();
  renderTodos();
}

init();
