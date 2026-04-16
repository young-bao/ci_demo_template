import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	console.log(process.env.BASE_PATH);

	const base = mode === "production" ? process.env.BASE_PATH : "/";
	return {
		base,
		plugins: [vue()],
	};
});
