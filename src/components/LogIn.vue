<template>
  <div class="container">
    <div class="row" id="login_main_row">
      <div class="col-sm-4" id="login_main_col">
        <form>
          <div class="input-group mb-3">
            <span class="input-group-text">Username</span>
            <input type="text" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Password</span>
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>