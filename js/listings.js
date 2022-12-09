import {
  API_AUCTION_URL,
  AUCTION_LISTINGS,
  AUCTION_LISTING_PARAMS,
} from "./api.js";
import {
  indexListingHTML,
  singleListingHTML,
  shortSeller,
} from "./htmlconst.js";

import { dateFormat, dateOptions } from "./utils.js";

const listingsContainer = document.querySelector("#listingsContainer");
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let currentListings = [];

export const token = localStorage.getItem("token");
export const userName = localStorage.getItem("username");
export const loginID = document.querySelector("#userNav");

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
    // const createDate = new Date(getListings.created);
    // const updateDate = new Date(getListings.updated);
    // const endDate = new Date(getListings.endsAt);

    const dates = dateFormat(getListings);

    listingsContainer.innerHTML += indexListingHTML(
      getListings,
      dates.createDate,
      dates.updateDate,
      dates.endDate,
      dateOptions,
      index
    );
    console.log(dates);
    const parentContainer = document.querySelector(`#itemDscr${index}`);
    const listDscr = document.createElement("span");
    listDscr.textContent = `${getListings.description}`;
    parentContainer.appendChild(listDscr);
  });
}

export function listingRender(listings) {
  const listing = listings;
  const createDate = new Date(listing.created);
  const updateDate = new Date(listing.updated);
  const endDate = new Date(listing.endsAt);
  const sellerDisplay = document.getElementById("sellerDisplay");
  sellerDisplay.innerHTML = shortSeller(listing);
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = singleListingHTML(
    listing,
    createDate,
    updateDate,
    endDate,
    dateOptions
  );
}
