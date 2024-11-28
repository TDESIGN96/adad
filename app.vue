<template>



    <nuxt-layout>
      
      <nuxt-page />
    </nuxt-layout>

</template>

<script setup lang="ts">
import { useState } from '#app';
  import {
    ref,
    watch
  } from 'vue';
  import {
    useRouter
  } from 'vue-router';



  const {
    tpSetScheme
  } = useThemeToggle();


  onMounted(async () => {
    const wow = await import('wow.js')
    new wow.default().init()
  });
  onMounted(() => {
    tpSetScheme('tp-theme-dark');
  })
</script>
<style>
  .preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9999;
}
</style>