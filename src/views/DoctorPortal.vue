<template>
<div class="container">
    <div class="row">
        <h1>Doctor Portal</h1>
    </div>
</div>
<LogIn :LoginViewName="LoginViewName"/>
</template>


<script>

import LogIn from "../components/LogIn.vue";

export default {
    components: {
        LogIn,
    },
    data(){
        return{
            LoginViewName: "Doctor",
        }
    }
};
</script>

<style>
</style>