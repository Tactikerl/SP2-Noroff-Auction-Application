import {
  m as c,
  d as s,
  e as l,
  i as m,
  f as h,
} from "./htmlconst.08398975.js";
function p() {
  for (; this.hasChildNodes(); ) this.removeChild(this.lastChild);
}
HTMLElement.prototype.clear = p;
function f(o, r) {
  const a = document.querySelector("#listingsContainer");
  a.clear(),
    o.forEach(function (e, n) {
      (e.media == null || e.media.length == 0 || !c.test(e.media[0])) &&
        (e.media = [s]);
      const t = l(e);
      a.innerHTML += m(e, t.createDate, t.updateDate, t.endDate, h, n, r);
      const d = document.querySelector(`#itemDscr${n}`),
        i = document.createElement("span");
      (i.textContent = `${e.description}`), d.appendChild(i);
    });
}
export { f as r };
