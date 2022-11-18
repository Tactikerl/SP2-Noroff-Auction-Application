// const listingsContainer = document.querySelector

// fetch(`${API_AUCTION_URL}${AUCTION_LISTING}${AUCTION_BIDS_PARAMS}`)
const listingsContainer = document.querySelector("#listingsContainer");
const myHeaders = new Headers();
let currentListings = [];
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

fetch(
  "https://nf-api.onrender.com/api/v1/auction/listings?limit=50&_seller=&_bids=",
  requestOptions
)
  .then((response) => response.json())
  .then((listings) => {
    currentListings = listings;
    renderListings(listings);
  })
  .catch((error) => console.log("error", error));

function renderListings(listings) {
  listings.forEach(function (getListings) {
    listingsContainer.innerHTML += `<li class="d-flex" id="listObject">
  
  <div class="flex-grow-1 ms-3">
     <h4 class="fs-5">
         <a href="#fakelink">
             ${getListings.title}
         </a>
     </h4>
    
     <h6 class="fs-6">
         <small>
             ${getListings.tags}
         </small>
     </h6>
     <img class="media-object user-message"
       src="${getListings.media}" alt="Image of ${getListings.title}"
     <p>
         ${getListings.description}
     </p>
     <hr>
  </div>
  </li>`;
  });
}
