import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/ros-marinus-program-construction",
  plugins: [react()],
});
