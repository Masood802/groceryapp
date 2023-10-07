<template>
  <Header></Header>
  <h1>list of items</h1>
  <div class="conatiner">
    <div class="items" v-for="item in store.items" :key="item.id">
      <img :src="item.image" alt="ShowImage" />
      <h3>{{ item.title }}</h3>
      <h4>Price:{{ item.price }}/KG</h4>
      <p :class="availabilty(item)">{{ availabilty(item) }}</p>
      <button
        @click="Additems(item)"
        :class="{ disabled: item.stock === 0 }"
        v-if="store.logedin"
      >
        Add to Cart
      </button>
      <button v-else @click="router.push('/sign-in')">
        Signin to add items
      </button>
      <button
        @click="buy(item)"
        :class="{ disabled: item.stock === 0 }"
        v-if="store.logedin"
      >
        Buy
      </button>
    </div>
  </div>
  <the-footer></the-footer>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useGroceryStore } from "../stores/grocery";
import Header from "../components/Header.vue";
import TheFooter from "../components/TheFooter.vue";
import axios from "axios";
let router = useRouter();
let store = useGroceryStore();
function availabilty(item) {
  if (item.stock >= 10) return "Available";
  else if (item.stock < 10 && item.stock > 0) return "Low-Stock";
  else return "Not-Available";
}
onBeforeMount(async () => {
  const res = await axios.get("http://localhost:3000/items");
  store.items = await res.data;
});
function Additems(item) {
  let existingItem = store.cartitems.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    store.cartitems.push({ ...item, quantity: 1 });
  }
  store.UpdateCart();
}
function buy(item) {
  Additems(item);
  router.push("/checkout-form");
}
</script>
<style scoped>
.conatiner {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 1.5em;
}
.items {
  width: 15em;
  height: 30em;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
  margin: 1em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 13em;
  margin: 1em;
  height: 12em;
  background-color: rgb(247, 246, 245);
}
h1 {
  text-align: center;
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
}
button {
  width: 90%;
  background: rgb(56, 148, 14);
  border: none;
  margin: 0.2em auto;
  border-radius: 0.2em;
  padding: 0.5em;
  color: whitesmoke;
  font-weight: bold;
}
h3,
h4 {
  line-height: 0.1;
}
.Not-Available,
.Low-Stock {
  color: red;
}
.disabled {
  background: rgb(200, 211, 195) !important;
  cursor: not-allowed !important;
}
</style>
