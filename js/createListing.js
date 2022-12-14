import { token, myHeaders } from "./utils.js";
import { listingFormHTML } from "./htmlconst.js";
import { API_AUCTION_URL, AUCTION_POST_LISTING } from "./api.js";

const formContainer = document.getElementById("createListing");
function formRender() {
  if (token) {
    formContainer.innerHTML = listingFormHTML;
  } else {
    formContainer.innerHTML =
      "<div><p>Please Log in to create a listing</p></div>";
  }
  document
    .getElementById("publishListing")
    .addEventListener("click", createListing);
}
formRender();

function createListing(event) {
  event.preventDefault();
  const title = document.getElementById("listingTitle").value;
  const description = document.getElementById("itemDescription").value;
  const endsAt = document.getElementById("endDate").value;
  const tags = document.getElementById("itemTags").value;
  const media = document.getElementById("listingMedia").value;

  if (!token) {
    return alert("You are not logged inn, please log in to create listings");
  }
  if (!title || !description || !endsAt || !media) {
    return alert("Please fill inn the required fields for the listing.");
  }

  const listingData = JSON.stringify({
    title: title,
    description: description,
    endsAt: endsAt,
    tags: [tags],
    media: [media],
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: listingData,
  };

  fetch(`${API_AUCTION_URL}${AUCTION_POST_LISTING}`, requestOptions)
    .then((response) => response.json())
    .then(
      (newListing) =>
        (document.location = `/viewListing.html?listings=${newListing.id}`)
    );
}
