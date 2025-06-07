import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client/src"),
    },
  },
  root: resolve(__dirname, "client"), // ✅ ovo je ključno
  build: {
    outDir: resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
