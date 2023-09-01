import { ref, computed, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useGroceryStore = defineStore("grocery", () => {
  const cartitems = ref([]);
  let items = ref({});
  let error = ref(null);
  let logedin = ref(false);
  let email = ref("");
  let password = ref("");
  let user = ref([]);
  let router = useRouter();

  onMounted(() => {
    let storeditem = localStorage.getItem("cart");
    if (storeditem) {
      try {
        storeditem = JSON.parse(storeditem);
        cartitems.value = storeditem;
      } catch (e) {}
    }
  });
  onUnmounted(() => {
    localStorage.clear();
  });
  function UpdateCart() {
    localStorage.setItem("cart", JSON.stringify(cartitems.value));
  }
  async function signin() {
    let res = await axios.get(
      `http://localhost:3000/users?email=${email.value}&password=${password.value}`
    );
    if (res.data) {
      user.value = await res.data[0];
      alert("You have successfully loged in");
      console.log(user.value.fname);
      router.push("/");
      localStorage.setItem("user", JSON.stringify(user.value));
      logedin.value = true;
      email.value = "";
      password.value = "";
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
  return {
    cartitems,
    Gtotal,
    totalitems,
    UpdateCart,
    email,
    password,
    signin,
    signout,
    router,
    logedin,
    user,
  };
});
