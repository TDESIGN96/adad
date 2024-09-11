<template>
  <div>
    <back-to-top/>
    <header-one />
    <div
      id="smooth-wrapper"
      class="tp-page-wrapper adad-bg">
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <footer-five/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
