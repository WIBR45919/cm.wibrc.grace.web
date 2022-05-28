import { fileURLToPath, URL } from "url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    reporters: process.env.ON_JENKINS ? "junit" : "default",
    outputFile: "tests-reports/unit/junit.xml",
  },
});
