<template>
  <div class="tp-project-4-area pb-200 cursor-style">
      <div class="container container-1760">
        <div class="tp-project-4-top-wrap mb-70">
            <div class="row">
            
              
            </div>
        </div>
        <div class="tp-project-4-wrapper">
            <div class="tp-project-4-inner-wrap">
              <div v-for="(member) in teamMembers " :key="member.id" class="tp-project-4-item">
                  <div class="tp-project-4-thumb not-hide-cursor" data-cursor="View<br>Demo">
                    <nuxt-link class="cursor-hide" href="#">
                        <img :src="member.img" alt="">
                    </nuxt-link>
                  </div>
                  <!-- <img src="/images/identity/coma.png" class="team-coma"> -->
                  <div class="tp-project-4-content d-flex w-100">
                    
                    <h4 class="tp-project-4-title">
                      <span href="#">{{ $t(member.title) }}</span>
                    </h4>
                    <h4 class="tp-project-4-thumb">
                      <span href="#">{{ $t(member.position) }}</span>
                    </h4>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const teamMembers  = [
  {
    id:1,
    img: '/images/users/team-1.png',
    title: `team.members.1.name`,
    position: `team.members.1.position`,
  },
  {
    id:2,
    img: '/images/users/team-2.png',
    title: `team.members.2.name`,
    position: `team.members.2.position`,
  },
  {
    id:3,
    img: '/images/users/team-3.png',
    title: `team.members.3.name`,
    position: `team.members.3.position`,
  },
 
];




</script>