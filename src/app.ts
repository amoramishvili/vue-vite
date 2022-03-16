import { createApp } from "vue";
import router from "./router";
import App from "./layouts/App.vue";

export async function createMyApp() {
  const app = createApp(App);
  app.use(router);
  return app;
}
