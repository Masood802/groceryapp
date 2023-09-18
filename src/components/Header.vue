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
        ><span v-else
          >Welcome {{ store.user.firstName }}</span
        ></router-link
      >
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
let store = useGroceryStore();
let router = useRouter();
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
