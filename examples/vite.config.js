/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/services/examples/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "getfeature-query": resolve(__dirname, "getfeature-query/demo.html"),
        "getfeatureinfo-query": resolve(__dirname, "getfeatureinfo-query/demo.html"),
        "layer-selector": resolve(__dirname, "layer-selector/demo.html"),
        "wmts-getcapabilities": resolve(__dirname, "wmts-getcapabilities/demo.html"),
        "wmts-plain": resolve(__dirname, "wmts-plain/demo.html"),
        "wms": resolve(__dirname, "wms/demo.html"),
        "cog_basic" : resolve(__dirname, "cog_basic/demo.html"),
        "wms_basic" : resolve(__dirname, "wms_basic/demo.html"),
        "wmts_basic" : resolve(__dirname, "wmts_basic/demo.html"), 
        "potree" : resolve(__dirname, "potree/demo.html"),
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    target: "es2020",
    minify: false,
  },
});
