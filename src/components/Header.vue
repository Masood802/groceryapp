<template>
  <div class="header">
    <div class="navs">
      <div class="icon" @click="router.push('/')">
        <img src="../assets/grocery.png" />
        Grocery <span>Store</span>
      </div>
      <router-link :to="{ path: '/' }"> Home </router-link>
      <router-link :to="{ path: '/item-list' }"> Item-List </router-link>
      <router-link :to="{ path: '/cart' }">
        Cart <sup>{{ store.totalitems }}</sup>
      </router-link>
      <router-link :to="{ path: '/about' }"> About </router-link>
    </div>
    <div class="sigining">
      <router-link :to="{ path: '/sign-in' }"
        ><span v-if="store.logedin === false">Signin</span
        ><span v-else @click="show"
          >Welcome {{ store.user.firstName }}</span
        ></router-link
      >
      <div class="buttons" v-if="toggleshow">
        <button>Signout</button>
        <button>User Profile</button>
      </div>
      <router-link
        :to="{ path: '/registration-form' }"
        v-if="store.logedin === false"
        >Signup</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useGroceryStore } from "../stores/grocery";
import { ref } from "vue";
let store = useGroceryStore();
let router = useRouter();
let toggleshow = ref();
function show() {
  toggleshow.value = !toggleshow.value;
  console.log(toggleshow.value);
}
</script>
<style scoped>
.header {
  width: 95%;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.navs {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navs a,
.sigining a {
  font-size: 1em;
  color: darkgreen;
  text-decoration: none;
}
.sigining {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons {
  display: flex;
}
button {
  width: 7em;
  padding: 0.5em 1em;
  border: none;
  margin: 0 0.5em;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 0.7em;
}
.sigining span:hover .buttons {
  display: flex;
}
.sigining {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sigining span {
  color: darkgreen;
}
sup {
  font-weight: bold;
  color: crimson;
}
img {
  width: 1em;
  height: 1em;
}
.icon {
  margin-top: 0.5em;
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
</style>
