<template>
  <h1>Make your Appointment</h1>
  <div class="container">
    <div class="col" id="main-col">
      <div class="col-sm-5" id="main-row">
        <form>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Patient Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" />
            <label for="floatingInput">Phone</label>
          </div>
          <div class="form-floating mb-3">
            <input type="textarea" class="form-control" id="floatingInput" />
            <label for="floatingInput">Sickness Details</label>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text"
              >Departmemt</label
            >
            <select class="form-select" v-model="SelectedDepartmentName" @change="ComputeTheDoctorList()">
              <option
                v-for="department in departments"
                :key="department.id"
                :value="department.name"
              >
                {{ department.name }}
              </option>
            </select>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text">Doctor</label>
            <select class="form-select">
              <option
                v-for="doctor in TheFilteredDoctorList"
                :key="doctor.id"
                :value="doctor.name"
              >
                {{ doctor.name }}
              </option>
            </select>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Choose Date</span>
            <input type="date" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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
          info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
        },
        {
          id: 2,
          name: "Dr. Biswajit ",
          department: "Cancer Care Center",
          info: "Consultant ",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
        },
        {
          id: 3,
          name: "Dr. Anonto",
          department: "AIDS",
          info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
        },
        {
          id: 4,
          name: "Dr. Anonto CB",
          department: "AIDS",
          info: "Consultant",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
        },
        {
          id: 5,
          name: "Dr. Arik",
          department: "ENT",
          info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
        },
        {
          id: 6,
          name: "Dr. Arik Md Isthiaque",
          department: "ENT",
          info: "Consultant",
          image: "Biswajit_Bhattacharjee.jpg",
          slot: ["Morning", "Evening"],
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
      SelectedDepartmentName: null,
      TheFilteredDoctorList: null,
    };
  },
  methods: {
    ComputeTheDoctorList(){
      this.TheFilteredDoctorList = null;
      this.TheFilteredDoctorList = this.Doctors.filter(
        (obj) => obj.department === this.SelectedDepartmentName
      );
    }
  }
};
</script>

<style>
#main-col {
  display: grid;
  place-items: center;
}
#main-row {
  padding: 20px;
  border: 1px solid green;
  border-radius: 5px;
}
</style>