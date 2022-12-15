import {
  API_AUCTION_URL,
  AUCTION_LISTINGS,
  AUCTION_LISTING_PARAMS,
} from "./api.js";
import { indexListingHTML } from "./htmlconst.js";
import { dateFormat, dateOptions } from "./utils.js";
// , searchInit
const listingsContainer = document.querySelector("#listingsContainer");
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// let currentListings = [];

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
    // currentListings = listings;
    renderListings(listings);
  })
  .catch((error) => console.log("error", error));

export function renderListings(listings) {
  listings.forEach(function (getListings, index) {
    const dates = dateFormat(getListings);
    listingsContainer.innerHTML += indexListingHTML(
      getListings,
      dates.createDate,
      dates.updateDate,
      dates.endDate,
      dateOptions,
      index
    );

    const parentContainer = document.querySelector(`#itemDscr${index}`);
    const listDscr = document.createElement("span");
    listDscr.textContent = `${getListings.description}`;
    parentContainer.appendChild(listDscr);
  });
  // searchInit(listings)
}
