<template>
  <div class="main"></div>
  <div class="navs"><Header></Header></div>
  <div class="msg" v-if="store.logedin === false">
    <h1>
      You are Not loged in please
      <router-link :to="{ path: '/sign-in' }">Signin</router-link> or
      <router-link :to="{ path: '/registration-form' }">Signup</router-link>here
    </h1>
  </div>
  <div class="order" v-else>
    <h1>----------Your Order Summry---------</h1>
    <ul class="summeryheader">
      <li>Serial No</li>
      <li>Name</li>
      <li>Price</li>
      <li>quantity</li>
      <li>Total Price</li>
    </ul>
    <ul v-for="record in store.cartitems" :key="record.id" class="details">
      <li>{{ record.id }}</li>
      <li>{{ record.title }}</li>
      <li>{{ record.price }}</li>
      <li>{{ record.quantity }}</li>
      <li>{{ record.price * record.quantity }}</li>
    </ul>
    <ul class="gtotal">
      <li>Total</li>
      <li>{{ store.Gtotal }}</li>
    </ul>
    <ul class="gtotal">
      <li>Shipping Fee</li>
      <li>{{ store.shipping }}</li>
    </ul>
    <ul class="gtotal">
      <li>Grand Total</li>
      <li>{{ store.shipping + store.Gtotal }}</li>
    </ul>
    <button @click="router.push('/payment-details')">
      Add payment Details to confirm order
    </button>
  </div>
</template>

<script setup>
import { useGroceryStore } from "../stores/grocery";
import Header from "../components/Header.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

let store = useGroceryStore();
let router = useRouter();
onMounted(() => {
  store.calculateshipping();
});
</script>

<style scoped>
.main {
  width: 100%;
  background-image: url("../assets/background11.jpg");
  background-size: cover;
  height: 38em;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(5px);
}
.msg {
  width: 60em;
  background-color: transparent;
  margin: auto;
  height: 30em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
h1 {
  margin: 1em 0;
  text-align: center;
}
.order {
  width: 60em;
  background-color: transparent;
  margin: auto;
  height: 30em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.summeryheader,
.details,
.gtotal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  margin: auto;
}
.summeryheader li,
.details li {
  list-style: none;
  border: 1px solid gray;
  width: 10em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gtotal li {
  list-style: none;
  border: 1px solid gray;
  width: 10em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gtotal li:nth-child(1) {
  flex-grow: 1;
}
button {
  width: 80%;
  padding: 1em;
  margin: 1em 7em;
  border: none;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 1em;
}
.navs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 1em;
}
</style>
