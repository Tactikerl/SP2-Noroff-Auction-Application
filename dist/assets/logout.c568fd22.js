function t() {
  localStorage.removeItem("token"),
    localStorage.removeItem("username"),
    localStorage.removeItem("usercredit"),
    localStorage.removeItem("userlistings"),
    localStorage.removeItem("userwins");
  const e = document.querySelector(".navbar-brand").href;
  document.location = e;
}
function r(e) {
  const o = document.getElementById("logoutBtn");
  o && o.addEventListener("click", t);
}
export { r as u };
