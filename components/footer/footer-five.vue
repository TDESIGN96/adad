<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.tp-footer-4__shape {
  animation: rotate 20s linear infinite;
  animation-play-state: paused; /* Initially paused */
}
</style>
<template>
  <footer class="cursor-style">
    <!-- footer area start -->
    <div class="tp-footer-4__main-wrapper bg-identity p-relative z-index-1 fix"
      style="background-image: url(/images/footer/overly-bg.png);">
      <div class="tp-footer-4__area pt-80 ">
        <div class="tp-footer-4__shape">
          <img src="/images/footer/footer-shape-3.png" alt="">
        </div>
        <div class="container">
          <div class="row align-items-start">
            <div class="col-xl-4 col-lg-4 col-md-8 mb-40">
              <div class="tp-footer-4__widget footer-col-4-1">
                <div class="tp-footer-4__logo">
                  <nuxt-link href="/">
                    <img src="/images/identity/logo-footer.png" alt="">
                  </nuxt-link>
                </div>
               
                <!-- social -->
                <footer-social :style_2="true" />
                <!-- social -->
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-4 mb-40">
              <div class="tp-footer-4__widget footer-col-4-2">
                <h4 class="tp-footer-4__widget-title">{{ $t("Home") }}</h4>
                <ul style="padding-left: 0px;">
                  <li>
                    <nuxt-link href="/">
                      <i class="fa-regular fa-arrow-right"></i> {{ $t("Home") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/about-us">
                      <i class="fa-regular fa-arrow-right"></i> {{ $t("AboutUs") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("Sevices") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/team">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("Team") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/clients">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("Clients") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/contact-us">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("ContactUs") }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-2 col-md-6 mb-40">
              <div class="tp-footer-4__widget footer-col-4-2">
                <h4 class="tp-footer-4__widget-title">{{ $t("Sevices") }}</h4>
                <ul style="padding-left: 0px;">
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i> {{ $t("Advertising") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i> {{ $t("TV") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("Consultation") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("SM") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/services">
                      <i class="fa-regular fa-arrow-right"></i>{{ $t("data_analysis") }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 mb-40">
              <div class="tp-footer-4__widget footer-col-4-4">
                <h4 class="tp-footer-4__widget-title">{{ $t("ContactUs") }}</h4>
                <div class="tp-footer-4__widget-mail">
                  <a href="mailto:info@idadco.com">info@idadco.com</a>
                </div>
                <div class="tp-footer-4__widget-mail">
                  <a href="https://wa.me/+9647730321321">009647730321321</a>
                </div>
                <select id="locale-select" v-model="$i18n.locale">
                        <option value="ar">عربي</option>
                        <option value="en">
                    
                    
                    English</option>
     
      </select>
              </div>
              
            </div>

            
          </div>
        </div>
      </div>
      <!-- footer area end -->
      <div class="tp-copyright-4__area d-md-flex d-sm-block justify-content-around tp-copyright-4__bdr-top pt-20 pb-20">

            <div class=" d-flex  ">
              <div class="tp-copyright-4__text text-left">
                <span>@ {{new Date().getFullYear()}}. {{ $t("Rights") }}.</span>
              </div>
            </div>
            <div class="">
              <div class="tp-copyright-4__text text-left">
                <span>Developed By<a target="_blank" href="https://productions.naqrah.net" >Naqrah</a></span>
              </div>
            </div>
          </div>
        </div>
    
  </footer>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from 'vue';

onMounted(async () => {
  await nextTick(); // Ensure DOM is updated before accessing elements

  const footerShape = document.querySelector('.tp-footer-4__shape') as HTMLElement;
  const footerSection = document.querySelector('.tp-footer-4__area') as HTMLElement;

  if (footerShape && footerSection) {
    const playAnimationOnScroll = () => {
      const sectionTop = footerSection.getBoundingClientRect().top;
      const sectionBottom = footerSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      // Check if tp-footer-4 is within the viewport
      if (sectionTop < viewportHeight && sectionBottom > 0) {
        footerShape.style.animationPlayState = 'running';
      } else {
        footerShape.style.animationPlayState = 'paused';
      }
    };

    // Trigger on scroll
    window.addEventListener('scroll', playAnimationOnScroll);

    // Clean up event listener on unmount
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', playAnimationOnScroll);
    });

    // Initial check
    playAnimationOnScroll();
  } else {
    console.error('Failed to find footerShape or footerSection elements.');
  }
});
</script>