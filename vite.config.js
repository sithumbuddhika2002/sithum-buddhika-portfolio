import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set your desired port
    strictPort: true, // Fails if the port is in use instead of trying another
  },
});