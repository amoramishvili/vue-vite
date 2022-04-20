import "~/scss/app.scss";
import "./validate";
import "./interceptors";

import { createMyApp } from "./app";

const { app, router, head, state } = createMyApp();

if (window.__INITIAL_STATE__) {
  Object.keys(window.__INITIAL_STATE__).forEach((e) => {
    state[e] = window.__INITIAL_STATE__[e];
  });
}

router.isReady().then(() => {
  app.mount("#app", true);
});
