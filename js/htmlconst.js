export const loginHTML = `
  <form action="" class="row g-3" id="loginForm">
      <div class="col-md-6">
          <label for="userEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="userEmail">
      </div>
      <div class="col-md-6">
          <label for="userPassword"
              class="form-label">Password</label>
          <input type="password" class="form-control"
              id="userPassword">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"
        id="loginBtn">Login</button>
      </div>
  </form>`;

export const registerHTML = `
  <form action="" class="row g-3" id="registerForm">
      <div class="col-md-6">
          <label for="newUserName"
              class="form-label">Username</label>
          <input type="text" class="form-control"
              id="newUserName">
      </div>
      <div class="col-md-6">
          <label for="newUserEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="userEmail">
      </div>
      <div class="col-md-6">
          <label for="userPassword"
              class="form-label">Password</label>
          <input type="password" class="form-control"
              id="userPassword">
      </div>
      <div class="col-md-6">
          <label for="repeatPassword"
              class="form-label">Repeat Password</label>
          <input type="text" class="form-control"
              id="repeatPassword">
      </div>
      <div class="col-md-6">
          <label for="avatar" class="form-label">Profile
              Avatar</label>
          <input type="url" name="avatar" id="profileAvatar" placeholder="URL">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"
        id="profileBtn">Create Profile</button>
      </div>
  </form>`;

export function renderProfileHTML(profile, userName) {
  return `
<section class="vh-100" style="background-color: #eee">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-4">
        <div class="card" style="border-radius: 15px">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img
                src="${profile.avatar}"
                class="rounded-circle img-fluid"
                style="width: 100px"
              />
            </div>
            <h4 class="mb-2">${userName}</h4>
            <p class="text-muted mb-4"><span class="mx-2">|</span></p>
            <div class="mb-4 pb-2">
              <button
                type="button"
                class="btn btn-outline-primary btn-floating"
              >
                <i class="fab fa-facebook-f fa-lg"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-primary btn-floating"
              >
                <i class="fab fa-twitter fa-lg"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-primary btn-floating"
              >
                <i class="fab fa-skype fa-lg"></i>
              </button>
            </div>
            <button type="button" class="btn btn-primary btn-rounded btn-lg">
              Message now
            </button>
            <div class="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p class="mb-2 h5">${profile.credits}</p>
                <p class="text-muted mb-0">Credits Balance</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">${profile._count.listings}</p>
                <p class="text-muted mb-0">Amount of Listings</p>
              </div>
              <div>
                <p class="mb-2 h5">4751</p>
                <p class="text-muted mb-0">Total Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

export function shortProfile(profile, userName) {
  return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${profile.avatar}"
            class="img-fluid rounded-start"
            alt="profile image for $[userName]">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Welcome ${userName}</h5>
            <p class="card-text">
              You currently have ${profile.credits}
              credits in your account and have
              ${profile._count.listings} listings
              registered
            </p>
            <p class="card-text"></p>
            <div class="col-md-6">
              <a href="/profile.html"><button
                  class="btn btn-primary"
                  id="profileBtn">Profile</button></a>
            </div>
            <div class="col-md-6">
              <button class="btn btn-danger"
                id="logoutBtn">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
