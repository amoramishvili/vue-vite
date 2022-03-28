import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "../views/home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/about.vue");

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
export default router;
