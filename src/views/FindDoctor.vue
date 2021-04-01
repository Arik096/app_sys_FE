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
            <select
              class="form-select"
              v-model="SelectedDepartmentID"
              @change="ShowSearchResult()"
            >
              <option selected disabled>Choose a Department</option>
              <option
                v-for="department in departments"
                :key="department.id"
                :value="department.name"
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
      <div class="col-sm" id="result_card">
        <h4>Result</h4>
        <table v-for="result in SearchResult" :key="result.id">
          <div class="card" id="result-card">
            <div class="card-header">{{result.name}}</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  {{result.department}}
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">{{result.Info}}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </table>
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
          id: 1,
          name: "Dr. Biswajit Bhattacharjee",
          department: "Cancer Care Center",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          id: 2,
          name: "Dr. Biswajit ",
          department: "Cancer Care Center",
          Info: "Consultant ",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          id: 3,
          name: "Dr. Anonto",
          department: "AIDS",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          id: 4,
          name: "Dr. Anonto CB",
          department: "AIDS",
          Info: "Consultant",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          id: 5,
          name: "Dr. Arik",
          department: "ENT",
          Info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
        },
        {
          id: 6,
          name: "Dr. Arik Md Isthiaque",
          department: "ENT",
          Info: "Consultant",
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
      SelectedDepartmentID: null,
      SearchResult: null,
    };
  },
  methods: {
    ShowSearchResult() {
      this.SearchResult = this.Doctors.filter(
        (obj) => obj.department === this.SelectedDepartmentID
      );
      console.log(this.SearchResult);
    },
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
  border: 1px solid rgb(112, 212, 112);
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}
#result_card{
  display: grid;
  padding: 10px;
  margin: 10px;
}
</style>