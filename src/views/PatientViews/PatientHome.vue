<template>
  <div class="container">
    <div class="col">
      <div class="row">
        <h1>Welcome to the Patient Portal</h1>
        <ul id="patient_nav">
          <li id="patient_nav_li">
            <router-link :to="{ name: 'PatientProfile' }">Profile</router-link>
          </li>
          <li id="patient_nav_li">
            <router-link :to="{ name: 'AppointmentHistoryPatient' }"
              >Appointment History</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#patient_nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
#patient_nav_li{
  list-style: none;
  text-decoration: underline;
}
#patient_nav_li a{
  color: black !important;
  font-size: 20px !important;
}
</style>