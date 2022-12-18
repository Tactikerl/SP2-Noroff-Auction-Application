import {
  u as g,
  t as a,
  q as u,
  A as f,
  v as p,
  h,
} from "./htmlconst.3f9a2e96.js";
import { l as I } from "./shortprofile.481daaa8.js";
import "./logout.e52ab6e3.js";
g || (window.location = "../login/index.html");
const l = document.getElementById("createListing");
function v() {
  a
    ? (l.innerHTML = u)
    : (l.innerHTML = "<div><p>Please Log in to create a listing</p></div>"),
    document.getElementById("publishListing").addEventListener("click", y);
}
v();
function y(d) {
  d.preventDefault();
  const t = document.getElementById("listingTitle").value,
    i = document.getElementById("itemDescription").value,
    n = document.getElementById("endDate").value,
    r = document.getElementById("itemTags").value,
    s = document.getElementById("listingMedia").value;
  if (!a)
    return alert("You are not logged inn, please log in to create listings");
  if (!t || !i || !n)
    return alert("Please fill inn the required fields for the listing.");
  let o = [];
  s && (o = s.split(","));
  const m = JSON.stringify({
      title: t,
      description: i,
      endsAt: n,
      tags: [r],
      media: o,
    }),
    c = { method: "POST", headers: h, body: m };
  fetch(`${f}${p}`, c)
    .then((e) => e.json())
    .then(
      (e) => (document.location = `../listing/index.html?listings=${e.id}`)
    );
}
I(!0);
