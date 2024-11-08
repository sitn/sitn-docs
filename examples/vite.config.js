/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/services/examples/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "getfeatureinfo-query": resolve(__dirname, "getfeatureinfo-query/demo.html"),
        "layer-selector": resolve(__dirname, "layer-selector/demo.html"),
        "wmts-getcapabilities": resolve(__dirname, "wmts-getcapabilities/demo.html"),
        "wmts-plain": resolve(__dirname, "wmts-plain/demo.html"),
        "wms": resolve(__dirname, "wms/demo.html"),
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    target: "es2020",
    minify: false,
  },
});
