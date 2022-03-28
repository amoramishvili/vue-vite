import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";
import svgLoader from "vite-svg-loader";

require("dotenv").config();

export default ({ command }) => {
  const config: UserConfig = {
    plugins: [
      vue(),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      svgLoader(),
    ],
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "assets"),
      },
    },
    define: {
      "process.env": process.env,
    },
  };

  if (command === "build") {
    config.plugins.push(
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }

  return config;
};
