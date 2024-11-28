<template>
  <client-only>
    <div class="tp-project-3__area p-relative adad-bg pt-110 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-project-3__title-box pb-30 text-center portfolio-sec-pin">
              <h5 class="tp-section-title-1 tp_title_anim">{{ $t("Discover") }}</h5>
              <h3 class="tp-section-title-3 tp_title_anim header semo">{{ $t("Sevices") }}</h3>
              <img
                class="coma"
                src="/images/identity/coma.png"
                alt=""
                style="position: absolute;top:1.2rem;right:56%; width: 4%;opacity: 0.2;"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-portfolio-item-wrapper-3">
              <div
                v-for="service in filteredServices" 
                :key="service.id"
                class="tp-portfolio-item-3 portfolio-panel pb-5 tp-hover-reveal-text"
                ref="slideRefs"
                @mousemove="moveText($event, service.id)"
              >
                <nuxt-link :href="`/services-details/${service.id}`">
                  <img :src="service.imagePath" alt="" />
                  <span></span>
                  <div class="tp-portfolio-view-btn-3">
                    <span>{{ $t("Discover") }} <br /> {{ $t("More") }}</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

// Define service interface
interface ServiceDetails {
  id: number;
  image: string;
  cover: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
  imagePath: string;
  cover_path: string;
  lang: string; // Assuming 'lang' field exists in API response
}

const { portfolioPanel } = usePinPanel();
const { moveText, slideRefs } = useMoveText();

const service = ref<ServiceDetails[]>([]);

// i18n setup
const { locale } = useI18n();

// Function to fetch services data from API, considering locale
const serviceInfo = async (): Promise<void> => {
  try {
    const response = await fetch(`https://api.idadco.com/api/v1/services?lang=${locale.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    const result = await response.json();
    
    service.value = Array.isArray(result) ? result : [result];
  } catch (error) {
    console.error('Error fetching service details:', error);
  }
};

// Fetch services on mounted
onMounted(() => {
  serviceInfo();
  setTimeout(() => {
    portfolioPanel();
  }, 100);
});

// Watch for locale changes and refetch services based on locale
watch(() => locale.value, () => {
  serviceInfo();
});

// Computed property to filter services based on current locale
const filteredServices = computed(() => {
  return service.value.filter(service => service.lang === locale.value);
});

</script>