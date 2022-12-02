import { API_AUCTION_URL, AUCTION_LOGIN, AUCTION_REGISTER } from "./api.js";
import { loginHTML, registerHTML } from "./htmlconst.js";

const formCntr = document.querySelector("#formContainer");
formCntr.innerHTML = loginHTML;
document.getElementById("btnradio1").addEventListener("click", () => {
  formCntr.innerHTML = loginHTML;
});
document.getElementById("btnradio2").addEventListener("click", () => {
  formCntr.innerHTML = registerHTML;
});

export function login(userEmail, userPassword) {
  const myHeaders = new Headers();
  // myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

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
document.getElementById("loginBtn").addEventListener("click", loginUser);
