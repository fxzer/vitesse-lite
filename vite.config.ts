import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { setupVitePlugins } from "./build";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [setupVitePlugins()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
