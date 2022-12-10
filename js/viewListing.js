import { dateFormat, dateOptions, myHeaders } from "./utils.js";

import { singleListingHTML, shortSeller } from "./htmlconst.js";

import {
  API_AUCTION_URL,
  AUCTION_BIDS_PARAMS,
  AUCTION_LISTINGS,
} from "./api.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const listingID = urlSearchParams.get("listings");
console.log(listingID);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

let highBid = 0;
fetch(
  `${API_AUCTION_URL}${AUCTION_LISTINGS}${listingID}${AUCTION_BIDS_PARAMS}`,
  requestOptions
)
  .then((response) => response.json())
  .then((listing) => {
    listingRender(listing);
    highBid = listing.bids.at(-1).amount;
  });

function listingRender(listing) {
  const dates = dateFormat(listing);
  const sellerDisplay = document.getElementById("sellerDisplay");
  sellerDisplay.innerHTML = shortSeller(listing);
  const listingContainer = document.getElementById("listingContainer");
  let bidInfo = ``;
  listing.bids.forEach(function (bids, index) {
    const dates = dateFormat(bids);
    const bidsHTML = `<div class="col-md-4">
    <ul id="bidNmbr${index}">
      <li>
        <span>bidder: ${bids.bidderName}</span>
      </li>
      <li>
        <span>amount: ${bids.amount}</span>
      </li>      
      <li>
        <span>time of bid: ${dates.createDate.toLocaleDateString(
          "en-US",
          dateOptions
        )}</span>
      </li>
    </ul>
  </div>`;
    bidInfo += bidsHTML;
  });
  listingContainer.innerHTML = singleListingHTML(
    listing,
    dates.createDate,
    dates.updateDate,
    dates.endDate,
    dateOptions,
    bidInfo
  );
  document.getElementById("bidBtn").addEventListener("click", placeBid);
}

function createBid(userBid) {
  if (highBid >= userBid) {
    alert("New bid must be higher than current highest bid");
    return;
  }
  const raw = JSON.stringify({
    amount: parseInt(userBid),
  });

  const bidOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(
    `${API_AUCTION_URL}${AUCTION_LISTINGS}${listingID}/bids?_seller=true&_bids=true`,
    bidOptions
  )
    .then((response) => response.json())
    .then(() => location.reload())
    .catch((error) => console.log("error", error));
}

function placeBid(event) {
  event.preventDefault();
  const userBid = document.getElementById("userBid").value;
  if (!userBid) {
    return;
  }
  createBid(userBid);
}
