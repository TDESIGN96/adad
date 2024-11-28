<template>
  <div class="section">
    <div class="tp-hero-2__bg adad-bg tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
        <div class="tp-hero-2__boder-circle">
          <span></span>
        </div>
        <div class="container">
          <div class="tp-hero-2__exp-thumb-main p-relative">
              
              
          </div>
          <div class="tp-hero-2__exp-brand-wrap">
            <div
            class="tp-project-3__title-box  text-center portfolio-sec-pin">            
            <h5 class="tp-section-title-1 tp_title_anim"> {{ $t("Discover") }}</h5>
            <h3 class="tp-section-title-3 tp_title_anim header semo pb-50"> {{ $t("Clients") }}</h3>
            
            <img
              class="coma"
              src="/images/identity/coma.png"
              alt="" style="position: absolute;top:1.2rem;right:56%; width: 4%;opacity: 0.2;"
            />
          </div>
              <div class="row row-cols-lg-4 row-cols-md-2 ">
                <div v-for="brand in brands" :key="brand.id" class="col-xl mb-10">
                
                    <div class="tp-hero-2__exp-brand">
                      <NuxtLink :to="`/clients`">
                      <img :src="brand.image_path" alt="">
                    </NuxtLink>
                    </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface BrandDetails {
  id: number;
  name: string;
  cover: string;
  image: string;
  url: string;
  created_at: string;
  updated_at: string;
  image_path: string; // Updated to match the exact field in the response
  cover_path: string;
  }


const brands = ref <BrandDetails[]>([]);



const brandInfo = async(): Promise<void> => {
   const { $axios} = useNuxtApp();
   try {
     const response = await $axios.get(`/clients`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       },
     });

     const result = await response.data;
     
     brands.value = Array.isArray(result) ? result : [result];
   
   } catch (error) {
     console.error('Error fetching account details:', error);
   }
 };

 onMounted(() => {

  brandInfo();

});

</script>