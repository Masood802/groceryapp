<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useGroceryStore } from "./stores/grocery";
let store = useGroceryStore();
let router = useRouter();
onMounted((async) => {
  let data = localStorage.getItem("user");
  data = JSON.parse(data);
  console.log(data);
  if (data) {
    store.user = data;
    store.logedin = true;
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
