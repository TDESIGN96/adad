<template>
  <div class="tp-about-4-area  pt-100 pb-200">
      <div class="container container-1320">
        <div class="tp-about-4-border">
            <div class="row justify-content-center">
             
              <div class="col-xl-7 col-lg-8 col-md-8">
                  <div class="tp-about-4-title-box">
                    <h2 class="tp-section-title-3 color-adad mb-20 tp_text_invert" ref="invertRef"> {{ $t("Vision") }}  </h2>
                    <p class="tp_text_invert">



                      
                      
                       
                      {{ isArabic ?  vision_description_ar : vision_description }}                  
                   
                    </p>

                  </div>
              </div>
            
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="tp-about-4-thumb text-center">
                  <img class="rounded-pill" src="/images/new-img/about/vision.png" alt="" data-speed="1.1" data-lag="0">
              </div>
            </div>
            
            
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
defineProps({
  vision_description: {
    type: String,
    required: true,
  },
  vision_description_ar: {
    type: String,
    required: true,
  },
});
const isArabic = computed(() => locale.value === 'ar');
</script>