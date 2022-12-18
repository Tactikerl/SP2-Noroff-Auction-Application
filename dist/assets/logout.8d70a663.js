function t() {
  localStorage.removeItem("token"),
    localStorage.removeItem("username"),
    localStorage.removeItem("usercredit"),
    localStorage.removeItem("userlistings"),
    localStorage.removeItem("userwins"),
    (document.location = "/index.html");
}
function o() {
  const e = document.getElementById("logoutBtn");
  e && e.addEventListener("click", t);
}
export { o as u };
