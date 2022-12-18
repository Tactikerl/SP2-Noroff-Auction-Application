import { API_AUCTION_URL, AUCTION_LOGIN, AUCTION_REGISTER } from "../api.js";
import { loginHTML, registerHTML } from "../../html/htmlconst.js";
import { myHeaders } from "../../tools/utils.js";

const formCntr = document.querySelector("#formContainer");
formCntr.innerHTML = loginHTML;
document.getElementById("btnradio1").addEventListener("click", () => {
  formCntr.innerHTML = loginHTML;
  document.getElementById("loginBtn").addEventListener("click", loginUser);
});
document.getElementById("loginBtn").addEventListener("click", loginUser);
document.getElementById("btnradio2").addEventListener("click", () => {
  formCntr.innerHTML = registerHTML;
  document
    .getElementById("registerBtn")
    .addEventListener("click", registerUser);
});

export function login(userEmail, userPassword) {
  const raw = JSON.stringify({
    email: userEmail,
    password: userPassword,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(`${API_AUCTION_URL}${AUCTION_LOGIN}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.accessToken == undefined) {
        alert(result.message);
        return;
      }
      const token = result.accessToken;
      localStorage.setItem("token", token);
      const userName = result.name;
      localStorage.setItem("username", userName);
      document.location = "/index.html";
    })
    .catch((error) => console.log("error", error));
}

export function loginUser(event) {
  event.preventDefault();

  const userEmail = document.getElementById("userEmail").value.toLowerCase();
  const userPassword = document.getElementById("userPassword").value;

  if (!userEmail || !userPassword) {
    return;
  }
  login(userEmail, userPassword);
}

export function registerUser() {
  const newUserName = document.getElementById("newUserName").value;
  const newUserEmail = document
    .getElementById("newUserEmail")
    .value.toLowerCase();
  const newUserAvatar = document.getElementById("newUserAvatar").value;
  const newUserPassword = document.getElementById("newUserPassword").value;
  const regData = JSON.stringify({
    name: newUserName,
    email: newUserEmail,
    avatar: newUserAvatar,
    password: newUserPassword,
  });
  const regOptions = {
    method: "POST",
    headers: myHeaders,
    body: regData,
  };
  fetch(`${API_AUCTION_URL}${AUCTION_REGISTER}`, regOptions)
    .then((response) => response.json())
    .then(() => {
      login(newUserEmail, newUserPassword);
    });
}
