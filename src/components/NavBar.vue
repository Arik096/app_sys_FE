<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-teal" id="custom_nav">
    <div class="container-fluid" id="custom_nav">
      <!-- <a class="navbar-brand" href="#">APP_SYS</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#custom_nav{
    background-color: #41B883;
    display: grid;
    justify-content: center;
    padding: 10px;
}
li{
    padding-left: 25px;
    padding-right: 25px;
}
#custom_nav a{
  text-decoration: none !important;
  color: #ffffff !important;
  font-size: 26px !important;
}
</style>
