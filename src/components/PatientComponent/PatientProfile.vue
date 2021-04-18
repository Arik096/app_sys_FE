<template>
<h1>Patient Profile</h1>
<div class="container" id="profile_main_container">
  <div class="col-sm-6" id="profile_box">
    <div class="row" id="profile_box_row">
      <div class="col-sm-3" v-for="patient in Patient" :key="patient.id">
        <img :src="require('../../assets/Patient_img/' + patient.img)" />
      </div>
      <div class="col-sm-7">
        <h1>hello</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
data(){
  return{
    Patient: [
      {Name: "arik", phone: "01521493029", img: "anonto.jpg", Details: "Fever", id: 1}
    ]
  }
}
}
</script>

<style>
#profile_main_container{
display: grid;
place-items: center;
}
#profile_box{
  border: 1px solid green;
  border-radius: 5px;
  padding: 10px;
}
#profile_box_row{
  display: flex;
  justify-content: center;
  align-items: center;
}

#profile_box .row .col-sm-3 img{
  margin: 5px;
  border: 2px solid green;
  border-radius: 10px;
  
}

</style>