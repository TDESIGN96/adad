<template>
  <div class="tp-project-4-area pb-200 cursor-style">
      <div class="container container-1760">
        <div class="tp-project-4-top-wrap mb-70">
            <div class="row">
            
              
            </div>
        </div>
        <div class="tp-project-4-wrapper">
            <div class="tp-project-4-inner-wrap">
              <div v-for="(item) in project_data" :key="item.id" class="tp-project-4-item">
                  <div class="tp-project-4-thumb not-hide-cursor" data-cursor="View<br>Demo">
                    <nuxt-link class="cursor-hide" href="#">
                        <img :src="item.img" alt="">
                    </nuxt-link>
                  </div>
                  <!-- <img src="/images/identity/coma.png" class="team-coma"> -->
                  <div class="tp-project-4-content d-flex w-100">
                    
                    <h4 class="tp-project-4-title">
                      <nuxt-link href="#">{{item.title}}</nuxt-link>
                    </h4>
                    <h4 class="tp-project-4-thumb">
                      <nuxt-link href="#">{{item.position}}</nuxt-link>
                    </h4>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const project_data = [
  {
    id:1,
    img: '/images/users/team-1.png',
    title: `احمد العامري`,
    position: `المؤسس`,
  },
  {
    id:2,
    img: '/images/users/team-2.png',
    title: `ابراهيم مثنى`,
    position: `المدير التنفيذي`,
  },
  {
    id:3,
    img: '/images/users/team-3.png',
    title: `عادل الجاف`,
    position: `شريك مؤسس`,
  },
  {
    id:4,
    img: '/images/users/team-4.png',
    title: `زينب عادل`,
    position: `معدة برامج `,
  },

]
</script>