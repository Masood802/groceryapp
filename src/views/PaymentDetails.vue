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
        <input type="text" name="cardnum" />
      </div>
      <div class="input-control">
        <label for="expiry">Expiration Date</label>
        <input type="date" name="expiry" />
      </div>
      <div class="input-control">
        <label for="expiry"> </label>
        <input type="text" name="expiry" />
      </div>
      <div class="input-control">
        <label for="CVC"> </label>
        <input type="text" name="CVC" />
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
  margin: 0.5em auto;
  text-align: center;
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
  width: 50%;
  height: 30em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
}
.input-control {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
input[type="text"],
input[type="date"] {
  width: 75%;
  padding: 0.5em;
  border: 1px solid lightgray;
  background-color: transparent;
  margin: 0.5em;
}
label {
  width: 75%;
  color: rgb(76, 77, 78);
}
</style>
