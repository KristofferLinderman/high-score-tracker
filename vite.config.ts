import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app/",
  plugins: [react()],
  test: {
    root: "src/",
  },
});
