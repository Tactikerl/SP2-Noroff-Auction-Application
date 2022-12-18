import { profileFetch } from "../api/api.js";
import { userCheck } from "../api/auth/logout.js";
import { userNull, navProfile } from "../html/htmlconst.js";

import { token, userName } from "../tools/utils.js";

const navProfileCont = document.querySelector("#navProfile");

const shortContainer = document.querySelector("#userNav");

export function locationProfileCheck(renderNavProfile) {
  if (!userName) {
    return;
  }

  let callback = () => {};

  if (renderNavProfile) {
    callback = (profile, userName) => {
      navProfileCont.innerHTML = navProfile(profile, userName);
      userCheck();
    };
  }
  profileFetch(callback, token, userName);
}
console.log(userName);
export const renderNoUser = () => {
  if (!userName && shortContainer) {
    shortContainer.innerHTML = userNull();
  }
};

renderNoUser();
