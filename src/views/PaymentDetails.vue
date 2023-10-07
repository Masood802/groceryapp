<template>
  <div class="main"></div>
  <div class="navs"><Header></Header></div>
  <div class="payment">
    <div class="card">
      <img src="../assets/pngwing.png" alt="" />
      <pre>{{ cardNo }}</pre>
      <h3>{{ HolderName }}</h3>
      <h5>VALID THRU<br />{{ month }}/{{ year }}</h5>
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
          id="cardNo"
          name="cardnum"
          v-model="cardNo"
          @input="updateCardNo"
        />
      </div>
      <div class="expiry">
        <div class="input-control-exp">
          <label for="expiry">Expiration Date</label>
          <input
            type="text"
            name="expiry"
            placeholder="Month"
            v-model="month"
            @keyup="updatemonth"
            id="month"
          />
        </div>
        <div class="input-control-exp">
          <label for="expiry">&nbsp;</label>
          <input
            type="text"
            name="expiry"
            placeholder="Year"
            v-model="year"
            @keyup="updateyear"
            id="year"
          />
        </div>
        <div class="input-control-cvc">
          <label for="CVC">CVC </label>
          <input
            type="text"
            name="CVC"
            placeholder="cvc"
            v-model="cvc"
            id="cvc"
            @input="updatecvc"
          />
        </div>
      </div>

      <div class="gtotal">
        <p>Total Payment: {{ store.shipping + store.Gtotal }}</p>
      </div>
      <button @click="confirm">Confirm Payment</button>
    </form>
    <div class="paymentok" v-if="paymentdone">
      <p>Your Payment is Successful.check your account for ordertracking</p>
      <button @click="router.push('item-list')">Continue Shopping</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import { useGroceryStore } from "../stores/grocery";
let store = useGroceryStore();
let cardNo = ref("1200 1400 1300 2100");
let HolderName = ref("MAsood UR Rehman");
let year = ref("2025");
let month = ref("12");
let cvc = ref("369");
let paymentdone = ref(false);
let router = useRouter();
function updateCardNo() {
  cardNo.value = document.getElementById("cardNo").value;
}
function updatemonth() {
  month.value = document.getElementById("month").value;
}
function updateyear() {
  year.value = document.getElementById("year").value;
}
function confirm() {
  if (
    cardNo.value === "" ||
    HolderName.value === "" ||
    month.value === "" ||
    year.value === ""
  ) {
    console.warn("Not-Valid Data");
    alert("Enter Valid data and try again");
  } else {
    paymentdone.value = true;
    store.orderDetail = store.cartitems;
    localStorage.setItem("order", JSON.stringify(store.orderDetail));
    localStorage.removeItem("cart");
    store.cartitems = [];
    cardNo.value = "XXXX XXXX XXXX XXXX";
    HolderName.value = "";
    month.value = "";
    year.value = "";
    store.shipping = 0;
  }
}
function updatecvc() {
  cvc.value = document.getElementById("cvc").value;
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
  left: 0.5em;
  color: rgb(63, 53, 53);
  font-weight: bold;
  font-size: 1em;
}
h3 {
  position: relative;
  top: 5.5em;
  left: 0.5em;
  color: rgb(241, 224, 224);
}
pre {
  position: relative;
  top: 50px;
  color: rgb(226, 204, 204);
  font-weight: bold;
  font-size: 1.2em;
  text-indent: 2em;
  letter-spacing: 3px;
}
h5 {
  position: relative;
  top: 6.5em;
  left: 7.5em;
  color: rgb(226, 204, 204);
  text-align: center;
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
  background-size: 100%;
  height: 42em;
  background-repeat: no-repeat;

  filter: blur(5px);
}
.payment {
  width: 50%;
  height: 37em;
  position: absolute;
  left: 20em;
  top: 5em;
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
.paymentok {
  width: 50%;
  padding: 1em;
  background-color: beige;
  box-shadow: 0.2em 0 0.4em 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 6em;
  left: 10.5em;
}
.paymentok button {
  margin: 1.5em 3em;
}
</style>
