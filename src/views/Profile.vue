<template>
  <Header></Header>
  <div class="profile">
    <h1>Profile</h1>
    <img src="../assets/profile.png" alt="profile-picture" />
    <p id="uper">
      Name: {{ store.user.firstName + " " + store.user.lastName }}
    </p>
    <p>Cell Number: {{ store.user.cellno }}</p>
    <p>Email Adrress: {{ store.user.email }}</p>
    <button type="button" @click="router.push('/order-history')">
      Check Order History
    </button>
  </div>
  <div class="footer">
    <the-footer></the-footer>
  </div>
</template>

<script setup>
import { useGroceryStore } from "../stores/grocery";
import Header from "../components/Header.vue";
import { useRouter } from "vue-router";
import TheFooter from "../components/TheFooter.vue";
let store = useGroceryStore();
let router = useRouter();
</script>

<style scoped>
.profile {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
}
h1 {
  text-align: center;
  font-size: 3em;
}
img {
  width: 9em;
  border: 0.3em solid green;
  border-radius: 50%;
}
#uper {
  text-transform: uppercase;
}
button {
  width: 15em;
  padding: 0.8em 1em;
  border: none;
  background-color: crimson;
  color: white;
  border-radius: 0.5em;
  font-size: 0.9em;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 10px;
}
</style>
