<template>
   <header>
      <!-- header area start -->
      <div
         :class="`tp-header-4__area tp-header-transparent tp-header-4__mob-ptb tp-header-4__plr header ${style_2?'tp-header-4__white-color cursor-style':''}`">
         <div class="container-fluid">
            <div class="row align-items-center">

               <div class="col-xl-12 d-none d-xl-block">
                  <div class="tp-header-4__menu text-center">
                     <nav>
                        <ul class="d-flex justify-content-evenly">
                           <div class="col-lg-4">
                              <li class="p-static">
                                 <nuxt-link href="/">الرئيسية</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">خدماتنا</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">العملاء</nuxt-link>


                              </li>
                           </div>
                           <li class="p-static d-inline-block">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-6 logo-adad">
                                 <div class="tp-header-3__logo">
                                    <nuxt-link class="logo-white" to="/">
                                       <img src="/images/logo/logo.png" alt="">
                                    </nuxt-link>

                                 </div>
                              </div>


                           </li>
                           <div class="col-lg-4">
                              <li class="p-static">
                                 <nuxt-link href="#">فريق العمل</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="/about-us">من نحن</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">تواصل معنا</nuxt-link>


                              </li>
                           </div>
                        </ul>
                     </nav>
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
      <!-- header area end -->
   </header>

   <header>
      <!-- header area start -->
      <div
         :class="`tp-header-4__area tp-header-transparent tp-header-4__mob-ptb tp-header-4__plr tp-int-menu tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''} ${style_2?'tp-header-4__white-color cursor-style':''}`">
         <div class="container-fluid">
            <div class="row align-items-center">


               <div class="col-xl-12 d-none d-xl-block">
                  <div class="tp-header-4__menu text-center">
                     <nav>
                        <ul class="d-flex " style="justify-content: space-around;">
                           <div class="col-lg-4 d-inline-block">
                              <li class="p-static">
                                 <nuxt-link href="#">الرئيسية</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">خدماتنا</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">العملاء</nuxt-link>


                              </li>
                           </div>
                           <li class="p-static d-inline-block">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-6 logo-adad">
                                 <div class="tp-header-3__logo">
                                    <nuxt-link class="logo-white" to="/">
                                       <img src="/images/logo/logo.png" alt="">
                                    </nuxt-link>
                                    <nuxt-link v-if="!style_2" class="logo-black" to="/">
                                       <img src="/images/logo/logo-black.png" alt="">
                                    </nuxt-link>
                                    <nuxt-link v-if="style_2" class="logo-black" to="/">
                                       <img src="/images/logo/logo.png" alt="">
                                    </nuxt-link>
                                 </div>
                              </div>


                           </li>
                           <div class="col-lg-4 d-inline-block">
                              <li class="p-static">
                                 <nuxt-link href="#">فريق العمل</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="/about-us">من نحن</nuxt-link>


                              </li>
                              <li class="p-static">
                                 <nuxt-link href="#">تواصل معنا</nuxt-link>


                              </li>
                           </div>
                        </ul>
                     </nav>
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
      <!-- header area start -->
   </header>

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
   defineProps < {
      style_2 ? : boolean
   } > ();

   const handleOffCanvas = () => {
      isOffCanvasOpen.value = !isOffCanvasOpen.value;
   };
</script>