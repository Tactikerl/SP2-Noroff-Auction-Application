import { profileFetch } from "../api/api.js";
import { shortProfile } from "../html/htmlconst.js";
import { logout } from "../api/auth/logout.js";
import { userNull } from "../html/htmlconst.js";
import { token, userName } from "../tools/utils.js";

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
