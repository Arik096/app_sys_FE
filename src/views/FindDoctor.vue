<template>
  <h1>Find your Doctor</h1>
  <div class="container">
    <div class="row">
      <div class="col-sm" id="find_dept">
        <h4>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01"
              >Find By Department</label
            >
            <select class="form-select" id="inputGroupSelect01">
              <option selected>choose a department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </h4>
      </div>
      <div class="col-sm" id="find_name">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Find By Name</span>
          <input
            type="text"
            class="form-control"
            placeholder="type name here"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row" id="result">
      <div class="col-sm" id="result_col"><h4>Result</h4></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  padding: 25px;
}
#result {
  padding: 20px;
}
#find_dept, #find_name, #result_col {
  border: 1px solid green;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}
</style>