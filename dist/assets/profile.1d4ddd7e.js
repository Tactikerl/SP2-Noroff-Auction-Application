import {
  u as t,
  p as a,
  t as i,
  o as s,
  h as d,
} from "./htmlconst.3f9a2e96.js";
import { r as c } from "./renderListings.a2339e10.js";
import { u as l } from "./logout.e52ab6e3.js";
t || (window.location = "../login/index.html");
const m = (e, n) => {
  const r = document.getElementById("profileContainer");
  (r.innerHTML = s(e, n)),
    document.getElementById("avatarUrlBtn").addEventListener("click", u),
    l(),
    c(e.listings, !0);
};
t && a(m, i, t);
function u() {
  const e = document.getElementById("newAvatarURL").value,
    n = JSON.stringify({ avatar: e });
  console.log(e);
  const r = { method: "PUT", headers: d, body: n };
  fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${t}/media`, r)
    .then((o) => o.json())
    .then(() => {
      (document.getElementById("userAvatar").src = e),
        (document.getElementById("newAvatarURL").value = "");
    });
}
