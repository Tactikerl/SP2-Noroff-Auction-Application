import { A as f, a as L, b as T } from "./htmlconst.3f9a2e96.js";
import { r as i } from "./renderListings.a2339e10.js";
import { l as w } from "./shortprofile.481daaa8.js";
import "./logout.e52ab6e3.js";
const C = (e, s) => {
  let r = null;
  return (...t) => {
    window.clearTimeout(r),
      (r = window.setTimeout(() => {
        e.apply(null, t);
      }, s));
  };
};
function I(e) {
  function s(t) {
    t.preventDefault();
    const a = t.target.value;
    if (!a.length) {
      i(e);
      return;
    }
    if (a.length < 3) return;
    const n = a.toLowerCase(),
      l = e.filter(function (o) {
        const d = o.title.toLowerCase(),
          m = o.description ? o.description.toLowerCase() : "",
          h = o.seller.name.toLowerCase(),
          p = Boolean(
            o.tags.map((c) => c.toLowerCase()).filter((c) => c.includes(n))
              .length
          );
        return d.includes(n) || m.includes(n) || h.includes(n) || p;
      });
    l.length > 0
      ? i(l)
      : alert("There are no listings that match your search term.");
  }
  const r = document.querySelector("form#searchForm");
  r.addEventListener("input", C(s, 150)),
    r.addEventListener("submit", (t) => {
      t.preventDefault();
    });
}
const u = new Headers();
u.append("Content-Type", "application/json");
const A = { method: "GET", headers: u };
fetch(`${f}${L}${T}`, A)
  .then((e) => e.json())
  .then((e) => {
    i(e), I(e);
  })
  .catch((e) => console.log("error", e));
w(!0);
