// const listingsContainer = document.querySelector

// fetch(`${API_AUCTION_URL}${AUCTION_LISTING}${AUCTION_BIDS_PARAMS}`)

let raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow",
};

fetch(
  "https://nf-api.onrender.com/api/v1/auction/listings?limit=50&_seller=&_bids=",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
