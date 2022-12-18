import {
  l as d,
  r as g,
  A as m,
  j as E,
  k as I,
  h as i,
} from "./htmlconst.3d4776c0.js";
const c = document.querySelector("#formContainer");
c.innerHTML = d;
document.getElementById("btnradio1").addEventListener("click", () => {
  (c.innerHTML = d),
    document.getElementById("loginBtn").addEventListener("click", u);
});
document.getElementById("loginBtn").addEventListener("click", u);
document.getElementById("btnradio2").addEventListener("click", () => {
  (c.innerHTML = g),
    document.getElementById("registerBtn").addEventListener("click", w);
});
function l(o, n) {
  const t = JSON.stringify({ email: o, password: n }),
    s = { method: "POST", headers: i, body: t };
  fetch(`${m}${I}`, s)
    .then((e) => e.json())
    .then((e) => {
      if (e.accessToken == null) {
        alert(e.message);
        return;
      }
      const r = e.accessToken;
      localStorage.setItem("token", r);
      const a = e.name;
      localStorage.setItem("username", a),
        (document.location = "../index.html");
    })
    .catch((e) => console.log("error", e));
}
function u(o) {
  o.preventDefault();
  const n = document.getElementById("userEmail").value.toLowerCase(),
    t = document.getElementById("userPassword").value;
  !n || !t || l(n, t);
}
function w() {
  const o = document.getElementById("newUserName").value,
    n = document.getElementById("newUserEmail").value.toLowerCase(),
    t = document.getElementById("newUserAvatar").value,
    s = document.getElementById("newUserPassword").value,
    e = JSON.stringify({ name: o, email: n, avatar: t, password: s }),
    r = { method: "POST", headers: i, body: e };
  fetch(`${m}${E}`, r)
    .then((a) => a.json())
    .then(() => {
      l(n, s);
    });
}
