import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
  },
  resolve: {
    // 导入别名
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  base: process.env.NODE_ENV === 'production' ? 'shopp-web' : '/',
});
