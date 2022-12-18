export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("usercredit");
  localStorage.removeItem("userlistings");
  localStorage.removeItem("userwins");

  const frontPage = document.querySelector(".navbar-brand").href;
  document.location = frontPage;
}

export function userCheck() {
  const userActive = document.getElementById("logoutBtn");

  if (userActive) {
    userActive.addEventListener("click", logout);
  }
}
