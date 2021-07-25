import App from './App.vue';
import routes from 'virtual:generated-pages';
import 'virtual:windi.css';

import { viteSSR } from 'vite-ssr/vue';
import { createHead } from '@vueuse/head';

export default viteSSR(
   App,
   {
      routes
   },
   ({ app, router }) => {
      const head = createHead();
      app.use(head);

      let postPages = routes.filter((route) => {
         return route.path.startsWith('/posts/') ? true : false;
      });
      postPages = postPages.map((post) => {
         const date = post.meta!.tarih as string;
         let dateSplit = date.split('.').reverse();
         dateSplit[1] = (parseInt(dateSplit[1]) - 1).toString();

         const dateAsNumber = dateSplit.map((v) => Number(v));

         const dateObject = new Date(
            dateAsNumber[0],
            dateAsNumber[1],
            dateAsNumber[2]
         );

         return Object.assign(post, {
            ___time: dateObject.getTime()
         });
      });
      postPages.sort((a, b) => {
         //@ts-ignore
         return b.___time - a.___time;
      });
      app.provide('posts', postPages);

      return {
         head
      };
   }
);
