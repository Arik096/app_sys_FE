<template>
  <div id="box">
      <img :src="require('../../assets/' + src)">
      <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
    props: ['title','src'],
}
</script>

<style>
#box{
    height: 200px;
    width: 300px;
    padding: 30px;
    border: 1px solid green;
    border-radius: 10px;
}
img{
    height: 100px;
}
h5{
    padding: 15px;
}
a{
  text-decoration: none !important;
  color: teal !important;
  font-size: 26px !important;
}
</style>