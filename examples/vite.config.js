/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/services/examples/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "wmts-getcapabilities": resolve(__dirname, "wmts-getcapabilities/demo.html"),
        "wmts-plain": resolve(__dirname, "wmts-plain/demo.html"),
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    target: "es2020",
    minify: false,
  },
});
