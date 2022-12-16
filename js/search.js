import { debounce } from "./debounce.js";
import { renderListings } from "./renderListings.js";

export function setupSearch(listings) {
  function onSearch(event) {
    event.preventDefault();

    const searchTerm = event.target.value;

    if (!searchTerm.length) {
      renderListings(listings);
      return;
    }

    if (searchTerm.length < 3) {
      return;
    }

    const term = searchTerm.toLowerCase();

    const filteredListings = listings.filter(function (listing) {
      const title = listing.title.toLowerCase();

      const description = listing.description
        ? listing.description.toLowerCase()
        : "";
      const seller = listing.seller.name.toLowerCase();

      const tagsMatch = Boolean(
        listing.tags
          .map((tag) => tag.toLowerCase())
          .filter((tag) => tag.includes(term)).length
      );

      return (
        title.includes(term) ||
        description.includes(term) ||
        seller.includes(term) ||
        tagsMatch
      );
    });

    if (filteredListings.length > 0) {
      renderListings(filteredListings);
    } else {
      alert("There are no listings that match your search term.");
    }
  }

  const searchForm = document.querySelector("form#searchForm");

  searchForm.addEventListener("input", debounce(onSearch, 150));
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    debounce(onSearch, 150);
  });
}
