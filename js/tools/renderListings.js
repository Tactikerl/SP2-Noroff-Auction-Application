import { indexListingHTML } from "../html/htmlconst.js";
import {
  dateFormat,
  dateOptions,
  defaultListingImg,
  mediaFileRegex,
} from "./utils.js";

const listingsContainer = document.querySelector("#listingsContainer");

function clearHTML() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
}

HTMLElement.prototype.clear = clearHTML;

export function renderListings(listings) {
  listingsContainer.clear();

  listings.forEach(function (getListings, index) {
    if (
      getListings.media == undefined ||
      getListings.media.length == 0 ||
      !mediaFileRegex.test(getListings.media[0])
    ) {
      getListings.media = [defaultListingImg];
    }
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
}
