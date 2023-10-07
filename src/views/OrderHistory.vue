<template>
  <Header></Header>
  <h1 v-if="store.orderDetail.length == 0">
    There are no order Histroy for Your Account
  </h1>
  <div v-else>
    <h2>Your Order List</h2>
<div class="order-main" v-for="order in store.orderDetail" :key="order.index">
  <p>Order-No.{{ order.id * 12483 }}</p>  
  <div>
      <img :src="order.image" alt="order-image" />
    </div>
    <div class="order-detail">
      <p>{{ order.title }}</p>
      <h5> &#215 {{ order.quantity }}</h5>
      <h5>price = {{ order.quantity * order.price }}</h5>
    </div>
  </div>
  <button @click="router.push('item-list')">Continue Shopping</button>
  </div>
  
</template>

<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import { useGroceryStore } from "../stores/grocery";
let store = useGroceryStore();
let router = useRouter();
</script>

<style scoped>
img {
  width: 4em;
  margin:1em;
}
.order-main{
  width:25%;
  margin: 3em auto;
  display: flex;
  justify-content: center;
  line-height: .5em;
}
h2{
  text-align: center;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1em 1.5em;
  margin:auto;
  border: none;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 0.8em;
}
</style>
