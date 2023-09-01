<template>
  <div class="main"></div>
  <div class="signin">
    <div class="icon" @click="router.push('/')">
      <img src="../assets/grocery.png" />
      <h1>Grocery <span>Store</span></h1>
    </div>
    <form @submit.prevent="store.signin">
      <div class="inputs">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          v-model="store.email"
        />
      </div>

      <div class="inputs">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          v-model="store.password"
        />
      </div>
      <div class="buttons">
        <button type="submit">signin</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGroceryStore } from "../stores/grocery";

let router = useRouter();
let store = useGroceryStore();
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.signin {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
img {
  width: 10em;
  height: 10em;
}
.icon {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
  cursor: pointer;
}
span {
  color: crimson;
}
form {
  width: 40em;
  margin: 1em auto;
  background-color: transparent;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
}
label {
  margin: 0.5em;
}
.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input[type="password"] {
  width: 85%;
  padding: 0.5em;
  margin: 0.5em;
}
input[type="email"] {
  width: 85%;
  padding: 0.5em;
  margin: 0.5em;
}
.buttons button {
  width: 90%;
  padding: 1em;
  margin: 0.5em 2.5em;
  border: none;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 1em;
}
</style>
