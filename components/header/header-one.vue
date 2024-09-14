<template>
  <div>
    <header>
      <div class="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
        <span class="tp-header-border" style="width: 100%"></span>
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center d-none d-lg-flex">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo">
                  <nuxt-link class="logo-white" href="/">
                    <img src="/images/logo/logo-green.png" alt="" style="width: 26px" />
                  </nuxt-link>

                </div>
              </div>
              <div class="col-xl-7 col-lg-7 ">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>





              <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">

                  <div class="tp-header-3__btn d-none d-md-block">
                    <nuxt-link class="tp-btn-white" href="/contact-us#contact-form">
                      استشارة مجانية
                      <span>
                        <svg-pen />
                      </span>
                    </nuxt-link>
                  </div>

                </div>
              </div>
            </div>

            <div class="pl-50 pr-50 col-xl-3 col-lg-6 col-md-6 col-12 d-md-none d-flex justify-content-between ">

              <div class="tp-header-3__right-action d-flex justify-content-between align-items-center ">





                <div class="tp-header-3__btn d-none d-md-block">
                  <nuxt-link class="tp-btn-white" href="#">
                    تواصل معنا
                    <span>
                      <svg-pen />
                    </span>
                  </nuxt-link>
                </div>
                <div class="tp-header-3__bar">
                  <button @click="handleOffCanvas" class=" tp-menu-bar tp-offcanvas-open-btn">
                    <svg-menu-bar />
                  </button>
                </div>
              </div>


              <div class="logo-adad d-flex">
                <div class="tp-header-3__logo">
                  <nuxt-link class="logo-white" to="/">
                    <img src="/images/logo/logo.png" alt="">
                  </nuxt-link>

                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->

    <!-- header area start -->
    <header>
      <div id="sticky-header"
        :class="`tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''}`">
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center d-none d-lg-flex">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo">
                  <nuxt-link class="logo-white" href="/">
                    <img src="/images/logo/logo.png" alt="" style="width: 26px" />
                  </nuxt-link>

                </div>
              </div>
              <div class="col-xl-7 col-lg-7 ">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-7 col-6">
                <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">

                  <div class="tp-header-3__btn d-none d-md-block">
                    <nuxt-link class="tp-btn-white" href="/contact-us#contact-form">
                      استشارة مجانية
                      <span>
                        <svg-pen />
                      </span>
                    </nuxt-link>
                  </div>

                </div>
              </div>
            </div>



            <div class="pl-50 pr-50 col-xl-3 col-lg-6 col-md-6 col-12 d-md-none d-flex justify-content-between ">

<div class="tp-header-3__right-action d-flex justify-content-between align-items-center ">





   <div class="tp-header-3__btn d-none d-md-block">
      <nuxt-link class="tp-btn-white" href="/contact">
         تواصل معنا
         <span>
            <svg-pen />
         </span>
      </nuxt-link>
   </div>
   <div class="tp-header-3__bar">
      <button @click="handleOffCanvas" class=" tp-menu-bar tp-offcanvas-open-btn">
         <svg-menu-bar />
      </button>
   </div>
</div>


<div class="logo-adad d-flex">
   <div class="tp-header-3__logo">
      <nuxt-link class="logo-white" to="/">
         <img src="/images/logo/logo.png" alt="">
      </nuxt-link>

   </div>
</div>
</div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->
  </div>

  <!-- offcanvas area start -->
  <offcanvas-two :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas" />
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
  const {
    sticky,
    isStickyVisible
  } = useSticky();
  const {
    isActive,
    toggleTheme,
    tpInitTheme
  } = useThemeToggle();

  const isOffCanvasOpen = ref < boolean > (false);

  const handleOffCanvas = () => {
    isOffCanvasOpen.value = !isOffCanvasOpen.value;
  };
</script>
