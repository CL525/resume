import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  alias: {
    components: './src/components/',
    assets: './src/assets/',
  },
  sassLoader: {
    additionalData: '@import "@/assets/scss/_var.scss";',
  },
  exportStatic: {},
  hash: true
});
