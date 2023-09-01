<template>
  <Header></Header>
  <h1>Cart</h1>
  <div class="conatiner">
    <div class="items" v-for="record in store.cartitems" :key="record.id">
      <img :src="record.image" alt="ShowImage" />
      <h3>{{ record.title }}</h3>
      <h4>Price:{{ record.price }}/KG</h4>
      <h3>quantity:{{ record.quantity }}</h3>
      <h4>Total Price:{{ record.price * record.quantity }}</h4>
      <button @click="Delete(record.id)">Delete</button>
    </div>
    <div class="checkout">
      <h3>Grand Total:{{ store.Gtotal }}</h3>
      <button v-if="store.cartitems.length>0" @click="router.push('/checkout-form')">Checkout</button>
    </div>
  </div>
  <div class="button">
    <button @click="router.push('/item-list')">Back to List</button>
  </div>
  <the-footer></the-footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGroceryStore } from "../stores/grocery";
import Header from "../components/Header.vue";
import TheFooter from "../components/TheFooter.vue";
let store = useGroceryStore();
let router = useRouter();
function Delete(id) {
  let delitem = store.cartitems.find((item) => item.id === id);
  if (delitem.quantity > 1) {
    delitem.quantity--;
    store.cart--;
    store.UpdateCart();
  } else {
    store.cartitems = store.cartitems.filter((item) => item.id != id);
    store.cart--;
    store.UpdateCart();
  }
}
</script>

<style scoped>
.conatiner {
  width: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 1.5em;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
}
.items {
  width: 100%;
  height: 8em;
  margin: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(247, 245, 245);
}
img {
  width: 4em;
  height: 4em;
  margin: 0.5em;
  background-color: rgb(247, 246, 245);
}
.items button {
  background-color: red;
  color: white;
  margin: 1em;
  padding: 1em;
  border: none;
}
h1 {
  text-align: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button button {
  background-color: green !important;
  border: none;
  margin: 1em;
  padding: 1em 1.5em;
  color: white;
}
.checkout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
}
.checkout button {
  background-color: rgb(21, 75, 30) !important;
  border: none;
  margin: 1em;
  padding: 1em 1.5em;
  color: white;
}
</style>
