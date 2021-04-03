<template>
  <h1>Make your Appointment</h1>
  <div class="container">
    <div class="row" id="main-row">
      <div class="col-sm-6" id="main-col">
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
            <label class="input-group-text">Departmemt</label>
            <select
              class="form-select"
              v-model="SelectedDepartmentName"
              @change="ComputeTheDoctorList()"
            >
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
            <select
              class="form-select"
              v-model="SelectedDoctorName"
              @change="ComputeTheDoctorSlot()"
            >
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
            <label class="input-group-text">Slot</label>
            <div v-for="doctor in SelectedDoctorSlot" :key="doctor.id">
              <select class="form-select">
                <option
                  v-for="slot in doctor.slots"
                  :key="slot.id"
                  :value="slot.name"
                >
                  {{ slot.name }} {{ slot.startTime }} - {{ slot.endTime }}
                </option>
              </select>
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Choose Date</span>
            <input type="date" class="form-control" />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
        </form>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Appointment Status
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3" id="main-col">
        <h3>Check your Appointment Status</h3>
        <form>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" />
            <label for="floatingInput">Phone</label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Choose Date</span>
            <input type="date" class="form-control" />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
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
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
        },
        {
          id: 2,
          name: "Dr. Biswajit ",
          department: "Cancer Care Center",
          info: "Consultant ",
          image: "Biswajit_Bhattacharjee.jpg",
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
        },
        {
          id: 3,
          name: "Dr. Anonto",
          department: "AIDS",
          info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
        },
        {
          id: 4,
          name: "Dr. Anonto CB",
          department: "AIDS",
          info: "Consultant",
          image: "Biswajit_Bhattacharjee.jpg",
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
        },
        {
          id: 5,
          name: "Dr. Arik",
          department: "ENT",
          info: "Consultant (Radiation and clinical Oncology)",
          image: "Biswajit_Bhattacharjee.jpg",
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
        },
        {
          id: 6,
          name: "Dr. Arik Md Isthiaque",
          department: "ENT",
          info: "Consultant",
          image: "Biswajit_Bhattacharjee.jpg",
          slots: [
            {
              id: 1,
              name: "Morning",
              startTime: "9:00 AM",
              endTime: "12:00PM",
              limit: 20,
            },
            {
              id: 2,
              name: "Evening",
              startTime: "2:00 PM",
              endTime: "6:00PM",
              limit: 30,
            },
          ],
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
      SelectedDoctorName: null,
      SelectedDoctorSlot: null,
      ShowModal: 0,
    };
  },
  methods: {
    ComputeTheDoctorList() {
      this.TheFilteredDoctorList = null;
      this.TheFilteredDoctorList = this.Doctors.filter(
        (obj) => obj.department === this.SelectedDepartmentName
      );
    },
    ComputeTheDoctorSlot() {
      this.SelectedDoctorSlot = null;
      this.SelectedDoctorSlot = this.Doctors.filter(
        (obj) => obj.name === this.SelectedDoctorName
      );
    },
    OpenModal() {
      this.ShowModal = 1;
    },
  },
};
</script>

<style>
#main-col {
  padding: 20px;
  margin: 20px;
  border: 1px solid green;
  border-radius: 5px;
  display: grid;
  place-items: start auto;
}
#main-row {
  display: flex;
  justify-content: center;
}
</style>
