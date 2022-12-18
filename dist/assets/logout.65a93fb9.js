function o() {
  localStorage.removeItem("token"),
    localStorage.removeItem("username"),
    localStorage.removeItem("usercredit"),
    localStorage.removeItem("userlistings"),
    localStorage.removeItem("userwins");
  const e = document.querySelector(".navbar-brand").href;
  document.location = e;
}
function t() {
  const e = document.getElementById("logoutBtn");
  e && e.addEventListener("click", o);
}
export { t as u };
