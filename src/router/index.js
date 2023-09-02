import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Itemlist from "../views/Itemlist.vue";
import Signup from "../views/Signup.vue";
import Cart from "../views/Cart.vue";
import Signin from "../views/SignIn.vue";
import CheckoutForm from "../views/CheckoutForm.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/item-list",
      name: "Itemlist",
      component: Itemlist,
    },
    {
      path: "/registration-form",
      name: "signup",
      component: Signup,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/sign-in",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/checkout-form",
      name: "CheckoutForm",
      component: CheckoutForm,
    },
  ],
});

export default router;
