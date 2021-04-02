<template>
  <h1>Find your Doctor</h1>
  <div class="container">
    <div class="row">
      <div class="col-sm" id="find_dept">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Find By Department</label
          >
          <select class="form-select" v-model="SelectedDepartmentID">
            <option
              v-for="department in departments"
              :key="department.id"
              :value="department.name"
            >
              {{ department.name }}
            </option>
          </select>
        </div>
        <button class="btn btn-info" @click="ShowDeptSearchResult()">Search</button>
      </div>
      <div class="col-sm" id="find_name">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Find By Name</span>
          <input
            type="text"
            class="form-control"
            placeholder="type name here"
            v-model="typedName"
          />
        </div>
        <button class="btn btn-info" @click="ShowNameSearchResult()">Search</button>
      </div>
    </div>
  </div>
  <div class="container" v-if="SearchResult">
    <div class="row" id="result">
      <h4>Result</h4>
      <div class="col-sm" id="result_card">
        <div v-for="result in SearchResult" :key="result.id">
          <div class="card">
            <div class="card-header">{{ result.name }}</div>
            <div class="card-body">
              <blockquote class="blockquote">
                <p>
                  {{ result.department }}
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">{{ result.Info }}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
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
      typedName: null,
      SearchResult: null,
    };
  },
  methods: {
    ShowDeptSearchResult() {
      this.SearchResult = null;
      this.SearchResult = this.Doctors.filter(
        (obj) => obj.department === this.SelectedDepartmentID
      );
    },
    ShowNameSearchResult(){
      this.SearchResult = null;
      this.SearchResult = this.Doctors.filter(
        (obj) => obj.name.toLowerCase().match(this.typedName.toLowerCase())
      );
    }
  },
};
</script>

<style>
h1 {
  padding: 25px;
}
#result {
}
#find_dept,
#find_name,
#result {
  margin: 20px;
  padding: 20px;
  border: 1px solid rgb(112, 212, 112);
  border-radius: 5px;
}
#result_card {
  display: grid;
  padding: 10px;
  margin: 10px;
}
</style>