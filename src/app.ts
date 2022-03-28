import { createSSRApp, createApp as createVueApp } from "vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";
import App from "./layouts/App.vue";

export function createMyApp() {
  const isSSR = typeof window === "undefined";
  const app = isSSR ? createSSRApp(App) : createVueApp(App);
  const head = createHead();

  app.use(store);
  app.use(router);
  app.use(head);

  return { app, router, head, store };
}
