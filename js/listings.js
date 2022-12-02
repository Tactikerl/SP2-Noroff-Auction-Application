import {
  API_AUCTION_URL,
  AUCTION_LISTINGS,
  AUCTION_LISTING_PARAMS,
} from "./api.js";

const listingsContainer = document.querySelector("#listingsContainer");
const myHeaders = new Headers();
let currentListings = [];
myHeaders.append("Content-Type", "application/json");

export const token = localStorage.getItem("token");
export const userName = localStorage.getItem("username");
export const loginID = document.querySelector("#userNav");

export const userConfirmed = `
  <div class="col-md-6">
    <span>Welcome ${userName}</span>
  </div>`;

export const userNull = `
<span>Hi there, you seem to not be registered/logged in,
  click this <a href="/login.html">
    <button class="btn btn-primary">LOGIN</button>
  </a> button to do so, or peruse our auction listings in limited mode if you wish so.</span>
`;

if (token !== null) {
  loginID.innerHTML = userConfirmed;
} else {
  loginID.innerHTML = userNull;
}
{
  /* ; */
}
const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

fetch(
  `${API_AUCTION_URL}${AUCTION_LISTINGS}${AUCTION_LISTING_PARAMS}`,
  requestOptions
)
  .then((response) => response.json())
  .then((listings) => {
    currentListings = listings;
    renderListings(listings);
  })
  .catch((error) => console.log("error", error));

export function renderListings(listings) {
  listings.forEach(function (getListings, index) {
    const createDate = new Date(getListings.created);
    const endDate = new Date(getListings.endsAt);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const listHTML = `
      <div class="col-sm-6">
        <div class="card" style="width: 18rem;">
            <a href="">
                <div class="card-body">
                    <h5 class="card-title">
                        ${getListings.title}</h5>
                    <p class="card-text" id='itemDscr${index}'>
                    </p>
                </div>
                <img src="${getListings.media}"
                    class="card-img-top" alt="...">
            </a>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Created at:
                    ${createDate.toLocaleDateString("en-US", options)}
                </li>
                <li class="list-group-item">Ends at:
                    ${endDate.toLocaleDateString("en-US", options)}
                </li>
                <li class="list-group-item">Number of bids:
                    ${getListings._count.bids}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another
                    link</a>
            </div>
        </div>
      </div>          
      `;
    listingsContainer.innerHTML += listHTML;
    const parentContainer = document.querySelector(`#itemDscr${index}`);
    const listDscr = document.createElement("span");
    listDscr.textContent = `${getListings.description}`;
    parentContainer.appendChild(listDscr);
  });
}
