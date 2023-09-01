<template>
  <div class="main"></div>
  <div class="signin">
    <div class="icon" @click="router.push('/')">
      <img src="../assets/grocery.png" />
      <h1>Grocery <span>Store</span></h1>
    </div>
    <h1>Registraion Form</h1>
    <form @submit.prevent="">
      <div class="inputs">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Your Name" />
      </div>
      <div class="inputs">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Your Email" />
      </div>
      <div class="inputs">
        <label for="cell">Mobile #:</label>
        <input type="phone" name="cell" placeholder="Your Mobile No." />
      </div>
      <div class="inputs">
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Your Password" />
      </div>
      <div class="buttons">
        <button>Register</button>
      </div>
      <h3>
        if you have already registered click
        <router-link :to="{ path: '/sign-in' }">Here</router-link> to sign in
      </h3>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

let router = useRouter();
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
h3 a {
  text-decoration: none;
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
h1 {
  font-size: 3em;
  text-align: center;
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
input[type="text"] {
  width: 85%;
  padding: 0.5em;
  margin: 0.5em;
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
input[type="phone"] {
  width: 85%;
  padding: 0.5em;
  margin: 0.5em;
}
.buttons {
  width: 85%;
  padding: 0.5em;
  margin: 0.5em auto;
}
.buttons button {
  width: 100%;
  padding: 1em;
  margin: 0.5em 2.5em;
  border: none;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 1em;
}
</style>
