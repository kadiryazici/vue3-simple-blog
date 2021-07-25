<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { inject } from 'vue';
import { Head } from '@vueuse/head';

const pageRoutes = inject<RouteRecordRaw[]>('posts');
</script>

<template>
   <div class="posts">
      <Head>
         <title>Gönderiler</title>
      </Head>

      <RouterLink :to="page.path" v-for="page in pageRoutes" class="post">
         <div class="post-name">{{ page.name }}</div>
         <div class="post-detail">
            <div v-for="(value, key) in page.meta" class="item">
               {{ key }}: {{ value }}
            </div>
         </div>
      </RouterLink>
   </div>
</template>

<style lang="scss" scoped>
.posts {
   @apply w-full max-w-750px mx-auto p-3 rounded-5px border border-2 border-light-600 border-solid;
   box-shadow: 0px 0px 3px 1px hsla(0, 0%, 0%, 0.11);

   .post {
      @apply block no-underline text-red-800 mb-2 p-2 border-dark-300 rounded-2px border-l border-t-0 border-r-0 border-b-0 border-l-2 border-solid;
      .post-name {
         @apply text-size-18px font-bold mb-2;
      }
      .post-detail {
         @apply text-gray-500;
      }
   }
}
</style>
