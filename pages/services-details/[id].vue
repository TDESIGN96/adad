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
        <p>Service not found. Redirecting...</p>
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import services_data from "@/data/services-data";
import type { IServiceDT } from "@/types/service-d-t";
useSeoMeta({ title: "Idad Services Page - Idad" });
definePageMeta({ layout: false });

const route = useRoute();
const router = useRouter();
const serviceId = ref(Number(route.params.id)); // Ensure serviceId is a number
const service = ref<IServiceDT | undefined>();


  const loadService = () => {
  // Find the service based on ID
  service.value = services_data.find(s => s.id === serviceId.value);

  // Redirect if the service is not found
  if (!service.value) {
    setTimeout(() => {
      router.push("/Services"); // Redirect after a short delay
    }, 2000); // Optionally delay for user experience
  }
};


onMounted(() => {
  loadService();
});


</script>
