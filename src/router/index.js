import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Itemlist from "../views/Itemlist.vue";
import Signup from "../views/Signup.vue";
import Cart from "../views/Cart.vue";
import Signin from "../views/SignIn.vue";
import CheckoutForm from "../views/CheckoutForm.vue";
import PaymentDetails from "../views/PaymentDetails.vue";
import { useGroceryStore } from "../stores/grocery";
import Profile from "../views/Profile.vue";
import OrderHistory from "../views/OrderHistory.vue";
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
      meta: { authPage: true },
      beforeEnter(to, from, next) {
        let store = useGroceryStore();
        if (to.meta.authPage && !store.logedin) {
          next();
        } else next(false);
      },
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
      meta: { authPage: true },
      beforeEnter(to, from, next) {
        let store = useGroceryStore();
        if (to.meta.authPage && !store.logedin) {
          next();
        } else next(false);
      },
    },
    {
      path: "/checkout-form",
      name: "CheckoutForm",
      component: CheckoutForm,
    },
    {
      path: "/payment-details",
      name: "PaymentDetails",
      component: PaymentDetails,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/order-history",
      name: "OrderHistory",
      component: OrderHistory,
    },
  ],
});
// router.beforeEach(function (to, from, next) {
//   let store = useGroceryStore();
//   if (to.meta.authPage && store.logedin) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
