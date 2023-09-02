<template>
  <div class="main"></div>
  <div class="signin">
    <div class="icon" @click="router.push('/')">
      <img src="../assets/grocery.png" />
      <h1>Grocery <span>Store</span></h1>
    </div>
    <h1>Registraion Form</h1>
    <form @submit.prevent="Signup">
      <div class="inputs">
        <label for="name">First Name:</label>
        <input
          type="text"
          name="fname"
          placeholder="Your First Name"
          v-model="user.fname"
        />
      </div>
      <div class="inputs">
        <label for="name">Last Name:</label>
        <input
          type="text"
          name="lname"
          placeholder="Your Last Name"
          v-model="user.lname"
        />
      </div>
      <div class="inputs">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          v-model="user.email"
        />
      </div>
      <div class="inputs">
        <label for="cell">Mobile #:</label>
        <input
          type="phone"
          name="cell"
          placeholder="Your Mobile No."
          v-model="user.cellno"
        />
      </div>
      <div class="inputs">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          v-model="user.password"
        />
      </div>
      <div class="inputs">
        <label for="confirmpassword">Confirm Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Confirm Your Password"
          v-model="user.confirmpassword"
        />
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
import { ref } from "vue";
import axios from "axios";

let router = useRouter();
let user = ref({
  fname: "",
  lname: "",
  cellno: "",
  email: "",
  password: "",
  confirmpassword: "",
});
async function Signup() {
  axios
    .post("http://localhost:3000/users", {
      firstName: user.value.fname,
      lastName: user.value.lname,
      cellno: user.value.cellno,
      email: user.value.email,
      password: user.value.password,
      confirmpassword: user.value.confirmpassword,
    })
    .then(function (res) {
      console.log(res);
      alert("You have successfully created your account");
      router.push("/sign-in");
    })
    .catch(function (error) {
      console.log(error);
    });
}
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
img {
  width: 9em;
  height: 9em;
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
  width: 45em;
  margin: 1em auto;
  background-color: transparent;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
}
label {
  margin: 1em;
}
.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input[type="text"] {
  width: 40em;
  padding: 0.5em;
  margin: 0.5em;
}
input[type="password"] {
  width: 40em;
  padding: 0.5em;
  margin: 0.5em;
}
input[type="email"] {
  width: 40em;
  padding: 0.5em;
  margin: 0.5em;
}
input[type="phone"] {
  width: 40em;
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
