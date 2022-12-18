import {
  u as e,
  p as s,
  t as c,
  c as i,
  n as l,
} from "./htmlconst.3d4776c0.js";
import { u } from "./logout.65a93fb9.js";
const f = document.querySelector("#navProfile"),
  o = document.querySelector("#userNav");
function k(n) {
  if (!e) return;
  let r = () => {};
  n &&
    (r = (t, a) => {
      (f.innerHTML = l(t, a)), u();
    }),
    s(r, c, e);
}
const m = () => {
  !e && o && (o.innerHTML = i());
};
m();
export { k as l };
