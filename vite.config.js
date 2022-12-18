import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve("", "index.html"),
        listing: resolve("", "listing/index.html"),
        login: resolve("", "login/index.html"),
        profile: resolve("", "profile/index.html"),
        createListing: resolve("", "create/index.html"),
      },
    },
  },
});
