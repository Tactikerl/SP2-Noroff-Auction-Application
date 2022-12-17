import {
  API_AUCTION_URL,
  AUCTION_LISTINGS,
  AUCTION_LISTING_PARAMS,
} from "../api/api.js";
import { renderListings } from "../tools/renderListings.js";
import { setupSearch } from "../tools/search.js";
import { locationProfileCheck } from "./shortprofile.js";

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

locationProfileCheck(true, false);
