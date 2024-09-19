<template>
  <section class="tp-hero-area tp-about-4-area p-relative tp-btn-trigger z-index-1 fix adad-bg">
     
      <div class="tp-hero-shape">
        <div class="tp-hero-shape-1 background-white-mode" style="background-image:url(/images/hero/hero-overlay.png)"></div>
        <div class="tp-hero-shape-1 background-dark-mode" style="background-image:url(/images/hero/hero-overlay-2.png)"></div>
        <span class="tp-hero-shape-2"></span>
      </div>
      
      <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="tp-hero-left-wrapper">
                  <div class="tp-hero-content tp_text_anim p-relative z-index-1">
                    <h3 class="tp-section-title-1 cd-headline clip tp_title_anim color-adad">


                      {{ $t("Social") }}

                        
                        
                    </h3>

                    <p class="text-black">
                      
                      {{ $t("SocialDesc") }}


                      
                    </p>


                    <div class="tp-hero-btn wrap ">
                        <div class="tp-hover-btn-wrapper tp-btn-bounce">
                          
                        </div>
                    </div>
                    
                  </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12">
              <div class="tp-hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                  <div class="tp-hero-thumb-shape">
                    <img class="tp-hero-thumb-shape-1" data-speed="1.4"  src="/images/footer/footer-shape-3.png" alt="">
                    
                  </div>
                  <div class="tp-hero-thumb">
                    <img src="/images/new-img/about/tv.png" alt="">
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">

</script>