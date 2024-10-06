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
                    <div 
                      v-for="service in filteredServices" 
                      :key="service.id" 
                      class="col-lg-4 col-md-6"
             
                    >
                      <div class="service-card">
                        <div 
                          v-for="(img, index) in service.img" 
                          :key="index"
                        >
                          <!-- Display the image -->
                          <img :src="img" alt="Service Image" />

                          <!-- Display the corresponding title -->
                          <h3 v-if="service.title[index]">{{ service.title[index] }}</h3>
                        </div>
                    
                
                        <!-- Add other content if needed -->
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
  </div>
</template>

<script setup lang="ts">

import services_data from "@/data/services-data";
import { useRoute } from 'vue-router';
import type { IServiceDT } from "@/types/service-d-t";
defineProps<{ service: IServiceDT }>();
const route = useRoute();
const specificId = Number(route.params.id);

const filteredServices = services_data.filter(service => service.id === specificId);
</script>
