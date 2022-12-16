import { dateFormat, dateOptions, myHeaders } from "../tools/utils.js";

import { singleListingHTML, shortSeller } from "../html/htmlconst.js";

import {
  API_AUCTION_URL,
  AUCTION_BIDS_PARAMS,
  AUCTION_LISTINGS,
} from "../api/api.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const listingID = urlSearchParams.get("listings");

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
    highBid = listing.bids.length > 0 ? listing.bids.at(-1).amount : 0;
  });

function listingRender(listing) {
  const dates = dateFormat(listing);
  const sellerDisplay = document.getElementById("sellerDisplay");
  sellerDisplay.innerHTML = shortSeller(listing);
  const listingContainer = document.getElementById("listingContainer");
  let bidInfo = ``;
  listing.bids.forEach(function (bids, index) {
    const dates = dateFormat(bids);
    bidInfo += `<div class="col m-1 border p-3 bg-light ">
    <ul class="list-group" id="bidNmbr${index}">
    <li class="list-group-item"><span>Bidder:
            ${bids.bidderName}</span></li>
    <li class="list-group-item"><span>Bid Amount:
            ${bids.amount}</span></li>
    <li class="list-group-item"><span>Time of bid:
            ${dates.createDate.toLocaleDateString(
              "en-US",
              dateOptions
            )}</span></li>

</ul>
  </div>`;
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
