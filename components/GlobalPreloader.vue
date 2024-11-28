<template>
  <div v-if="isLoading" class="preloader">
    <div class="drops">
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>

</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app';
import { useRouter } from 'vue-router';
const router = useRouter();

// Access the global loading state


const isLoading = useState<boolean>('isLoading', () => true);

onMounted(() => {
  // Wait for the app to be fully loaded
  router.isReady().then(() => {
    setTimeout(() => {
    isLoading.value = false;
  }, 1000); 
  });
});




</script>

<style scoped>
/* Preloader Container */
.preloader {
  position: fixed; /* Fixes it to the top of the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e9eaea; /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999; /* Ensure it's above all content, including navbar, header, etc. */
}

.drops {
  filter: url("#goo");
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@-webkit-keyframes drop-left-top-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(-65px, 0);
  }
  62% {
    transform: scale(0.7) translate(-65px, -65px);
  }
  94% {
    transform: scale(1.1) translate(0, 0);
  }
}

@keyframes drop-left-top-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(-65px, 0);
  }
  62% {
    transform: scale(0.7) translate(-65px, -65px);
  }
  94% {
    transform: scale(1.1) translate(0, 0);
  }
}
@-webkit-keyframes drop-right-top-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(65px, 0);
  }
  64% {
    transform: scale(0.7) translate(65px, -65px);
  }
  96% {
    transform: scale(1.1) translate(0, 0);
  }
}
@keyframes drop-right-top-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(65px, 0);
  }
  64% {
    transform: scale(0.7) translate(65px, -65px);
  }
  96% {
    transform: scale(1.1) translate(0, 0);
  }
}
@-webkit-keyframes drop-left-bottom-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(-65px, 0);
  }
  66% {
    transform: scale(0.7) translate(-65px, 65px);
  }
  98% {
    transform: scale(1.1) translate(0, 0);
  }
}
@keyframes drop-left-bottom-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(-65px, 0);
  }
  66% {
    transform: scale(0.7) translate(-65px, 65px);
  }
  98% {
    transform: scale(1.1) translate(0, 0);
  }
}
@-webkit-keyframes drop-right-bottom-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(65px, 0);
  }
  68% {
    transform: scale(0.7) translate(65px, 65px);
  }
  100% {
    transform: scale(1.1) translate(0, 0);
  }
}
@keyframes drop-right-bottom-anim {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  33% {
    transform: scale(0.19) translate(65px, 0);
  }
  68% {
    transform: scale(0.7) translate(65px, 65px);
  }
  100% {
    transform: scale(1.1) translate(0, 0);
  }
}
.drop {
  position: absolute;
  background: #457b9d;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: white;
  font-size: 40px;
  border-radius: 100%;
  margin-top: -50px;
  margin-left: -50px;
  -webkit-animation: drop-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
          animation: drop-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
}
.drop:nth-child(2) {
  -webkit-animation-name: drop-right-top-anim;
          animation-name: drop-right-top-anim;
}
.drop:nth-child(3) {
  -webkit-animation-name: drop-left-bottom-anim;
          animation-name: drop-left-bottom-anim;
}
.drop:nth-child(4) {
  -webkit-animation-name: drop-right-bottom-anim;
          animation-name: drop-right-bottom-anim;
}

</style>
