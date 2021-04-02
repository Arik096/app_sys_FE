<template>
  <NavBar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'Apointment'}">Apointment</router-link> |
    <router-link :to="{name: 'FindDoctor'}">Find Doctor</router-link> |
    <router-link :to="{name: 'PatientPortal'}">Patient Portal</router-link>
  </div> -->
  <router-view />
  <Footer />
</template>


<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
