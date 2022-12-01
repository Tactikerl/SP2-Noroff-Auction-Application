// /**
//  *
//  * @param {event} event Logs the user inn if they present a valid email and password that is registered to the API
//  * @returns - Guard set up to hinder empty input boxes.
//  */
// function loginUser(event) {
//   event.preventDefault();

//   const userEmail = document.getElementById("userEmail").value.toLowerCase();
//   const userPassword = document.getElementById("userPassword").value;

//   if (!userEmail || !userPassword) {
//     return;
//   }
//   login(userEmail, userPassword);
// }

// /**
//  * initializes the searchbar if the user is logged inn.
//  */
// function initSearchForm() {
//   const searchForm = document.getElementById("loginUser");

//   if (searchForm) {
//     searchForm.addEventListener("submit", loginUser);
//   }
// }

// initSearchForm();
import { API_AUCTION_URL, AUCTION_LOGIN, AUCTION_REGISTER } from "./api.js";

const loginHTML = `
  <form action="" class="row g-3" id="loginForm">
      <div class="col-md-6">
          <label for="userEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="userEmail">
      </div>
      <div class="col-md-6">
          <label for="userPassword"
              class="form-label">Password</label>
          <input type="password" class="form-control"
              id="userPassword">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"
        id="loginBtn">Login</button>
      </div>
  </form>`;

const registerHTML = `
  <form action="" class="row g-3" id="registerForm">
      <div class="col-md-6">
          <label for="newUserName"
              class="form-label">Username</label>
          <input type="text" class="form-control"
              id="newUserName">
      </div>
      <div class="col-md-6">
          <label for="newUserEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="userEmail">
      </div>
      <div class="col-md-6">
          <label for="userPassword"
              class="form-label">Password</label>
          <input type="password" class="form-control"
              id="userPassword">
      </div>
      <div class="col-md-6">
          <label for="repeatPassword"
              class="form-label">Repeat Password</label>
          <input type="text" class="form-control"
              id="repeatPassword">
      </div>
      <div class="col-md-6">
          <label for="avatar" class="form-label">Profile
              Avatar</label>
          <input type="url" name="avatar" id="profileAvatar" placeholder="URL">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"
        id="profileBtn">Create Profile</button>
      </div>
  </form>`;

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
