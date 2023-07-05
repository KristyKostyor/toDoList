import renderTodos from "./renderTodos.js";
import { userDisplay } from "./accountName.js";

export const storageKey = `${localStorage.getItem("username")}-todos`;
export let todos = JSON.parse(localStorage.getItem(storageKey)) || [];

export const openModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";

  const continueBtn = document.querySelector(".continue-btn");

  const handleContinue = () => {
    getUsername();
    closeModal();
  };

  continueBtn?.addEventListener("click", handleContinue);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleContinue();
    }
  });
};

export const closeModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
};

export const getUsername = () => {
  const usernameInput = document.querySelector("#usernameInput");
  const username = usernameInput?.value?.trim();

  if (username) {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername && savedUsername !== username) {
      localStorage.removeItem(`${savedUsername}-todos`);
      todos = [];
      saveTodos();
    }

    localStorage.setItem("username", username);
    userDisplay.innerText = `Аккаунт: ${username}`;
    closeModal();
    initTodos();
    renderTodos();
  } else {
    initTodos();
    openModal();
  }
};

export const saveTodos = () => {
  const savedUsername = localStorage.getItem("username");
  const storageKey = `${savedUsername}-todos`;
  localStorage.setItem(storageKey, JSON.stringify(todos));
};

export const initTodos = () => {
  const savedUsername = localStorage.getItem("username");
  const storageKey = `${savedUsername}-todos`;
  todos = JSON.parse(localStorage.getItem(storageKey)) || [];
};

if (!localStorage.getItem("username")) {
  openModal().then(() => {
    getUsername();
    closeModal();
  });
} else {
  getUsername();
}

window.addEventListener("beforeunload", () => {
  saveTodos();
});
initTodos();
