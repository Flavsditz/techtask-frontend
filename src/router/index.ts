import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Heroes.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
