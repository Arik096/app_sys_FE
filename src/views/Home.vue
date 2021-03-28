<template>
  <div class="home">
    <div id="home_title">
      <h1>Welome</h1>
    </div>
    <div class="container" id="option_boxes">
      <div class="row">
        <div
          class="col-md" id="single_box"
          v-for="homepage_icon in homepage_icons"
          :key="homepage_icon.name"
        >
          <router-link :to="{ name: homepage_icon.link }">
            <Box :src="homepage_icon.src" :title="homepage_icon.name" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "../components/HomeComponent/OptionBox.vue";

export default {
  name: "Home",
  components: {
    Box,
  },
  data() {
    return {
      homepage_icons: [
        { name: "Get a Apointment", src: "apointment.svg", link: "Apointment" },
        { name: "Find Your Doctor", src: "doctor.svg", link: "FindDoctor" },
        { name: "Patient Portal", src: "patient.svg", link: "PatientPortal" },
      ],
    };
  },
};
</script>

<style>
#home_title, #option_boxes{
  padding: 25px;
  display: grid;
  justify-content: center;
}
#single_box{
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
}
</style>
