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
                    <div v-for="(service, outerIndex) in filteredServices" :key="service.id"
                      class="col-lg-12 col-md-12">
                      <NuxtLink to="/contact-us#contact-form">
                      <div class="service-card">
                       
                          <div class="card" :style="{ direction: index % 2 === 0 ? 'rtl' : 'ltr' }"
                            v-for="(img, index) in service.img" :key="index">
                            <!-- Display the image -->
                            <img :src="img" alt="Service Image" class="service-image" />

                            <!-- Display the corresponding title -->
                            <h3 class="service-title">{{ $t(`services_data.${service.id}.title[${index}]`) }}
                            </h3>

                            <div alt="Service Image" class="d-md-block d-sm-none service-center"></div>
                          </div>
                      

                        <!-- Add other content if needed -->
                      </div>

                    </NuxtLink>
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
  import {
    useRoute
  } from 'vue-router';
  import type {
    IServiceDT
  } from "@/types/service-d-t";

  defineProps < {
    service: IServiceDT
  } > ();
  const route = useRoute();
  const specificId = Number(route.params.id);

  const filteredServices = services_data.filter(service => service.id === specificId);
</script>
