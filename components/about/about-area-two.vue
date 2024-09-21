<template>
  <div class="section">
    <div class="tp-hero-2__bg adad-bg tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
        <div class="tp-hero-2__boder-circle">
          <span></span>
        </div>
        <div class="container">
          <div class="tp-hero-2__exp-thumb-main p-relative">
              
              
          </div>
          <div class="tp-hero-2__exp-brand-wrap">
            <div
            class="tp-project-3__title-box  text-center portfolio-sec-pin">            
            <h5 class="tp-section-title-1 tp_title_anim"> {{ $t("Discover") }}</h5>
            <h3 class="tp-section-title-3 tp_title_anim header semo"> {{ $t("Clients") }}</h3>
            <img
              class="coma"
              src="/images/identity/coma.png"
              alt="" style="position: absolute;top:1.2rem;right:56%; width: 4%;opacity: 0.2;"
            />
          </div>
              <div class="row row-cols-lg-4 row-cols-md-2 ">
                <div v-for="(b,i) in brands" :key="i" class="col-xl mb-10">
                    <div class="tp-hero-2__exp-brand">
                      <img :src="b" alt="">
                    </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const brands = [
  '/images/brand/logo_01.png',
  '/images/brand/logo_02.png',
  '/images/brand/logo_03.png',

]
</script>