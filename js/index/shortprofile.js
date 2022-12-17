import { profileFetch } from "../api/api.js";
import { shortProfile, navProfile } from "../html/htmlconst.js";
import { logout } from "../api/auth/logout.js";
import { userNull } from "../html/htmlconst.js";
import { token, userName } from "../tools/utils.js";

const navProfileCont = document.querySelector("#navProfile");

const shortContainer = document.querySelector("#userNav");

export function locationProfileCheck(renderShortProfile, renderNavProfile) {
  let callback = () => {};
  if (renderShortProfile) {
    callback = (profile, userName) => {
      shortContainer.innerHTML = shortProfile(profile, userName);
      document.getElementById("logoutBtn").addEventListener("click", logout);
    };
  }
  if (renderNavProfile) {
    callback = (profile, userName) => {
      navProfileCont.innerHTML = navProfile(profile, userName);
    };
  }
  profileFetch(callback, token, userName);
}

export const renderNoUser = () => {
  if (!userName) {
    shortContainer.innerHTML = userNull();
  }
};

renderNoUser();
