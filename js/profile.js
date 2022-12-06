import { API_AUCTION_URL, AUCTION_PROFILE } from "./api.js";
import { userNull } from "./listings.js";
import { logout } from "./logout.js";

const token = localStorage.getItem("token");
const userName = localStorage.getItem("username");
const loginID = document.querySelector("#userNav");
const profileContainer = document.getElementById("profileContainer");

const profileHTML = ``;
profileContainer.innerHTML = profileHTML;
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
    if (profile.name === userName) {
      const shortProfile = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${profile.avatar}"
              class="img-fluid rounded-start"
              alt="profile image for $[userName]">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Welcome ${userName}</h5>
              <p class="card-text">
                You currently have ${profile.credits}
                credits in your account and have
                ${profile._count.listings} listings
                registered
              </p>
              <p class="card-text"></p>
              <div class="col-md-6">
                <a href="/profile.html"><button
                    class="btn btn-primary"
                    id="profileBtn">Profile</button></a>
              </div>
              <div class="col-md-6">
                <button class="btn btn-danger"
                  id="logoutBtn">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      loginID.innerHTML = shortProfile;
      document.getElementById("logoutBtn").addEventListener("click", logout);
    } else {
      loginID.innerHTML = userNull;
    }
  })
  .catch((error) => console.log("error", error));
