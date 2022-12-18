import {
  u as e,
  p as a,
  t as c,
  c as l,
  n as i,
} from "./htmlconst.66b18a18.js";
import { u } from "./logout.8d70a663.js";
const f = document.querySelector("#navProfile"),
  r = document.querySelector("#userNav");
function k(n) {
  if (!e) return;
  let o = () => {};
  n &&
    (o = (t, s) => {
      (f.innerHTML = i(t, s)), u();
    }),
    a(o, c, e);
}
console.log(e);
const m = () => {
  !e && r && (r.innerHTML = l());
};
m();
export { k as l };
