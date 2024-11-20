<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- Hero banner -->
      <hero-banner-five />
      <!-- Hero banner -->

      <!-- Marquee area -->
      <marquee-two />
      <!-- Marquee area -->

      <!-- About area with mission data -->
      <about-area-six
        v-if="aboutData"
        :description="aboutData.description"
        :description_ar="aboutData.description_ar"
      />
      <!-- About area -->

      <!-- Another marquee -->
      <marquee-two />
      <!-- Another marquee -->

      <!-- About area three -->
      <about-area-three 

       v-if="aboutData"
      :mission_description="aboutData.mission_description"
      :mission_description_ar="aboutData.mission_description_ar"
      :imagePath="aboutData.mission_image_path"/>
      <!-- About area three -->

      <!-- Testimonial section -->
      <testimonial-three />
      <!-- Testimonial section -->

      <!-- About area four -->
      <about-area-four 
      v-if="aboutData"
      :vision_description="aboutData.vision_description"
      :vision_description_ar="aboutData.vision_description_ar"
      :imagePath="aboutData.vision_image_path"
      />
      <!-- About area four -->

      <!-- Hero banner one -->
      <hero-banner-one 
      v-if="aboutData"
      :social_security_description="aboutData.social_security_description"
      :social_security_description_ar="aboutData.social_security_description_ar"
      :imagePath="aboutData.vision_image_path"
      />
      <!-- Hero banner one -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
useSeoMeta({ title: "منصة اعداد" });
definePageMeta({ layout: false });

import { buttonAnimation } from "@/utils/buttonAnimation";
const { servicesPanel } = usePinPanel();
const aboutData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("https://api.idadco.com/api/v1/about-us");
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    aboutData.value = await response.json();

    // Initialize animations
    setTimeout(() => {
      useCharAnimation();
      useAnimationTitle();
      buttonAnimation();
      servicesPanel();
    }, 50);
  } catch (error) {
    console.error("Error fetching about-us data:", error);
  }
});
</script>
