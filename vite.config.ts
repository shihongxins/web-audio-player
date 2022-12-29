import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.{vue,ts,tsx}"],
    }),
    stylelintPlugin(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定需要缓存的图标文件夹
      symbolId: "icon-[dir]-[name]",
    }),
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
