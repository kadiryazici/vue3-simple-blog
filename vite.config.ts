import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Markdown from 'vite-plugin-md';
import Windi from 'vite-plugin-windicss';
import SSR from 'vite-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      Vue({
         include: [/\.vue$/, /\.md$/]
      }),
      Pages({
         pagesDir: 'src/pages',
         extensions: ['md', 'vue']
      }),
      Markdown({
         headEnabled: true
      }),
      Windi(),
      SSR()
   ]
});
