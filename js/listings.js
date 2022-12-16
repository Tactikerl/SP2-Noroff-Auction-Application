import {
  API_AUCTION_URL,
  AUCTION_LISTINGS,
  AUCTION_LISTING_PARAMS,
} from "./api.js";
import { renderListings } from "./renderListings.js";
import { setupSearch } from "./search.js";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

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
    renderListings(listings);
    setupSearch(listings);
  })
  .catch((error) => console.log("error", error));
