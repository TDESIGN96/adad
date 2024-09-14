<template>
  <client-only>
  <div class="tp-project-3__area p-relative adad-bg pt-110 mb-200">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div
            class="tp-project-3__title-box pb-30 text-center portfolio-sec-pin">
           
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-portfolio-item-wrapper-3">
            <div
              v-for="(imgSrc, i) in project_images"
              :key="i"
              class="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
              ref="slideRefs"
              @mousemove="moveText($event, i)"
            >
              <nuxt-link href="#">
                <img :src="imgSrc" alt="" />
                <span></span>
                <div class="tp-portfolio-view-btn-3">
                  <span>اكتشف <br /> المزيد</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</client-only>
</template>

<script setup lang="ts">
const {portfolioPanel} = usePinPanel();

const { moveText, slideRefs } = useMoveText();
const project_images = [
  "/images/portfolio/3/portfolio-1.png",
  "/images/portfolio/3/portfolio-2.png",
  "/images/portfolio/3/portfolio-3.png",
  "/images/portfolio/3/portfolio-4.png",
  "/images/portfolio/3/portfolio-5.png",
];

onMounted(() => {
  setTimeout(() => {
    portfolioPanel()
  },100)
})
</script>
