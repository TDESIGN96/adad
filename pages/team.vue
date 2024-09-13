<template>
  <div>
    <nuxt-layout name="layout-one">
      <div id="pagepiling">
        <about-area-seven />
      </div>

      <!-- marquee area -->
        <marquee-two />
      <!-- marquee area -->

      <!-- marquee area -->
        <TeamMembers />
      <!-- marquee area -->

      <!-- marquee area -->
      <marquee-two />
      <!-- marquee area -->


    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "منصة اعداد" });
definePageMeta({ layout: false });
import TeamMembers from "../components/project/team-members.vue";
import pagePiling from "../utils/pagePiling";
onMounted(() => {
  setTimeout(() => {
    pagePiling();
  },100)
});
</script>
