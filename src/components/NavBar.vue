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
            <router-link :to="{ name: 'PatientPortal' }"
              >Patient Portal</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-light">Login</button>
        </div>
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
</style>
