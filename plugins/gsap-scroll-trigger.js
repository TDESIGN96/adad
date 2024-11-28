import gsap from 'gsap';

import ScrollTrigger from "~/assets/plugins/gsap-scroll-trigger";
gsap.registerPlugin(ScrollTrigger);
export default defineNuxtPlugin(() => {
  return {
    provide: {
      ScrollTrigger:ScrollTrigger 
    }
  }
})
