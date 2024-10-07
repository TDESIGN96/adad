<template>
  <div class="tp-hero-5-area p-relative hero-details-bg " :style="{ backgroundImage: `url(${backgroundImage})` }" style="overflow-x: hidden;">
        <div class="tp-hero-5-bdr-left tp-hero-5-ptb">
            <div class="row">
              <div class="col-xxl-1 tp-hero-5-thumb-wrap">
                  
              </div>
              <div class="col-xxl-9">
                  <div class="tp-hero-5-title-box z-index-5 mb-120"
              
                  >
                    <h4 class="tp-hero-5-title-bg tp-split-in-right text-black">   
                      
                      <span>{{ $t(`services_data.${serviceId}.headtitle`) }}</span>
                      <div class="blog-list__title-box">
                <div class="blog-list__text-sm mt-20">
                  <span class="category text-black">{{ $t("Sevices") }}</span>
                  <i class="fa-regular text-black fa-angle-left"></i>
                  <span class="text-black">{{ $t(`services_data.${serviceId}.headtitle`) }}</span>
                </div>
                <h4 class="blog-list__title tp-char-animation"></h4>
              </div>
                    </h4>
                    <div class="blog-list__title-box">
                  <div class="blog-list__text-sm mt-20">
                  
                 
                     
                  </div>
                  <h4 class="blog-list__title tp-char-animation"></h4>
               </div>
                   
                  </div>
              </div>
            </div>
        </div>
      </div>
    
      <marquee-two />
</template>

<script setup lang="ts">
import services_data from "@/data/services-data";
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';


const route = useRoute();

const serviceId = ref(Number(route.params.id));

const service = computed(() => {
  const foundService = services_data.find(s => s.id === serviceId.value);
  console.log('Found Service:', foundService); // Debugging line
  return foundService;
});


const backgroundImage = computed(() => {
  return service.value ? service.value.imgbg[0] : '/default-background.jpg';
});
console.log(backgroundImage.value);
console.log('Service Data:', service.value);

</script>