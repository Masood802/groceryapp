<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import TheFooter from "../components/TheFooter.vue";
let router = useRouter();
</script>

<template>
  <Header></Header>
  <div class="background">
    <div class="text">
      <h1>Welcome to Grocery Store</h1>
      <p>A place to find your fresh Grocery</p>
      <div class="button">
        <button @click="router.push('/item-list')">VISIT TO BUY</button>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("../assets/background11.jpg");
  background-size: cover;
  height: 34em;
  background-repeat: no-repeat;
  background-position: center;
}
.text h1 {
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  color: rgb(26, 86, 177);
}
p {
  text-align: center;
  padding: 0.5em 0 0 0;
}
.button button {
  width: 12em;
  padding: 1em 2.5em;
  background: rgb(128, 62, 0);
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  margin: 1em 12em;
  color: bisque;
}
</style>
