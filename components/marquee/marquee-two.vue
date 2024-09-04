<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
.scroll-container {
  height: auto;
  position: relative;
}

.carousel-primary,
.carousel-secondary {
  top: -23%;
  left: 100%;
  width: 300%;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;

}

.carousel-primary img {
  width: 100%;
  margin-left: 20px;
  padding-bottom: 20px;
}

.carousel-primary {
  display: flex;
  justify-content: space-around;
  animation: scroll-horizontal 20s linear infinite;
  animation-play-state: running; /* Initially paused */
}

.carousel-secondary {
  animation: scroll-horizontal 20s linear infinite;
  animation-delay: 10s;
  animation-play-state: running; /* Initially paused */
}

@keyframes scroll-horizontal {
  0% {
    left: -23%;
  }
  100% {
    left: -100%;
  }
}
</style>

<template>
  <ClientOnly>
    <div class="tp-text-slider-4-area black-bg-6 fix">
      <div class="tp-text-slider-4-wrap">
        <div class="tp-text-slider-4-active">
          <div class="container">
            <div class="scroll-container">
              <div class="carousel-primary">
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
import { onMounted, onBeforeUnmount, nextTick } from 'vue';


</script>
