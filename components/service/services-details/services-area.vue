<template>
  <div class="blog-list__area blog-list__ptb fix">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="blog-list__tab-wrap">
            <div>
              <div class="blog-list__slider-main">
                <div class="blog-list__wrapper">
                  <div class="row gx-50">
                 
                    <div v-for="subService in service.sub_services" :key="subService.id" class="col-lg-12 col-md-12">
                      <a href="https://wa.me/+9647730321321" target="_blank" class="subservice-link">
                        <div class="service-card" v-if="shouldDisplayMember(subService)">
                          <div class="card" :style="{ direction: subService.id % 2 === 0 ? 'rtl' : 'ltr' }">
                            <span >
                              <img :src="subService.image_path" alt="Service Image" class="service-image" />
                            </span>
                            <h3 class="service-title">
                              {{ shouldDisplayMember(subService) ? subService.title : '' }}
                            </h3>
                            <div alt="Service Image" class="d-md-block d-sm-none service-center"></div>
                          </div>
                        </div>
                      </a>
                    </div>


                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';



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



// Define Props
const props = defineProps<{
  service: IService;
}>();


const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const shouldDisplayMember = (subService: IService): boolean => {
  return subService.lang === currentLocale.value;
};



</script>
