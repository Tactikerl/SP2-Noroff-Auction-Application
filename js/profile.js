import { renderProfileHTML } from "./htmlconst.js";
import { profileFetch } from "./api.js";
import { token, userName } from "./utils.js";

const renderProfile = (profile, userName) => {
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = renderProfileHTML(profile, userName);
};

profileFetch(renderProfile, token, userName);
