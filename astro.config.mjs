import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/About-Durra',
  outDir: 'docs',        // build into docs/ so GitHub Pages can serve it
  output: 'static',      // this is the default, but it's nice to be explicit
});
