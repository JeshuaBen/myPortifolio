import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      config: "/src/@config",
      components: "/src/components",
      pages: "/src/pages",
      services: "/src/services",
      types: "/src/@types",
      theme: "/src/theme",
      utils: "/src/utils",
      assets: "/src/assets",
    },
  },
});
