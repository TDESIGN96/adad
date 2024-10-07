<template>
  <client-only>
    
  <div class="tp-project-3__area p-relative adad-bg pt-110 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div
            class="tp-project-3__title-box pb-30 text-center portfolio-sec-pin ">
            <h5 class="tp-section-title-1  tp_title_anim">{{ $t("Discover") }}</h5>
            <h3 class="tp-section-title-3 tp_title_anim header semo"> {{ $t("Sevices") }}</h3>
            <img
              class="coma"
              src="/images/identity/coma.png"
              alt="" style="position: absolute;top:1.2rem;right:56%; width: 4%;opacity: 0.2;"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-portfolio-item-wrapper-3">
            <div
              v-for="(imgSrc, i) in project_images"
              :key="i"
              class="tp-portfolio-item-3 portfolio-panel pb-5 tp-hover-reveal-text"
              ref="slideRefs"
              @mousemove="moveText($event, i)"
            >
            <nuxt-link :href="`/services-details/${i+1}`">
                <img :src="imgSrc" alt="" />
                <span></span>
                <div class="tp-portfolio-view-btn-3">
                  <span>{{ $t("Discover") }} <br />  {{ $t("More") }}</span>
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import services_data from "@/data/services-data";  // Import your services data
const { portfolioPanel } = usePinPanel();
const { moveText, slideRefs } = useMoveText();

const project_images_en = [
  "/images/portfolio/3/portfolio-1-en.png",
  "/images/portfolio/3/portfolio-2-en.png",
  "/images/portfolio/3/portfolio-3-en.png",
  "/images/portfolio/3/portfolio-4-en.png",
  "/images/portfolio/3/portfolio-5-en.png",
  "/images/portfolio/3/portfolio-6-en.png",
];

const project_images_ar = [
  "/images/portfolio/3/portfolio-1.png",
  "/images/portfolio/3/portfolio-2.png",
  "/images/portfolio/3/portfolio-3.png",
  "/images/portfolio/3/portfolio-4.png",
  "/images/portfolio/3/portfolio-5.png",
  "/images/portfolio/3/portfolio-6.png",
];

// i18n setup
const { locale } = useI18n();

// Function to select the appropriate image set based on the locale
const getProjectImages = () => {
  return locale.value === 'ar' ? project_images_ar : project_images_en;
};

// Define a reactive array to hold the current project images
const project_images = ref(getProjectImages());

// Watch for locale changes and update the images accordingly
watch(() => locale.value, () => {
  project_images.value = getProjectImages();
});
const services = ref(services_data);
onMounted(() => {
  setTimeout(() => {
    portfolioPanel()
  },100)
})
</script>
