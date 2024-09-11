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
                      
                     
                      <p class="child-1 ">تخصصت في كتابة  نص متميز ومؤثر لمختلف الاشكال الاعلامية بما في ذلك برامج التوك شو وبرامج القنوات الفضائية والدعايات والمسلسلات والافلام. بفريق من المعدين ذوي الخبرة العالية، نحقق النصوص التي تجذب الجماهير في انحاء العالم العربي</p>
                     
                    </div>
                </div>
              </div>
          </div>
          <div class="tp-hero-2__exp-brand-wrap">
              <span class="tp-hero-2__exp-brand-title">
                
              </span>
              <div class="row row-cols-lg-4 row-cols-md-2 ">
                <div v-for="(b,i) in brands" :key="i" class="col-xl mb-10">
                    
                </div>
              </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const brands = [
  '/images/brand/logo2-1.svg',
  '/images/brand/logo2-2.svg',
  '/images/brand/logo2-3.svg',
  '/images/brand/logo2-4.svg',
  '/images/brand/logo2-5.svg',
]
</script>