<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- Check if service is defined -->
     
        <template v-if="service">
        <HeroBannerServices :service="service" />
        <ServiceServicesDetailsServicesArea :service="service" />
        <marquee-two />
      </template>

    <template v-else>
        <div class="full-page-message">
          <p>Service not found. Redirecting...</p>
        </div>
      </template> 
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

useSeoMeta({ title: "Idad Services Page - Idad" });

definePageMeta({ layout: false });


// Service Interface
interface IService {
  id: number;
  image: string;
  cover: string;
  title: string;
  slug: string;
  lang: string;
  user_id: number;
  is_featured: number;
  created_at: string;
  updated_at: string;
  description: string | null;
  imagePath: string;
  coverPath: string;
  sub_services: any[];
}


const route = useRoute();
const router = useRouter();
const serviceRouteId  = ref(Number(route.params.id));
const service = ref<IService  | null>(null);

const fetchService = async () => {
  try {
    const response = await fetch(`https://api.idadco.com/api/v1/services/${serviceRouteId.value}`);
    if (!response.ok) {
      throw new Error("Failed to fetch service data");
    }
    console.log("Route ID:", serviceRouteId.value);
    const result: IService = await response.json();
    service.value = result;

  } catch (error) {
    console.error("Error fetching service details:", error);
    // Redirect to fallback URL if service not found
    setTimeout(() => {
      router.push("https://wa.me/+9647730321321");
    }, 400);
  }
};

/*   const loadService = () => {

  service.value = services_data.find(s => s.id === serviceId.value);


  if (!service.value) {
    setTimeout(() => {
      window.location.href = "https://wa.me/+9647730321321";
    }, 400);
  }
};


onMounted(() => {
  loadService();
});
 */

 onMounted(() => {
  fetchService();
});
</script>
<style scoped>
.full-page-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f0f0f0;
}

.full-page-message p {
  font-size: 1.5rem;
  color: #333;
}

</style>