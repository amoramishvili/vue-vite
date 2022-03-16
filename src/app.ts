import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./layouts/App.vue";

export async function createMyApp() {
  const app = createApp(App);
  const store = createPinia();
  app.use(store);
  app.use(router);
  return app;
}
