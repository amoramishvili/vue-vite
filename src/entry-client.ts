import "~/scss/app.scss";
import "./validate";
import "./interceptors";

import { createMyApp } from "./app";

const { app, router, head, store } = createMyApp();

if (window.__INITIAL_STATE__) {
  store.state.value = window.__INITIAL_STATE__;
}

router.isReady().then(() => {
  app.mount("#app", true);
});
