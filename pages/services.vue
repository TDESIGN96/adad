<template>
  <div>
    <nuxt-layout name="layout-one">

     <!-- hero banner -->
      <HeroBannerEight />
     <!-- hero banner -->

       <!-- marquee area -->
       <marquee-two />
      <!-- marquee area -->
   
      
         <!-- project area -->
         <project-two />
      <!-- project area -->


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

  setTimeout(() => {
    useCharAnimation();
    useAnimationTitle();
    buttonAnimation();
    servicesPanel();
  },50)
});
</script>
