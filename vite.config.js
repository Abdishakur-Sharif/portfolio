import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/models/*.glb", // Path to your .glb files
          dest: "assets/models", // Destination in the build folder
        },
      ],
    }),
  ],
});
