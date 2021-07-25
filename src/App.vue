<template>
   <Navbar />
   <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Navbar from '/src/components/Navbar.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   @apply pt-15;
}
* {
   font-family: 'Lexend Deca', sans-serif;
}
.markdown-body {
   @apply w-full max-w-800px mx-auto;
}
</style>
