<template>
  <div>

    <!-- blog area start -->
    <div class="blog-details__area blog-details__customize pt-200">
         <div class="container">
            <div class="row">
               <div class="blog-list__title-box">
                  <div class="blog-list__text-sm">
                     <span class="category">Blog</span>
                     <i class="fa-regular fa-angle-right"></i>
                     <span>{{removeBrTag(blog.title)}}</span>
                  </div>
                  <h4 class="blog-list__title tp-char-animation" v-html="blog.title"></h4>
               </div>
               <div class="blog-details__meta mb-70">
                  <span>
                     <img src="/images/users/blog-list-avata-1.png" alt="">
                     <i>Polina Viola</i>
                  </span>
                  <span>{{ blog.date }}</span>
                  <span>2 Comments</span>
               </div>
            </div>
         </div>
         <div class="blog-details__big-thumb text-center cursor-style">
            <img data-speed="0.7" src="/images/blog/blog-details-big-img-2.jpg" alt="">
         </div>
      </div>
      <!-- blog area end -->

      <!-- postbox area start -->
      
      <!-- postbox area end -->
  </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';

defineProps<{blog:IBlogDT}>();

onMounted(() => {
   setTimeout(() => {
      useAnimationTitle();
      useCharAnimation();
      useBlogAnimation();
   },150)
});

function removeBrTag (str:string) {
   return str.replace(/<br>/g, "");
}
</script>