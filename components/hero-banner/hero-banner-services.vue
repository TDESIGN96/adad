<template>
  <div class="tp-hero-5-area p-relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="container container-1760">
        <div class="tp-hero-5-bdr-left tp-hero-5-ptb">
            <div class="row">
              <div class="col-xxl-1 tp-hero-5-thumb-wrap">
                  
              </div>
              <div class="col-xxl-9">
                  <div class="tp-hero-5-title-box z-index-5 mb-120">
                    <h4 class="tp-hero-5-title tp-split-in-right text-black">   <span>{{ headingtitle }}</span></h4>
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
    
  </div>
</template>

<script setup lang="ts">
import services_data from "@/data/services-data";
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import type { IServiceDT } from "@/types/service-d-t";
import images from "../../public/images/new-img/big-img/clients.png"

const route = useRoute();

const serviceId = ref(Number(route.params.id));

const service = computed(() => {
  const foundService = services_data.find(s => s.id === serviceId.value);
  console.log('Found Service:', foundService); // Debugging line
  return foundService;
});

const headingtitle = computed(() => {
  return service.value?.headingtitle[0] || ("Home");
});
const backgroundImage = computed(() => {
  return service.value ? service.value.imgbg[0] : '/default-background.jpg';
});
console.log(backgroundImage.value);


</script>