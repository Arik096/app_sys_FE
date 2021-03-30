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
            <select class="form-select" :model="Selected">
              <option disabled selected>Choose a Department</option>
              <option
                v-for="department in departments"
                :key="department.id"
              >
                {{ department.name }}
              </option>
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
      <div class="col-sm" id="result_col">
        <h4>Result</h4>
        {{ Selected }}
        <table></table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Doctors: [
        {
          name: "	Dr. Biswajit Bhattacharjee",
          Department: "Cancer Care Center",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          name: "Dr. Anonto",
          Department: "AIDS",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          name: "Dr. Arik",
          Department: "ENT",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
      ],
      departments: [
        {
          name: "Cancer Care Center",
          id: 1,
        },
        {
          name: "AIDS",
          id: 2,
        },
        {
          name: "ENT",
          id: 3,
        },
      ],
      Selected: "",
    };
  },
};
</script>

<style>
h1 {
  padding: 25px;
}
#result {
  padding: 20px;
}
#find_dept,
#find_name,
#result_col {
  border: 1px solid green;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}
</style>