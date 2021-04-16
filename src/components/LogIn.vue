<template>
  <div class="container">
    <div class="row" id="login_main_row">
      <div class="col-sm-4" id="login_main_col">
        <form id="login_form">
          <div class="input-group mb-3">
            <span class="input-group-text">Username</span>
            <input type="text" class="form-control"/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Password</span>
            <input type="password" autocomplete="off" class="form-control"/>
          </div>
          <div id="login_form_buttons">
            <button
              class="btn btn-primary"
              id="login_button"
            >
              Login
            </button>
            <button class="btn btn-warning" id="signup_button">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['LoginViewName']
};
</script>

<style>
#login_main_row {
  display: grid;
  place-items: center;
  padding: 10px;
}

#login_main_col {
  padding: 20px;
  border: 1px solid green;
  border-radius: 5px;
}

#login_button,
#signup_button {
  margin: 5px;
}
</style>