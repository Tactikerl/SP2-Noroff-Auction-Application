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

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

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

function loginUser(event) {
  event.preventDefault();

  const userEmail = document.getElementById("userEmail").value.toLowerCase();
  const userPassword = document.getElementById("userPassword").value;

  if (!userEmail || !userPassword) {
    return;
  }
  login(userEmail, userPassword);
}
