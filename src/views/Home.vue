<template>
  <div class="home">
    <div id="home_title">
      <h1>Welome</h1>
    </div>
    <div id="option_boxes">
      <div v-for="homepage_icon in homepage_icons" :key="homepage_icon.name">
        <Box :src="homepage_icon.src" :title="homepage_icon.name"/>
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
  data(){
    return{
      homepage_icons: [
        {name: 'Get a Apointment', src: 'apointment.svg'},
        {name: 'Find Your Doctor', src: 'doctor.svg'},
        {name: 'Patient Portal', src: 'patient.svg'}
      ]
    }
  }
};
</script>

<style>
#option_boxes {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px 20px;
  height: auto;
  grid-template-areas:
    ". . .";
}
</style>
