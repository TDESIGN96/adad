<template>
  <div>
    <nuxt-layout name="layout-one">

     <!-- hero banner -->
      <hero-banner-six />
      <!-- hero banner -->

      <!-- marquee area -->
        <marquee-two />
      <!-- marquee area -->
  
       <!-- about area -->
       <footer-social />
        <!-- about area -->

   <!-- about area -->
   <contact-form />
        <!-- about area -->
      <!-- marquee area -->
      <marquee-two />
      <!-- marquee area -->
        

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
