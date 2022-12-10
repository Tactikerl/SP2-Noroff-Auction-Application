import { dateFormat, dateOptions } from "./utils.js";

import { singleListingHTML, shortSeller } from "./htmlconst.js";

import {
  API_AUCTION_URL,
  AUCTION_BIDS_PARAMS,
  AUCTION_LISTINGS,
} from "./api.js";
export const token = localStorage.getItem("token");

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
function listingRender(listings) {
  const listing = listings;
  // const createDate = new Date(listing.created);
  // const updateDate = new Date(listing.updated);
  // const endDate = new Date(listing.endsAt);
  const dates = dateFormat(listing);
  const sellerDisplay = document.getElementById("sellerDisplay");
  sellerDisplay.innerHTML = shortSeller(listing);
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = singleListingHTML(
    listing,
    dates.createDate,
    dates.updateDate,
    dates.endDate,
    dateOptions
  );
  console.log(listing);
}
