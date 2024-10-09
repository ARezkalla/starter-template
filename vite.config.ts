import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@screens": path.resolve(__dirname, "./src/screens"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@store": path.resolve(__dirname, "./src/app/store"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    reporters: ["verbose"],

    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
})
