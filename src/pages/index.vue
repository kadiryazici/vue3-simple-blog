<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useHead } from '@vueuse/head';

useHead({
   title: 'Ana Sayfa'
});
</script>

<template>
   <div class="navbar">
      <h3>Siteye Hoş Geldiniz</h3>
      <p>
         Bu sitede benim kendim hakkımda bilgilerim ve bloglarım var lütfne
         okuyum yalvarıım
      </p>
   </div>
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
   name: 'Ana Sayfa'
}
</route>
