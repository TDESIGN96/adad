
<template>
  <ClientOnly>
    <div class="tp-text-slider-4-area black-bg-6 fix">
      <div class="tp-text-slider-4-wrap">
        <div class="tp-text-slider-4-active">
          <div class="container-fluid">
            <div class="scroll-container">
              <div class="carousel-primary" ref="carousel">
                <img src="/images/identity/pattern.png" alt="carousel" />
                <img src="/images/identity/pattern.png" alt="carousel" />
                <img src="/images/identity/pattern.png" alt="carousel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly> 
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const carousel = ref(null);
let maxScrollPosition = 100; // Set maximum initial left position

const onScroll = () => {
  // Get the total scrollable height of the document
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the scroll percentage (0 to 1)
  const scrollPercentage = scrollTop / documentHeight;

  // Move the carousel based on the scroll percentage (reduce left)
  const leftPosition = maxScrollPosition - scrollPercentage * maxScrollPosition;
  carousel.value.style.left = `${leftPosition}%`;
};

onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  // Remove scroll event listener
  window.removeEventListener('scroll', onScroll);
});
</script>