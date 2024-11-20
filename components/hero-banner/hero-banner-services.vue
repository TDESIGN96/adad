<template>
  <div class="tp-hero-5-area p-relative hero-details-bg services-for-mobile" 
  
  
  :style="{ backgroundImage: `url(${backgroundImage})` }" 
  style="overflow-x: hidden;">
        <div class="tp-hero-5-bdr-left tp-hero-5-ptb bg-mobile">
            <div class="row">
              <div class="col-xxl-1 tp-hero-5-thumb-wrap">
                  
              </div>
              <div class="col-xxl-9">
                  <div class="tp-hero-5-title-box z-index-5 mb-120"
              
                  >
                    <h4 class="tp-hero-5-title-bg tp-split-in-right text-black">   
                      
                      <span>{{ service?.title }}</span>
                      <div class="blog-list__title-box">
                          <div class="blog-list__text-sm mt-20">
                            <span class="category text-black">{{ $t("Services") }}</span>
                            <i class="fa-regular text-black fa-angle-left"></i>
                            <span class="text-black">{{ service?.title }}</span>
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
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
import { computed } from 'vue';

// Define IService interface
interface IService {
  id: number;
  image: string;
  cover: string;
  title: string;
  slug: string;
  lang: string;
  user_id: number;
  is_featured: number;
  created_at: string;
  updated_at: string;
  description: string | null;
  imagePath: string;
  coverPath: string;
  sub_services: any[];
}


// Define Props
const props = defineProps<{
  service: IService;
}>();

const backgroundImage = computed(() => {
  return props.service.coverPath || "/default-background.jpg";
});
</script>