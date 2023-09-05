<template>
  <div class="main"></div>
  <div class="navs"><Header></Header></div>
  <div class="payment">
    <div class="card">
      <img src="../assets/pngwing.png" alt="" />
      <pre>{{ cardNo }}</pre>
      <p>{{ HolderName }}</p>
      <h5>VALID THRU</h5>
    </div>
    <h1>Payment Information</h1>
    <form @submit.prevent="Submit">
      <div class="input-control">
        <label for="name">Name on card</label>
        <input type="text" name="name" v-model="HolderName" />
      </div>
      <div class="input-control">
        <label for="cardnum">Card No</label>
        <input
          type="text"
          name="cardnum"
          v-model="cardNo"
          @keyup="updateCardNo"
        />
      </div>
      <div class="expiry">
        <div class="input-control-exp">
          <label for="expiry">Expiration Date</label>
          <input type="text" name="expiry" placeholder="Month" />
        </div>
        <div class="input-control-exp">
          <label for="expiry">&nbsp;</label>
          <input type="text" name="expiry" placeholder="Year" />
        </div>
        <div class="input-control-cvc">
          <label for="CVC">CVC </label>
          <input type="text" name="CVC" placeholder="cvc" />
        </div>
      </div>

      <div class="gtotal">
        <p>Total Payment: {{ store.shipping + store.Gtotal }}</p>
      </div>
      <button>Confirm Payment</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { useGroceryStore } from "../stores/grocery";
let store = useGroceryStore();
let cardNo = ref("XXXX  XXXX  XXXX  XXXX");
let HolderName = ref("");
let yaer = ref("");
let month = ref("");
let cvc = ref("");
function updateCardNo() {
  cardNo.value = input.value;
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.navs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 1em;
}
h1 {
  margin: 0.5em auto;
  text-align: center;
}
p {
  position: relative;
  top: 70px;
  left: 20px;
  color: rgb(226, 204, 204);
  font-weight: bold;
  font-size: 1em;
}
pre {
  position: relative;
  top: 60px;
  left: 10px;
  color: rgb(226, 204, 204);
  font-weight: bold;
  font-size: 1.2em;
  text-indent: 2em;
}
h5 {
  position: relative;
  top: 90px;
  left: 20px;
  color: rgb(226, 204, 204);
  font-weight: bold;
}
img {
  width: 2em;
  height: 2em;
  position: relative;
  top: 30px;
  left: 30px;
}
.main {
  width: 100%;
  background-image: url("../assets/background11.jpg");
  background-size: cover;
  height: 40em;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(5px);
}
.payment {
  width: 50%;
  height: 30em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
}
.input-control {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.card {
  width: 45%;
  height: 12em;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
  background-image: url("../assets/card.jpg");
  border-radius: 0.5em;
  margin: 0.5em auto;
}
.expiry {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: auto;
}
.input-control-exp {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: auto;
}
.input-control-exp input[type="text"] {
  width: 90%;
  margin: 0 1em;
  border: 1px solid lightgray;
  background-color: transparent;
}
.input-control-exp label {
  width: 90%;
  margin: 0.5em 2.2em;
  color: rgb(76, 77, 78);
  text-align: left;
}
.input-control-cvc {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.input-control-cvc input[type="text"] {
  width: 45%;
  margin: 0.5em 5.5em;
  border: 1px solid lightgray;
  background-color: transparent;
}
.input-control-cvc label {
  width: 45%;
  margin: 1em 5em 0 5em;
}
input[type="text"] {
  width: 75%;
  padding: 0.5em;
  border: 1px solid lightgray;
  background-color: transparent;
  margin: 0.5em;
}
label {
  width: 75%;
  color: rgb(76, 77, 78);
}
.gtotal {
  text-align: right;
  margin: 1em;
  font-weight: bold;
  color: rgb(44, 42, 42);
}
button {
  width: 75%;
  padding: 1em 1.5em;
  margin: 1em 5.5em;
  border: none;
  background-color: darkgreen;
  color: white;
  border-radius: 0.5em;
  font-size: 0.8em;
}
</style>
