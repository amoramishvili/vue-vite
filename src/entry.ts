import "~/scss/app.scss";
import "./validate";
import "./interceptors";

import { createMyApp } from "./app";
const app = createMyApp();

(async () => {
  app.then((e) => e.mount("#app"));
})();
