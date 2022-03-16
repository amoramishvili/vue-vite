import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ command }) => {
  const config: UserConfig = {
    plugins: [
      vue(),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "assets"),
      },
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

// export default defineConfig({
//   plugins: [
//     vue(),
//     legacy({
//       targets: ["ie >= 11"],
//       additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//       "~": path.resolve(__dirname, "assets"),
//     },
//   },
// });
