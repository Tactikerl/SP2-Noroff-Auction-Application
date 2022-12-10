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

export function shortSeller(listing) {
  return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${listing.seller.avatar}"
            class="img-fluid rounded-start"
            alt="profile image for ${listing.seller.name}}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Seller: ${listing.seller.name}</h5>            
            <p class="card-text"></p>
            <div class="col-md-6">
              <a href="/profile.html"><button
                  class="btn btn-primary"
                  id="profileBtn">Profile</button></a>
            </div>            
          </div>
        </div>
      </div>
    </div>`;
}

export function indexListingHTML(
  getListings,
  createDate,
  updateDate,
  endDate,
  options,
  index
) {
  return `
  <div class="col-sm-6">
    <div class="card" style="width: 18rem;">
        <a href="/viewListing.html?listings=${getListings.id}">
            <div class="card-body">
                <h5 class="card-title">
                    ${getListings.title}</h5>
                <p class="card-text" id='itemDscr${index}'>
                </p>
            </div>
            <img src="${getListings.media}"
                class="card-img-top" alt="...">
        </a>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Created at:
                ${createDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Ends at:
                ${updateDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Ends at:
            ${endDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Number of bids:
                ${getListings._count.bids}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another
                link</a>
        </div>
    </div>
  </div>          
  `;
}

export function singleListingHTML(
  listing,
  createDate,
  updateDate,
  endDate,
  options
) {
  return `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <div class="card text-black">
            <div class="text-center">
              <h3 class="card-title">
                ${listing.title}</h3>
              <p class="text-muted mb-4">
                ${listing.tags}</p>
            </div>
            <img src="${listing.media}" class="card-img-top"
              alt="" />
            <div class="card-body">
              <div>
                <div class="d-flex justify-content-between">
                  <span>Created at
                    :</span><span>${createDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Last updated
                    :</span><span>${updateDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Auction
                    end:</span><span>${endDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</span>
                </div>
              </div>
              <div
                class="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Number of bids: </span><span>${listing._count.bids}</span>
              </div>
              <div class"d-flex justify-content-between total font-weight-bold mt-4">
                <ul>
                  <li>
                    <span>${listing.bids.bidderName}</span>
                  </li>
                  <li>
                    <span>${listing.bids.amount}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

export function userNull() {
  return `
    <div class="col-md-6"><span>Hi there, you seem to not be
      registered/logged in,
      click this <a href="/login.html">
        <button class="btn btn-primary">LOGIN</button>
      </a> button to do so, or peruse our auction listings in
      limited mode if you wish so.</span>
    </div>`;
}
