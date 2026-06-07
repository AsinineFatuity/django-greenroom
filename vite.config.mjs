
import { defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./frontend/environments/.env.development" });


export default defineConfig({
  base: "/static/",
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend/src"),
      images: path.resolve(__dirname, "./frontend/src/images"),
    },
    dedupe: ["react", "react-dom"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    assetsDir: "assets",
    emptyOutDir: true, // Empty the output directory before build
    manifest: "manifest.json",
    rollupOptions: {
      input: {
        mainAssets: path.resolve(__dirname, "./frontend/index.tsx"),
      },
    },
    sourcemap: false,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: true
  },
  define: {
    "process.env": JSON.stringify(process.env),
  },
  envDir: "./frontend",
});
