<template>
  <Header></Header>
  <h1>There are no order Histroy for Your Account</h1>
  <div>
    {{ orderDetail }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
let orderDetail = ref([]);
onMounted(() => {
  orderDetail.value = localStorage.getItem("order");
  orderDetail.value = JSON.parse(orderDetail.value);
});
</script>

<style></style>
