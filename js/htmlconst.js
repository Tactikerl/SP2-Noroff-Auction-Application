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
