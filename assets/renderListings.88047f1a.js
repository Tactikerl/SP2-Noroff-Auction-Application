import {
  m as d,
  d as c,
  e as s,
  i as l,
  f as m,
} from "./htmlconst.66b18a18.js";
function h() {
  for (; this.hasChildNodes(); ) this.removeChild(this.lastChild);
}
HTMLElement.prototype.clear = h;
function u(o) {
  const a = document.querySelector("#listingsContainer");
  a.clear(),
    o.forEach(function (e, n) {
      (e.media == null || e.media.length == 0 || !d.test(e.media[0])) &&
        (e.media = [c]);
      const t = s(e);
      a.innerHTML += l(e, t.createDate, t.updateDate, t.endDate, m, n);
      const r = document.querySelector(`#itemDscr${n}`),
        i = document.createElement("span");
      (i.textContent = `${e.description}`), r.appendChild(i);
    });
}
export { u as r };
