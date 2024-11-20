<template>
  <div class="tp-project-4-area pb-200 cursor-style">
      <div class="container container-1760">
        
        <div class="tp-project-4-wrapper">
            <div class="tp-project-4-inner-wrap" v-for="member in team " :key="member.id">
        

           
              <div  class="tp-project-4-item"  v-if="shouldDisplayMember(member)">
                  <div  class="tp-project-4-thumb not-hide-cursor" data-cursor="View<br>Demo">
                    
                        <img  :src= "member.imagePath" alt="" />
                  
                  </div>
                  <!-- <img src="/images/identity/coma.png" class="team-coma"> -->
                  <div class="tp-project-4-content d-flex w-100" v-if="shouldDisplayMember(member)">
                    
                    <h4 class="tp-project-4-title">
                      <span href="#">
                        {{ shouldDisplayMember(member) ? member.name : '' }}
                      </span>
                    </h4>
                    <h4 class="tp-project-4-thumb">
                      <span href="#">
                        {{ shouldDisplayMember(member) ? member.position : '' }}
                      </span>
                    </h4>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
/* const teamMembers  = [
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
]; */


interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  lang: string;
  created_at: string;
  updated_at: string;
  imagePath: string; // Updated to match the exact field in the response
  }


const team = ref <TeamMember[]>([]);
const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const shouldDisplayMember = (member: TeamMember): boolean => {
  return member.lang === currentLocale.value;
};

const teams = async(): Promise<void> => {
   
    try {
      const response = await fetch(`https://api.idadco.com/api/v1/teams`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      console.log("API response:", result);  // Log entire response to inspect structure
      
      team.value = Array.isArray(result) ? result : [result];
      console.log("Team data successfully assigned:", team.value);  // Confirm data assignment
    
    } catch (error) {
      console.error('Error fetching account details:', error);
    }
  };

  onMounted(() => {

    teams();
 
  });

</script>