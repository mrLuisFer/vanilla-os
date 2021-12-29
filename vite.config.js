import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import * as sass from "sass";

const { typescript } = sveltePreprocess;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sass: {
          async: true,
          implementation: sass,
        },
      }),
    }),
    typescript({ sourceMap: true }),
  ],
});
