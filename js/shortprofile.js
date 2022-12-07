import { profileFetch } from "./api.js";
import { shortProfile } from "./htmlconst.js";

const token = localStorage.getItem("token");
const userName = localStorage.getItem("username");

const renderShortProfile = (profile, userName) => {
  const shortContainer = document.querySelector("#userNav");
  shortContainer.innerHTML = shortProfile(profile, userName);
};

profileFetch(renderShortProfile, token, userName);
