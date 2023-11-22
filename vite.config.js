import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

const PAGE_ENTRY = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(PAGE_ENTRY, "index.html"),
        signup: resolve(PAGE_ENTRY, "auth", "signup.html"),
        signin: resolve(PAGE_ENTRY, "auth", "signin.html"),
        shared: resolve(PAGE_ENTRY, "shared", "index.html"),
      },
    },
  },
  plugins: [react()],
});
