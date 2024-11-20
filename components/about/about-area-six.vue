<template>
  <div class="section">
    <div class="tp-hero-2__bg adad-bg tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
        <div class="tp-hero-2__boder-circle">
          <span></span>
        </div>
        <div class="container">
          <div class="tp-hero-2__exp-thumb-main p-relative">
              <div class="tp-hero-2__circle-img-wrap">
                <div class="tp-hero-2__circle-img p-relative">
                   
                    <div class="tp-hero-2__circle-img-2">
                      <img src="/images/hero/hero-circle-1.png" alt="">
                    </div>
                </div>
              </div>
              <div class="row align-items-center z-index-5">
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="tp-hero-2__exp-thumb-wrap p-relative">
                      <div class="tp-hero-2__exp-thumb-bg">
                          <img src="/images/logo/logo-about.png" alt="">
                      </div>
                      <div class="tp-hero-2__exp-thumb-text">
                         
                       
                      </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="tp-hero-2__exp-info">
                      
                     
                      <p class="child-1 "
                      
                      
                      
                      
                      >
                      
                      
                      {{ isArabic ?  description_ar : description }}
                    
                    
                    </p>
                     
                    </div>
                </div>
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
  description: {
    type: String,
    required: true,
  },
  description_ar: {
    type: String,
    required: true,
  },
});
const isArabic = computed(() => locale.value === 'ar');

</script>