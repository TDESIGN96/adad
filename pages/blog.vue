<template>
  <div>
    <nuxt-layout name="layout-six">
      <!-- blog area -->
      <blog-area />
      <!-- blog area -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog Page - Diego" });
definePageMeta({ layout: false });


onMounted(() => {

  setTimeout(() => {
    useAnimationTitle();
    useCharAnimation();
    useBlogAnimation();
  },50)
});
</script>
