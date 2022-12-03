import { API_AUCTION_URL, AUCTION_PROFILE } from "./api.js";
import { userNull } from "./listings.js";

const token = localStorage.getItem("token");
const userName = localStorage.getItem("username");
const loginID = document.querySelector("#userNav");
console.log(loginID);

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

fetch(`${API_AUCTION_URL}${AUCTION_PROFILE}/${userName}`, requestOptions)
  .then((response) => response.json())
  .then((profile) => {
    const shortProfile = `
    <div class="col-md-6">
  <span>Welcome ${userName}</span>
  <span>You currently have ${profile.credits} credits</span>
  <span>You have ${profile._count.listings} listings registered</span>
  <img src="${profile.avatar}" alt="" class="img-fluid">
  <div class="col-md-6">
    <a href="/profile.html"><button class="btn btn-primary"
        id="profileBtn">Profile</button></a>
  </div>
  <div class="col-md-6">
    <button class="btn btn-danger"
      id="logoutBtn">Logout</button>
  </div>
</div>`;

    if (profile.name === userName) {
      loginID.innerHTML = shortProfile;
    } else {
      loginID.innerHTML = userNull;
    }
  })
  .catch((error) => console.log("error", error));
