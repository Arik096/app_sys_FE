<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-teal" id="custom_nav">
    <div class="container" id="custom_nav">
      <a class="navbar-brand"><router-link to="/">App Sys</router-link></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Apointment' }">Apointment</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'FindDoctor' }">Find Doctor</router-link>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                id="Patient_portal_button_dropdown"
                class="btn dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Patient Portal
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenuLink">
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'PatientPortal' }"
                      >Login</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'PatientProfile' }"
                      >Profile</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'AppointmentHistoryPatient' }"
                      >History</router-link
                    ></a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                id="Patient_portal_button_dropdown"
                class="btn dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Doctor Portal
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenuLink">
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'DoctorPortal' }">Login</router-link></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'PatientProfile' }"
                      >Profile</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item"
                    ><router-link :to="{ name: 'AppointmentHistoryPatient' }"
                      >History</router-link
                    ></a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#custom_nav {
  background-color: #41b883;
}
li {
  padding-left: 25px;
  padding-right: 25px;
}
#custom_nav a {
  text-decoration: none !important;
  color: #ffffff !important;
  font-size: 26px !important;
}
#Patient_portal_button_dropdown {
  padding: 0px !important;
}
#navbarTogglerDemo02{
  flex-grow: inherit;
}
#dropdownMenuLink{
  background-color: #41b883 !important;
}
#dropdownMenuLink li a:hover{
  background-color: #030303 !important;
  border-radius: 5px;
}
</style>
