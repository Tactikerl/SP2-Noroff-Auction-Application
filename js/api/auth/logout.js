export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("usercredit");
  localStorage.removeItem("userlistings");
  localStorage.removeItem("userwins");
  document.location = "../index.html";
}

export function userCheck() {
  const userActive = document.getElementById("logoutBtn");

  if (userActive) {
    userActive.addEventListener("click", logout);
  }
}
