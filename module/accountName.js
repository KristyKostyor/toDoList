
const savedUsername = localStorage.getItem("username");
export const userDisplay = document.createElement("div");
userDisplay.style.position = "absolute";
userDisplay.style.right = "10px";
userDisplay.style.top = "10px";
userDisplay.classList.add("userLog");
document.body.append(userDisplay);

userDisplay.innerText = `Аккаунт: ${savedUsername}`;
