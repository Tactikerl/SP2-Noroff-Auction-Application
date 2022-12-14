export const loginHTML = `
    <form action="" class="row g-3" id="loginForm">
      <div class="card mb-2">
        <div class="card-body">
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
        </div>
      </div>
    </form>`;

export const registerHTML = `
  <form action="" class="row g-3" id="registerForm">
  <div class="card mb-2">
    <div class="card-body">
      <div class="col-md-6">
          <label for="newUserName"
              class="form-label">Username (Case sensitive)</label>
          <input type="text" class="form-control"
              id="newUserName">
      </div>
      <div class="col-md-6">
          <label for="newUserEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="newUserEmail">
      </div>
      <div class="col-md-6">
          <label for="userPassword"
              class="form-label">Password (Case sensitive)</label>
          <input type="password" class="form-control"
              id="newUserPassword">
      </div>
      <div class="col-md-6">
          <label for="repeatPassword"
              class="form-label">Repeat Password</label>
          <input type="password" class="form-control"
              id="repeatPassword">
      </div>
      <div class="col-md-6">
          <label for="avatar" class="form-label">Profile
              Avatar</label>
          <input type="url" name="avatar" id="newUserAvatar" placeholder="URL">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"
        id="registerBtn">Create Profile</button>
        </div>
        </div>
      </div>
  </form>`;

export const listingFormHTML = `
  <form action="" class="row g-3 " id="listingForm">
    <div class="mb-3">
      <label for="listingName" class="form-label">What are you
        listing?</label>
      <input type="text" class="form-control"
        id="listingTitle" placeholder="Listing Name">
    </div>
    <div class="mb-3">
      <label for="itemDescription" class="form-label">Describe
        your listing</label>
      <textarea class="form-control" id="itemDescription"
        rows="3" placeholder="Short and Concise description"></textarea>
    </div>
    <div class="mb-3">
      <label for="itemTags" class="form-label">Tags</label>
      <input type="text" class="form-control" id="itemTags"
         placeholder="Tags">
    </div>
    <div class="mb-3">
      <label for="endDate" class="form-label">Auction ends at?</label>
      <input type="datetime-local" name="endDate" id="endDate">
    </div>
    <div class="mb-3">
      <label for="listingMedia" class="form-label">Link
        images here(url)</label>
      <input class="form-control" type="url"
        id="listingMedia" multiple>
    </div>
    <div class="mb-3">
    <button type="button" class="btn btn-info" id="publishListing">Publish Listing</button>
    </div>
  </form>`;

export function renderProfileHTML(profile, userName) {
  return `
    <section class="vh-100" style="background-color: #eee">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-4">
            <div class="card" style="border-radius: 15px">
              <div class="card-body text-center">
                <div class="mt-3 mb-4">
                  <img
                    src="${profile.avatar}"
                    class="rounded-circle img-fluid"
                    style="width: 100px"
                  id="userAvatar"/>
                </div>
                <h4 class="mb-2">${userName}</h4>
                <p class="text-muted mb-4"><span class="mx-2"></span></p>
                <div class="col-md-6">
                    <label for="avatar" class="form-label">Profile
                     Avatar</label>
                    <input type="url" name="avatar" id="newAvatarURL" placeholder="URL">
                </div>
                <div>
                <button type="button" class="btn btn-primary btn-rounded btn-lg" id="avatarUrlBtn">
                  Change avatar
                </button>
                </div>
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
    <div class="card mt-3 ms-3 mb-3" style="max-width: 540px;">
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
            <div class="col-md-6">
            <a href="/createlisting.html"><button
                  class="btn btn-primary"
                  id="createBtn">Create Listing</button></a>            
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
  <div class="col-sm-6 ms-3 me-1 w-25 h-25d-inline-block">
    <div class="card mb-4" >
        <a href="/viewListing.html?listings=${getListings.id}">
            <div class="card-body">
                <h5 class="card-title">
                    ${getListings.title}</h5>
                <p class="card-text" id='itemDscr${index}'>
                </p>
            </div>
            <div class="card-body"></div>
            <img src="${getListings.media}"
                class="card-img-top" alt="...">
        </a>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Created at:
                ${createDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Last updated:
                ${updateDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Ends at:
            ${endDate.toLocaleDateString("en-US", options)}
            </li>
            <li class="list-group-item">Number of bids:
                ${getListings._count.bids}</li>
        </ul>
        <div class="card-body">
            <a href="/viewListing.html?listings=${
              getListings.id
            }" class="card-link"><button class="btn btn-primary">View Listing</button></a>
            
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
  options,
  index
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
              ${
                listing.bids.length > 0
                  ? `<div
                class="d-flex justify-content-between total font-weight-bold mt-4">
                <span>highest bid: </span><span>${
                  listing.bids.at(-1).amount
                }</span>
              </div>`
                  : ""
              }
              <form class="row g-3">
                <div class="col-auto">
                  <label for="userBid" class="form-label">Your bid</label>
                  <input type="number" class="form-control" id="userBid"
                    placeholder="0">
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3"
                    id="bidBtn">Place Bid</button>
                </div>
              </form>
              <div class"d-flex justify-content-between total font-weight-bold mt-4" id="bidSection">
                <div class"d-flex justify-content-between total font-weight-bold mt-4" id="bidsContainer${index}">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

export function userNull() {
  return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-4">
              <img src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                  class="img-fluid rounded-start"
                  alt="profile image for $[userName]">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">Welcome!
                  </h5>
                  <p class="card-text">
                      It seems that you are not logged in. If
                      you would like to make bids on the
                      listings, please log in or make an
                      account by pressing the button
                      underneath
                  </p>
                  <div class="col-md-6">
                      <a href="/login.html"><button
                              class="btn btn-primary"
                              id="profileBtn">Login/Register</button></a>
                  </div>
              </div>
          </div>
      </div>
    </div>`;
}
