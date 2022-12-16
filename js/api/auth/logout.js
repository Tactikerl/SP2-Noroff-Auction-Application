export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  document.location = "/index.html";
}

// document.getElementById("logoutBtn").addEventListener("click", logout);

function userCheck() {
  const userActive = document.getElementById("logoutBtn");

  if (userActive) {
    userActive.addEventListener("click", logout);
  }
}
userCheck();
