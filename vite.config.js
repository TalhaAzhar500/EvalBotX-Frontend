import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      // eslint-disable-next-line no-undef
      "/api": process.env.BACKEND_URL || "http://localhost:4000",
    },
  },
  plugins: [react()],
});
