<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useGroceryStore } from "./stores/grocery";
let store = useGroceryStore;
onMounted(() => {
  let data = localStorage.getItem("user");
  if (data) {
    try {
      data = JSON.parse(data);
      store.user = data;
    } catch (e) {}
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
