<template>
  <div id="contact-form" class="ab-funfact__area ab-funfact__plr pt-200  z-index-1 p-relative fix cursor-style">
      <div class="ab-funfact__bg ab-funfact__overlay">
        <div class="ab-funfact__bg-item" data-speed="1.1" style="background-image: url(/images/funfact/funfact-bg-1-2.jpg); box-shadow: inset 0 0 0 2000px rgba(16, 70, 78, 70%)"></div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-40 m-auto">
              <div class="ab-funfact__item space-left-1 wow tpfadeUp" data-wow-duration=".9s" >
                 
                  <div class="ab-funfact__content">
                    
                    <h4 class="ab-funfact__title-sm"> قم بحجز استشارة مجانية </h4>
                    <div class="tp-port-2-text col-12 text-center m-auto pt-20">
                        <p class="pb-70">
                          مهمتنا هي اعداد نص رصين مبتكر ومؤثر ويتفاعل مع الجماهير ويرفع معايير الإنتاج ويسهم في نجاح عملائنا
                        </p>
                        
                    </div>
                    

              </div>
 
            
             

              <form-contact-one />


              
              </div>
              
            </div>
            
        </div>
        
      </div>
      <div class="tp-text-slider-4-area pattern-b-form">
      <div class="tp-text-slider-4-wrap bg-transparent">
        <div class="tp-text-slider-4-active">
          <div class="container-fluid">
            <div class="scroll-container">
              <div class="carousel-primary" ref="carousel">
                <img src="/images/identity/pattern.png" alt="carousel" />
                <img src="/images/identity/pattern.png" alt="carousel" />
                <img src="/images/identity/pattern.png" alt="carousel" />
              </div>
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