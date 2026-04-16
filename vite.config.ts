import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === "production" ? "/vue3-ts-vite-starter/" : "/",
	plugins: [vue()],
}));
