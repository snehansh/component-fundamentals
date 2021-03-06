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
    path: "/slot",
    name: "TodoListItem",
    component: () =>
      import(/* webpackChunkName: "slot" */ "../views/TodoListItem.vue")
  },
  {
    path: "/github",
    name: "GitHub",
    component: () =>
      import(/* webpackChunkName: "github" */ "../views/ProjectGitHubProfile.vue")
  },
  {
    path: "/notification",
    name: "Notification",
    component: () =>
      import(/* webpackChunkName: "notification" */ "../views/NotificationCenter.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
