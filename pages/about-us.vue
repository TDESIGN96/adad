<template>
  <div>
    <nuxt-layout name="layout-one">

     <!-- hero banner -->
      <hero-banner-five />
      <!-- hero banner -->

      <!-- marquee area -->
        <marquee-two />
      <!-- marquee area -->
  
       <!-- about area -->
       <about-area-six />
        <!-- about area -->

         <!-- marquee area -->
         <marquee-two />
        <!-- marquee area -->

         <!-- about area -->
       <about-area-three />
        <!-- about area -->

            <!-- about area -->
       <testimonial-three />
        <!-- about area -->

         <!-- about area -->
       <about-area-four />
        <!-- about area -->
       
         <!-- about area -->
        <hero-banner-one />
        <!-- about area -->
       

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
