<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'Apointment'}">Apointment</router-link> |
    <router-link :to="{name: 'FindDoctor'}">Find Doctor</router-link> |
    <router-link :to="{name: 'PatientPortal'}">Patient Portal</router-link>
  </div>
  <router-view/>
</template>

<style>
*{ 
  overflow-x: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid green;
}

#nav 
{
  padding: 30px;
  background-color: #41B883;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  padding: 30px;
  color: #030303;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
