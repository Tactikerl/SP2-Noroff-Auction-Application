export function logout() {
  console.log("clicked");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  document.location = "/index.html";
}
