import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess({
      sass: {
        async: true,
        implementation: sass,
      }
    }),
    css: (css) => {
      css.write('public/bundle.css')
    },
  })],
})
