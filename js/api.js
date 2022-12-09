export const API_HOST_URL = "https://nf-api.onrender.com";
export const API_BASE = "/api/v1";
export const API_AUCTION_BASE = "/auction";
export const API_AUCTION_URL = `${API_HOST_URL}${API_BASE}${API_AUCTION_BASE}`;

export const AUCTION_PROFILE = "/profiles";
export const AUCTION_PROFILE_PARAMS = "/?sort&sortOrder&limit&offset&_listings";
export const AUCTION_PROFILE_LISTINGS =
  "/listings?sort&sortOrder&limit&offset&_seller&_bids&name";

export const AUCTION_LOGIN = "/auth/login";
export const AUCTION_REGISTER = "/auth/register";
export const AUCTION_LISTINGS = "/listings/";
export const AUCTION_BIDS_PARAMS = "?_seller=true&_bids=true";
export const AUCTION_LISTING_PARAMS = "?limit=50&_seller=&_bids=";

export function profileFetch(callback, token, userName) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(`${API_AUCTION_URL}${AUCTION_PROFILE}/${userName}`, requestOptions)
    .then((response) => response.json())
    .then((profile) => {
      callback(profile, userName);
    })
    .catch((error) => console.log("error", error));
}
