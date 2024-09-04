<template>
  <div>
    <nuxt-layout name="layout-six">

     <!-- hero banner -->
      <hero-banner-four />
      <!-- hero banner -->

      <!-- marquee area -->
      <marquee-two />
      <!-- marquee area -->

      <!-- project area -->
      <project-two />
      <!-- project area -->

  
      <!-- about area -->
      <about-area-two />
      <!-- about area -->
   
        <!-- marquee area -->
        <marquee-two />
      <!-- marquee area -->
      <!-- about fun fact area -->
      <about-fun-fact />
      <!-- about fun fact area -->

  

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "منصة اعداد" });
definePageMeta({ layout: false });
import { buttonAnimation } from "@/utils/buttonAnimation";
const {servicesPanel} = usePinPanel();

onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    useCharAnimation();
    useAnimationTitle();
    buttonAnimation();
    servicesPanel();
  },50)
});
</script>
