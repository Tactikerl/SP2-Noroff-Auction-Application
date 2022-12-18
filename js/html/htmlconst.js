import { defaultProfileImg } from "../tools/utils.js";

export const loginHTML = `
    <form action="" class="row g-3" id="loginForm">
      <div class="card mb-2">
        <div class="card-body">
          <div class="">
              <label for="userEmail"
                  class="form-label">Email</label>
              <input type="email" class="form-control"
                  id="userEmail">
          </div>
          <div class="">
              <label for="userPassword"
                  class="form-label">Password</label>
              <input type="password" class="form-control"
                  id="userPassword">
          </div>
          <div class="col-md-6 pt-1">
              <button type="button" class="btn btn-info mt-2"
              id="loginBtn">Login</button>
          </div>
        </div>
      </div>
    </form>`;

export const registerHTML = `
  <form action="" class="row g-3" id="registerForm">
  <div class="card mb-2">
    <div class="card-body">
      <div class="">
          <label for="newUserName"
              class="form-label">Username (Case sensitive)</label>
          <input type="text" class="form-control"
              id="newUserName">
      </div>
      <div class="">
          <label for="newUserEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="newUserEmail">
      </div>
      <div class="">
          <label for="userPassword"
              class="form-label">Password (Case sensitive)</label>
          <input type="password" class="form-control"
              id="newUserPassword">
      </div>
      <div class="">
          <label for="repeatPassword"
              class="form-label">Repeat Password</label>
          <input type="password" class="form-control"
              id="repeatPassword">
      </div>
      <div class="">
          <label for="avatar" class="form-label">Profile
              Avatar</label>
          <input type="url" class="my-3" name="avatar" id="newUserAvatar" placeholder="URL">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-info"
        id="registerBtn">Create Profile</button>
        </div>
        </div>
      </div>
  </form>`;

export const listingFormHTML = `
    <form action="" class="row g-3 bg-white"
    id="listingForm">
    <div class="mb-3">
      <div>
        <label for="listingName"
          class="form-label">Title</label>
        <input type="text" class="form-control"
          id="listingTitle" placeholder="">
      </div>
      <div>
        <span class="text-muted helpText">Short
          description of
          the item.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><label for="itemDescription"
          class="form-label">Description</label>
        <textarea class="form-control"
          id="itemDescription" rows="3"
          placeholder=""></textarea>
      </div>
      <div>
        <span class="text-muted helpText">Please
          describe your item in full.</span>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="itemTags"
          class="form-label">Tags</label>
        <input type="text" class="form-control"
          id="itemTags" placeholder="Tags">
      </div>
      <div>
        <span class="text-muted helpText">Please
          use relevant tags for the item.</span>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="endDate"
          class="form-label">Auction
          end  </label>
        <input type="datetime-local" name="endDate"
          id="endDate">
      </div>
      <div>
        <span class="text-muted helpText">Please
          set desired end date for the auction.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><label for="listingMedia"
          class="form-label">Image URLs(Not
          Required)</label>
        <input class="form-control" type="url"
          id="listingMedia" multiple>
      </div>
      <div>
        <span class="text-muted helpText">For multiple
          images use comma (,) and a space between
          URLs.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><button type="button" class="btn btn-info"
          id="publishListing">Publish Listing</button>
      </div>
      <div>
        <span class="text-muted helpText">Please
          check your listing to see everything is
          correct.</span>
      </div>
    </div>
    </form>`;

export function renderProfileHTML(profile, userName) {
  return `
  <section class="vh-50 bg-light">
    <div class="container py-5 h-100">
      <div
        class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">
          <div class="card rounded-3" >
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img src="${profile.avatar}"
                  class="rounded-circle img-fluid profileImg" 
                   />
              </div>
              <h4 class="mb-2">${userName}</h4>
              <button class="btn btn-info" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample">
                Change Avatar URL
              </button>
              <div class="collapse mt-2" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <label for="avatar"
                      class="form-label"></label>
                    <input type="url" name="avatar"
                      id="newAvatarURL" placeholder="URL">
                    <button
                      class="btn btn-light btn-outline-primary"
                      id="avatarUrlBtn">Change</button>
                  </form>
                </div>
              </div>
              <div class=" d-flex justify-content-evenly
                      text-center mt-5 mb-2">
                <div>
                  <p class="mb-2 h5">Credits</p>
                  <p class="text-muted mb-0">
                    ${profile.credits}</p>
                </div>
                <div class="px-3">
                  <p class="mb-2 h5">Listings</p>
                  <p class="text-muted mb-0">
                    ${profile._count.listings}
                  </p>
                </div>
                <div>
                  <p class="mb-2 h5">Won</p>
                  <p class="text-muted mb-0">
                    ${profile.wins.length}</p>
                </div>
              </div>
              <div><button class="btn btn-danger "
              id="logoutBtn">Logout</button></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="album container py-5 " >
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="listingsContainer">
  </div>
  </section>`;
}

export function navProfile(profile, userName) {
  return `  
<li class="nav-item px-1">
            <span>Hello, <span class="fw-bold">${userName}</span>!
            </span>
          </li>
          <li class="nav-item px-1">
            <span>Credits ${profile.credits}</span>
          </li>
          <li class="nav-item px-1">
            <span>Listings
              ${profile._count.listings}</span>
          </li>
          <li class="nav-item px-1">
            <span>Won
              ${profile.wins.length}</span>
          </li>
          <li class="nav-item px-1">
          <button class="btn btn-danger btn-sm"
              id="logoutBtn">Logout</button>
          </li>`;
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
  index,
  isSubfolder
) {
  return `  
                <div class="col">
                    <div class="card shadow-sm">
                        <a href="${
                          isSubfolder ? "." : ""
                        }./listing/index.html?listings=${getListings.id}"><img
                                src="${getListings.media[0]}"
                                class="img-fluid img-thumbnail imgForm"
                                alt="..."></a>                        
                        <div class="card-body">
                        <h5 class="card-title text-truncate">${
                          getListings.title
                        }</h5>                            
                            <p class="card-text text-truncate"
                                id='itemDscr${index}'></p>           
                                    <p
                                        class=" mb-0">
                                        <span class="fw-bold">Ends at</span>:
                                        ${endDate.toLocaleDateString(
                                          "en-US",
                                          options
                                        )}
                                    </p>
                                    ${
                                      getListings._count
                                        ? `<p
                                        class="">
                                        <span class="fw-bold">Number of bids</span>:
                                        <span class="badge text-bg-info">${getListings._count.bids}</span>
                                    </p>`
                                        : ""
                                    }
                            <div
                                class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="${
                                      isSubfolder ? "." : ""
                                    }./listing/index.html?listings=${
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

export function singleListingHTML(listing, endDate, options, bidInfo) {
  return `
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-8 col-xl-8 ">
        <div class="card text-black">
          <div class="text-center">
            <h3 class="card-title">
              ${listing.title}</h3>
          </div>
          ${
            listing.media.length > 1
              ? renderCarousel(listing, "listingCarousel")
              : `<img src="${listing.media[0]}"
            class="card-img-top carouselImg px-1 rounded-3"
            alt="" data-bs-toggle="modal"
            data-bs-target="#exampleModal" />`
          }
          
          <div class="card-body mt-1 mb-1">
          <div class="d-flex align-items-center">                
                <div class="">
                  <img src="${listing.seller.avatar}"
                  class="img-fluid rounded-3 sellerImg rounded-circle "
                  alt="profile image for ${listing.seller.name}">
                </div>
                <div class="ms-2">
                  <span class="fw-bold ">Seller</span> :<br> ${
                    listing.seller.name
                  }
                </div>
                <div class="ms-3 align-self-start">
                <span class="fw-bold">Wins</span>  : ${
                  listing.seller.wins.length
                }
                </div>
              </div>
            <div>
              <p class="text-muted mb-4">
                ${listing.tags}
              </p>
              <p>${listing.description}
              </p>
              
              <div class="">
                <p>
                  <span class="fw-semibold">Auction
                    ends</span> :
                  ${endDate.toLocaleDateString("en-US", options)}
                </p>
              </div>
              <div class="">
                <p>
                  <span class="fw-semibold">Number of bids :
                    ${listing._count.bids}</span>
                </p>
              </div>
              <div class="">
                <p>
                  ${
                    listing.bids.length > 0
                      ? `
                  <span class="fw-semibold">Highest
                    bid</span> :
                  <span class="fw-bold">${listing.bids.at(-1).amount}</span>
                  `
                      : ""
                  }
                </p>
              </div>
              <div class="">
                <form class="row">
                  <div class="row align-items-center">
                    <div class="col">
                      <label for="userBid"
                        class="form-label mt-1"><span
                          class="fw-semibold">Your
                          bid</span> :
                      </label>
                    </div>
                    <div class="col">
                      <input type="number"
                        class="form-control" id="userBid"
                        placeholder="0">
                    </div>
                    <div class="col">
                      <button type="submit"
                        class="btn btn-info"
                        id="bidBtn">Place
                        Bid</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class=" mt-1  text-center pt-5">
                <h4 class="mt-2 fw-semibold ">Bid
                  Timeline</h4>
                <hr>
                <div
                  class="container-fluid row row-cols-auto m-1 justify-content-center"
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
    <div class="modal fade" id="exampleModal" tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5"
              id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${
              listing.media.length > 1
                ? renderCarousel(listing, "modalImg", true)
                : `<img src="${listing.media[0]}"
              class="card-img-top modalImg px-1 rounded-3"
              alt="" />`
            }
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
              data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderCarousel(listing, carouselId, modalActive) {
  return `
  <div id="${carouselId}"
                      class="carousel slide"
                      data-bs-ride="carousel">
                      <div class="carousel-inner">
                          ${listing.media
                            .map(
                              (image, index) => `<div
                              class="carousel-item ${
                                index == 0 ? `active` : ``
                              }">
                              <img src="${image}"
                                  class="card-img-top ${
                                    modalActive ? "modalImg" : "carouselImg"
                                  } px-1 rounded-3"
                                  alt="" ${
                                    modalActive
                                      ? ""
                                      : `data-bs-toggle="modal" data-bs-target="#exampleModal"`
                                  }/>
                          </div>`
                            )
                            .join("")}
                      </div>
                      <button class="carousel-control-prev"
                          type="button"
                          data-bs-target="#${carouselId}"
                          data-bs-slide="prev">
                          <span
                              class="carousel-control-prev-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next"
                          type="button"
                          data-bs-target="#${carouselId}"
                          data-bs-slide="next">
                          <span
                              class="carousel-control-next-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Next</span>
                      </button>
                  </div>`;
}

export function userNull() {
  return `
  <div class="container d-flex justify-content-center">
  <div class="card mb-3 col-lg-6">
    <div class="row g-0">
      <div
        class="col-md-4 d-flex align-items-center justify-content-center py-2">
        <img
          src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
          class="img-fluid rounded-circle profileImg"
          alt="default profile image for guest user">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Hello!</h5>
          <p class="card-text">It seems that you are not
            logged in. Please log in to make bids or make
            an
            account by pressing the button
            underneath.</p>
          <div class="">
            <a href="./login/index.html"><button
                class="btn btn-primary"
                id="profileBtn">Login/Register</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
