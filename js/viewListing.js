// import { API_AUCTION_URL } from "./api.js";

import {
  API_AUCTION_URL,
  AUCTION_BIDS_PARAMS,
  AUCTION_LISTINGS,
} from "./api.js";
import { token } from "./listings.js";
import { listingRender } from "./listings.js";

const urlSearchParams = new URLSearchParams(window.location.search);

const listingID = urlSearchParams.get("listings");

// export function sortList(list) {
//   return [...list]
//     .sort((a, b) => new Date(b.created) - new Date(a.created))
//     .reverse();
// }
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

fetch(
  `${API_AUCTION_URL}${AUCTION_LISTINGS}${listingID}${AUCTION_BIDS_PARAMS}`,
  requestOptions
)
  .then((response) => response.json())
  .then((listing) => {
    listingRender(listing);
  });
