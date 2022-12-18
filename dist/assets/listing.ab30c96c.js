import {
  u as p,
  A as c,
  a as l,
  g as b,
  e as d,
  m as g,
  d as I,
  f as r,
  s as w,
  h as m,
} from "./htmlconst.08398975.js";
import { l as S } from "./shortprofile.ddde45bc.js";
import "./logout.c568fd22.js";
p || (window.location = "../login/index.html");
const B = new URLSearchParams(window.location.search),
  u = B.get("listings"),
  C = { method: "GET", headers: m };
let h = 0;
fetch(`${c}${l}${u}${b}`, C)
  .then((e) => e.json())
  .then((e) => {
    $(e), (h = e.bids.length > 0 ? e.bids.at(-1).amount : 0);
  });
function $(e) {
  const n = d(e);
  (e.media == null || e.media.length == 0 || !g.test(e.media[0])) &&
    (e.media = [I]);
  const o = document.getElementById("listingContainer");
  let a = "";
  if (
    (e.bids
      .sort((t, s) => t.amount - s.amount)
      .forEach(function (t, s) {
        const i = d(t);
        a += `
    <div class="" id="bidNmbr${s}">
    <p class=""><span class="fw-semibold">Bidder</span> :
            ${t.bidderName}</p>
    <p class=""><span class="fw-semibold">Bid Amount</span> :
            ${t.amount}</p>
    <p class=""><span class="fw-semibold">Time of bid</span> :
            ${i.createDate.toLocaleDateString("en-US", r)}</p>
            <hr>
  </div>
  `;
      }),
    (o.innerHTML = w(e, n.endDate, r, a)),
    document.getElementById("bidBtn").addEventListener("click", L),
    e.media.length > 1)
  ) {
    const t = document.querySelector("#listingCarousel"),
      s = document.querySelector("#modalImg"),
      i = window.bootstrap.Carousel.getOrCreateInstance(s);
    t.addEventListener("slid.bs.carousel", (f) => {
      i.to(f.to);
    });
  }
}
function y(e) {
  if (h >= e) {
    alert("New bid must be higher than current highest bid");
    return;
  }
  const n = JSON.stringify({ amount: parseInt(e) }),
    o = { method: "POST", headers: m, body: n };
  fetch(`${c}${l}${u}/bids?_seller=true&_bids=true`, o)
    .then((a) => a.json())
    .then(() => location.reload())
    .catch((a) => console.log("error", a));
}
function L(e) {
  e.preventDefault();
  const n = document.getElementById("userBid").value;
  !n || y(n);
}
S(!0);
