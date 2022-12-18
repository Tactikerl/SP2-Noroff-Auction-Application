import { renderProfileHTML } from "../html/htmlconst.js";
import { profileFetch } from "../api/api.js";

import { token, userName, myHeaders } from "../tools/utils.js";
import { renderListings } from "../tools/renderListings.js";
import { userCheck } from "../api/auth/logout.js";

if (!userName) {
  window.location = "../login/index.html";
}
const renderProfile = (profile, userName) => {
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = renderProfileHTML(profile, userName);
  document
    .getElementById("avatarUrlBtn")
    .addEventListener("click", changeAvatarURL);
  userCheck();
  renderListings(profile.listings, true);
};

if (userName) {
  profileFetch(renderProfile, token, userName);
}

function changeAvatarURL() {
  const newAvatarURL = document.getElementById("newAvatarURL").value;
  const urlData = JSON.stringify({
    avatar: newAvatarURL,
  });
  console.log(newAvatarURL);
  const urlOptions = {
    method: "PUT",
    headers: myHeaders,
    body: urlData,
  };
  fetch(
    `https://nf-api.onrender.com/api/v1/auction/profiles/${userName}/media`,
    urlOptions
  )
    .then((response) => response.json())
    .then(() => {
      document.getElementById("userAvatar").src = newAvatarURL;
      document.getElementById("newAvatarURL").value = "";
    });
}
