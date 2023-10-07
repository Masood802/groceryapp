import { ref, computed, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useGroceryStore = defineStore("grocery", () => {
  let cartitems = ref([]);
  let items = ref({});
  let error = ref(null);
  let logedin = ref(false);
  let email = ref("");
  let password = ref("");
  let user = ref({});
  let router = useRouter();
  let shipping = ref(0);
  let orderDetail = ref([]);

  onMounted(() => {
    let storeditem = localStorage.getItem("cart");
    if (storeditem) {
      try {
        storeditem = JSON.parse(storeditem);
        cartitems.value = storeditem;
      } catch (e) {
        error = e.massage;
        throw error;
      }
    }
  });
  function UpdateCart() {
    localStorage.setItem("cart", JSON.stringify(cartitems.value));
  }
  async function signin() {
    if (email.value === "" || password.value === "") {
      alert("Enter Valid email/Password and try again");
    } else {
      let res = await axios.get(
        `http://localhost:3000/users?email=${email.value}&password=${password.value}`
      );

      if (res.status === 200) {
        user.value = await res.data[0];
        alert("You have successfully loged in");
        console.log(res.data);
        router.push("/");
        localStorage.setItem("user", JSON.stringify(user.value));
        logedin.value = true;
        console.log(localStorage);
        email.value = "";
        password.value = "";
      }
    }
  }
  function signout() {
    localStorage.removeItem("user");
    logedin.value = false;
    router.push("/");
  }
  let Gtotal = computed(() => {
    return cartitems.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  });
  let totalitems = computed(() => {
    return cartitems.value.reduce((total, item) => total + item.quantity, 0);
  });
  function calculateshipping() {
    if (Gtotal.value <= 500) {
      shipping.value = 150;
      console.log(shipping.value);
    }
    if (Gtotal.value <= 1000 && Gtotal.value >= 501) {
      shipping.value = 100;
    }
    if (Gtotal.value >= 1001) {
      shipping.value = 0;
    }
  }
  return {
    cartitems,
    Gtotal,
    shipping,
    totalitems,
    UpdateCart,
    email,
    password,
    signin,
    signout,
    router,
    logedin,
    user,
    items,
    calculateshipping,
    orderDetail,
  };
});
