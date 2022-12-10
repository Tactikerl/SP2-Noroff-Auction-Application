import { profileFetch } from "./api.js";
import { shortProfile } from "./htmlconst.js";
import { logout } from "./logout.js";
import { userNull } from "./htmlconst.js";
import { token, userName } from "./utils.js";

const shortContainer = document.querySelector("#userNav");
const renderShortProfile = (profile, userName) => {
  shortContainer.innerHTML = shortProfile(profile, userName);
  document.getElementById("logoutBtn").addEventListener("click", logout);
};

profileFetch(renderShortProfile, token, userName);

const renderNoUser = () => {
  if (!userName) {
    shortContainer.innerHTML = userNull();
  }
};

renderNoUser();
