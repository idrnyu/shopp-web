import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env=loadEnv(mode, process.cwd());
  console.log(env.VITE_APP_ENV);
  return {
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
    base: env.VITE_APP_ENV === 'github' ? 'shopp-web' : '/',
  }
});
