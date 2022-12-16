import { defaultProfileImg } from "../tools/utils.js";

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

export function shortProfile(profile) {
  return `
  <div class="card py-3 px-3">
  <div class="container">
  <div class="row align-items-center">
    <div class="col d-flex justify-content-center">
      <img src="${profile.avatar}"
        class="img-fluid rounded-2 profileImg"
        alt="profile image for ${profile.name}">
    </div>
    <div class="col">
    <h5 class="card-title">Welcome ${profile.name}</h5>
    <ul class="list-group">
    <li class="list-group-item">
      <p class="card-text">Credits available :
        ${profile.credits}</p>
    </li>
    <li class="list-group-item">
      <p class="card-text">Total listings made :
        ${profile._count.listings}</p>
    </li>
    <li class="list-group-item">
      <p class="card-text">Auctions won : ${profile.wins.length}</p>
    </li>
  </ul>
    </div>
    <div class="col">
      <ul class="list-group">
        <li class="list-group-item">
          <a href="/createlisting.html"><button
              class="btn btn-primary" id="createBtn">Create
              Listing</button></a>
        </li>
        <li class="list-group-item">
          <a href="/profile.html"><button
              class="btn btn-primary"
              id="profileBtn">Profile</button></a>
        </li>
        <li class="list-group-item">
          <button class="btn btn-danger "
            id="logoutBtn">Logout</button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</div>`;
}

export function shortSeller(listing) {
  if (!listing.seller.avatar) {
    listing.seller.avatar = defaultProfileImg;
  }
  return `
    <div class="container">
      <div class="row justify-content-center">        
        <div class="card col-md-4 mt-4 align-items-center bg-light">
          <div class="card-body bg-light">
          <h5 class="card-title mb-2 text-center">Seller: ${listing.seller.name}</h5>
          <img src="${listing.seller.avatar}"
          class="img-fluid rounded-3 sellerImg border border-info"
          alt="profile image for ${listing.seller.name}">                        
            <p class="card-text m-2">Auction Wins: ${listing.seller.wins.length}</p>                                               
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
                <div class="col">
                    <div class="card shadow-sm">
                        <a href="/viewListing.html?listings=${
                          getListings.id
                        }"><img
                                src="${getListings.media[0]}"
                                class="img-fluid img-thumbnail imgForm"
                                alt="..."></a>                        
                        <div class="card-body">
                        <h5 class="card-title text-truncate">${
                          getListings.title
                        }</h5>                            
                            <p class="card-text text-truncate"
                                id='itemDscr${index}'></p>
                            <div class="card-body">
                                <ul
                                    class="list-group list-group-flush">
                                    <li
                                        class="list-group-item">
                                        <span>Created at:
                                            ${createDate.toLocaleDateString(
                                              "en-US",
                                              options
                                            )}</span>
                                        <span>By
                                            ${getListings.seller.name}</span>
                                    </li>
                                    <li
                                        class="list-group-item">
                                        Last updated:
                                        ${updateDate.toLocaleDateString(
                                          "en-US",
                                          options
                                        )}
                                    </li>
                                    <li
                                        class="list-group-item">
                                        Ends at:
                                        ${endDate.toLocaleDateString(
                                          "en-US",
                                          options
                                        )}
                                    </li>
                                    <li
                                        class="list-group-item">
                                        Number of bids:
                                        ${getListings._count.bids}
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/viewListing.html?listings=${
                                      getListings.id
                                    }"
                                        class="card-link"><button
                                            type="button"
                                            class="btn btn-sm btn-outline-secondary">View</button></a>
                                </div>
                            </div>
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
  bidInfo
) {
  return `
    <div class="container py-5">
      <div class="row justify-content-center">
          <div class="col-md-8 col-lg-8 col-xl-8 ">
              <div class="card text-black">
                  <div class="text-center">
                      <h3 class="card-title">
                          ${listing.title}</h3>
                  </div>
                  <div id="carouselControls"
                      class="carousel slide"
                      data-bs-ride="carousel">
                      <div class="carousel-inner">
                          ${listing.media.map(
                            (image, index) => `<div
                              class="carousel-item ${
                                index == 0 ? `active` : ``
                              }">
                              <img src="${image}"
                                  class="card-img-top carouselImg px-1 rounded-3"
                                  alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                          </div>`
                          )}
                      </div>
                      <button class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselControls"
                          data-bs-slide="prev">
                          <span
                              class="carousel-control-prev-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselControls"
                          data-bs-slide="next">
                          <span
                              class="carousel-control-next-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Next</span>
                      </button>
                  </div>
                  <div class="card-body mt-1 mb-1 bg-light">
                      <div>
                          <p class="text-muted mb-4">
                              ${listing.tags}</p>
                          <ul class="list-group">
                              <li class="list-group-item bg-info bg-opacity-10">
                                  <span>Created at 
                                      : </span><span>${createDate.toLocaleDateString(
                                        "en-US",
                                        options
                                      )}</span></li>
                              <li class="list-group-item bg-warning bg-opacity-10">
                                  <span>Last updated 
                                      : </span><span>${updateDate.toLocaleDateString(
                                        "en-US",
                                        options
                                      )}</span></li>
                              <li class="list-group-item bg-danger bg-opacity-10">
                                  <span>Auction
                                      ends : </span><span>${endDate.toLocaleDateString(
                                        "en-US",
                                        options
                                      )}</span></li>
                              <li class="list-group-item bg-info bg-opacity-10">                                  
                                      <span>Number of bids : 
                                      ${listing._count.bids}</span>
                              </li>
                              <li class="list-group-item bg-success bg-opacity-25">
                                ${
                                  listing.bids.length > 0
                                    ? `
                                    <span>Highest bid :
                                    <span class="fw-bold">${
                                      listing.bids.at(-1).amount
                                    }</span></span>
                                   `
                                    : ""
                                }
                              </li>
                              <li class="list-group-item">
                                  <form class="row">
                                  <div class="row align-items-center">
                                  <div class="col">
                                    <label for="userBid" class="form-label mt-1">Your bid :
                                    </label>
                                  </div>
                                  <div class="col">
                                    <input type="number" class="form-control" id="userBid"
                                      placeholder="0">
                                  </div>
                                  <div class="col">
                                    <button type="submit" class="btn btn-primary"
                                      id="bidBtn">Place
                                      Bid</button>
                                  </div>
                                </div>
                                  </form>
                              </li>
                          </ul>
                          <div class="card mt-1 border text-center bg-info bg-opacity-10 rounded">
                          <span class="mt-2 fw-bold ">Bid Timeline</span>                              
                              <div class="container-fluid row row-cols-auto m-1 justify-content-center"
                                  id="bidsContainer">
                                  ${bidInfo}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div id="modalCarouselControls"
      class="carousel slide"
      data-bs-ride="carousel">
      <div class="carousel-inner">
          ${listing.media.map(
            (image, index) => `<div
              class="carousel-item ${index == 0 ? `active` : ``}">
              <img src="${image}"
                  class="card-img-top carouselImg px-1 rounded-3"
                  alt="" />
          </div>`
          )}
      </div>
      <button class="carousel-control-prev"
          type="button"
          data-bs-target="#modalCarouselControls"
          data-bs-slide="prev">
          <span
              class="carousel-control-prev-icon border border-dark"
              aria-hidden="true"></span>
          <span
              class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next"
          type="button"
          data-bs-target="#modalCarouselControls"
          data-bs-slide="next">
          <span
              class="carousel-control-next-icon border border-dark"
              aria-hidden="true"></span>
          <span
              class="visually-hidden">Next</span>
      </button>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
