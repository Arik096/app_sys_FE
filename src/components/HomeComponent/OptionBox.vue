<template>
  <div id="box">
      <img :src="require('../../assets/' + src)">
      <h3>{{title}}</h3>
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
    width: 200px;
    padding: 50px;
    border: 1px solid green;
    border-radius: 10px;
}
img{
    height: 100px;
}
h3{
    text-decoration: none !important;
}
</style>