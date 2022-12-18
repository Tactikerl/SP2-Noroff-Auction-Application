import {
  dateFormat,
  dateOptions,
  myHeaders,
  userName,
} from "../tools/utils.js";

import { singleListingHTML } from "../html/htmlconst.js";

import { defaultListingImg, mediaFileRegex } from "../tools/utils.js";

import {
  API_AUCTION_URL,
  AUCTION_BIDS_PARAMS,
  AUCTION_LISTINGS,
} from "../api/api.js";

import { locationProfileCheck } from "./shortprofile.js";

if (!userName) {
  window.location = "../login/index.html";
}

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

  if (
    listing.media == undefined ||
    listing.media.length == 0 ||
    !mediaFileRegex.test(listing.media[0])
  ) {
    listing.media = [defaultListingImg];
  }

  const listingContainer = document.getElementById("listingContainer");
  let bidInfo = ``;
  listing.bids
    .sort((a, b) => a.amount - b.amount)
    .forEach(function (bids, index) {
      const dates = dateFormat(bids);
      bidInfo += `
    <div class="" id="bidNmbr${index}">
    <p class=""><span class="fw-semibold">Bidder</span> :
            ${bids.bidderName}</p>
    <p class=""><span class="fw-semibold">Bid Amount</span> :
            ${bids.amount}</p>
    <p class=""><span class="fw-semibold">Time of bid</span> :
            ${dates.createDate.toLocaleDateString("en-US", dateOptions)}</p>
            <hr>
  </div>
  `;
    });
  listingContainer.innerHTML = singleListingHTML(
    listing,
    dates.endDate,
    dateOptions,

    bidInfo
  );

  document.getElementById("bidBtn").addEventListener("click", placeBid);

  if (listing.media.length > 1) {
    const myCollapseEl = document.querySelector("#listingCarousel");
    const myCarouselEl = document.querySelector("#modalImg");
    const carousel =
      window.bootstrap.Carousel.getOrCreateInstance(myCarouselEl);
    myCollapseEl.addEventListener("slid.bs.carousel", (event) => {
      carousel.to(event.to);
    });
  }
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

locationProfileCheck(true, false);
