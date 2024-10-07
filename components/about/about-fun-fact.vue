<template>
  <div class="ab-funfact__area ab-funfact__plr pt-200 pb-150 z-index-1 p-relative fix cursor-style">
      <div class="ab-funfact__bg ab-funfact__overlay">
        <div class="ab-funfact__bg-item" data-speed="1.1" style="background-image: url(/images/funfact/funfact-bg-1-2.jpg); box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3)"></div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-40">
              <div class="ab-funfact__item space-left-1 wow tpfadeUp" data-wow-duration=".9s" >
                 
                  <div class="ab-funfact__content">
                    <h4 class="ab-funfact__title-sm"> قم بحجز استشارة مجانية </h4>
                    <div class="ab-hero__btn-box pt-40" style="text-align: center;">
                      <a class="tp-btn-border-sm" href="/contact-us#contact-form" style="background-color: #018EAA;">
                        احجز الان!</a></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const counter_data = [
  {
    id: 1,
    delay: '.3s',
    counter: 56,
    title: "Projects <br /> Completed",
  },
  {
    id: 2,
    delay: '.5s',
    counter: 12,
    title: "Years <br /> Of Experience",
  },
  {
    id: 3,
    delay: '.7s',
    counter: 34,
    title: "Client <br /> Satisfaction",
  }
]
</script>