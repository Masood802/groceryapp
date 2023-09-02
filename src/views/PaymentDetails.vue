<template>
  <div class="main"></div>
  <div class="navs"><Header></Header></div>
  <div class="payment">
    <h1>Payment Information</h1>
    <form action="">
      <div class="input-control">
        <label for="name">Name on card</label>
        <input type="text" name="name" />
      </div>
      <div class="input-control">
        <label for="cardnum">Card No</label>
        <input type="Number" name="cardnum" />
      </div>
      <div class="input-control">
        <label for="expiry">Expiration Date</label>
        <input type="text" name="expiry" />
      </div>
      <div class="input-control">
        <label for="expiry"> </label>
        <input type="text" name="expiry" />
      </div>
      <div class="input-control">
        <label for="CVC"> </label>
        <input type="Number" name="CVC" />
      </div>
    </form>
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
.payment {
  width: 80%;
}
</style>
