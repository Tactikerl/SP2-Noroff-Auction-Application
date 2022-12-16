import { indexListingHTML } from "./htmlconst.js";
import { dateFormat, dateOptions } from "./utils.js";

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
