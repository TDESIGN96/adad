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
import services_data from "@/data/services-data";
import type { IServiceDT } from "@/types/service-d-t";
useSeoMeta({ title: "Idad Services Page - Idad" });
definePageMeta({ layout: false });

const route = useRoute();
const router = useRouter();
const serviceId = ref(Number(route.params.id)); // Ensure serviceId is a number
const service = ref<IServiceDT | undefined>();


  const loadService = () => {

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