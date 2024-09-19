<template>
  <div :class="`tp-offcanvas-area-2 tp-menu-2 ${isOffCanvasOpen?'opened':''}`">
      <div class="tp-offcanvas-shape">
         <img class="tp-offcanvas-shape-2" src="/images/offcanvas/bg-shape-3.png" alt="">
      </div>
      <div class="tp-offcanvas-circle-1">
         <span></span>
      </div>
      <div class="tp-offcanvas-circle-2">
         <span></span>
      </div>
      <div class="tp-offcanvas-wrapper">
         <div class="tp-offcanvas-top-2 d-flex align-items-center justify-content-between">
            <div class="tp-offcanvas-logo-2">
               <a href="#">
                  <img class="logo-white" src="/images/logo/logo.png" alt="">
                  <img class="logo-black" src="/images/logo/logo-black.png" alt="">
               </a>
            </div>
            <div class="tp-offcanvas-close-2">
               <button @click="closeOffcanvas" class="tp-offcanvas-close-btn-2 tp-offcanvas-open-btn-2">
                  <svg-close/>
               </button>
            </div>
         </div>
         <div class="tp-offcanvas-main-2">
            
            <div class="tp-main-menu-mobile d-lg-none">
               <nav>
                  <offcanvas-menus />
               </nav>
               <select id="locale-select" v-model="$i18n.locale">
        <option value="ar">عربي</option>
        <option value="en">
          
          
          English</option>
     
      </select>
            </div>
           
            <div class="tp-offcanvas-contact-2">
               <h3 class="tp-offcanvas-contact-title-2">
                  
                  
                  {{ $t("ContactUs") }} 

               </h3>

               <ul>
                  <li><a href="tel:1245654">+964 123 456 789</a></li>
                  <li><a href="mailto:info@adadplatform.com">info@adadplatform.com</a></li>
                  <li><a href="#">Baghdad, Iraq</a></li>
               </ul>
            </div>
            <div class="tp-offcanvas-social-2">
               <h3 class="tp-offcanvas-contact-title-2">تابعنا على مواقع التواصل</h3>
               <ul>
                  <li>
                     <a href="#">
                        <svg-instagram />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg-facebook />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg-linkedin />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg-youtube />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{isOffCanvasOpen:boolean;}>(),{});
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas');
};
const gallery_images = [
  '/images/offcanvas/offcanvas-1.jpg',
  '/images/offcanvas/offcanvas-2.jpg',
  '/images/offcanvas/offcanvas-3.jpg',
  '/images/offcanvas/offcanvas-2.jpg',
];
</script>