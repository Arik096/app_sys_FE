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
    height: 250px;
    width: 300px;
    padding: 50px;
    border: 1px solid green;
    border-radius: 10px;
}
img{
    height: 100px;
}
h5{
    text-decoration: none !important;
}
</style>