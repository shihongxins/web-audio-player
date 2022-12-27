import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.{vue,ts,tsx}"],
    }),
    stylelintPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/assets/styles/global.scss";`,
      },
    },
    postcss: "postcss.config.cjs",
  },
});
