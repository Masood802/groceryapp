<template>
  <div class="main"></div>
  <div class="navs"><Header></Header></div>
  <div>
    <h1>Enter your Card Details for Payment</h1>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped>
.navs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 1em;
}
h1 {
  margin: 2em auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.main {
  width: 100%;
  background-image: url("../assets/background11.jpg");
  background-size: cover;
  height: 38em;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(5px);
}
</style>
