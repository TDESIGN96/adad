<template>
  <div v-for="client in clients " :key="client.id" class="service-details__area service-details__space pt-200">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="service-details__title-box">
            <div  class="col-xl mb-10">
              <div class="tp-hero-2__exp-brand">
                <img :src="client.image_path" alt="">
              </div>
            </div>
            <h4 class="service-details__title" >


              {{ locale === 'ar' ? client.name_ar : client.name }}

            </h4>
          </div>
        </div>

      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="service-details__tab-wrapper text-center">
            <div class="service-details__tab-thumb">
              <!--  <img data-speed="0.4" src="/images/clients/civillink.png" alt=""> -->
              <img :src="client.cover_path" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'; // Import i18n functions

// Use i18n to get the current locale
const { locale } = useI18n();

  interface CLientDetails {
    id: number;
    name: string;
    name_ar : string;
    cover: string;
    image: string;
    url: string;
    created_at: string;
    updated_at: string;
    image_path: string; // Updated to match the exact field in the response
    cover_path: string;
  }


  const clients = ref < CLientDetails[] > ([]);


  const teamMember = async (): Promise < void > => {

    try {
      const response = await fetch(`https://api.idadco.com/api/v1/clients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      console.log("API response:", result); // Log entire response to inspect structure

      clients.value = Array.isArray(result) ? result : [result];
      console.log("Team data successfully assigned:", clients.value); // Confirm data assignment

    } catch (error) {
      console.error('Error fetching account details:', error);
    }
  };

  onMounted(() => {

    teamMember();

  });
</script>