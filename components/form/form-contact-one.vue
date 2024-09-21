<template>
  <form action="#" class="form-consulting">
    
    <h4 class="tp-footer-4__widget-title pb-40 pt-40 text-center">
      
      
      {{ $t("Consulting") }}   

    </h4>

    <div class="row">
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" placeholder="الاسم الثلاثي..">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field " type="text" placeholder="بريدك الالكتروني..">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" placeholder="رقم هاتفك..">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" placeholder="اسم المؤسسة او الشركة..">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 mb-50">
          <div class="tp-contact-2__select">
              <ui-nice-select
                  :options="[
                    { value: 'subject', text: 'خدمات الاستشارة والتطوير'},
                    { value: 'support', text: 'خدمات القنوات الفضائية'},
                    { value: 'security', text: 'خدمات الدعاية والاعلان'},
                    { value: 'protection', text: 'خدمات السوشيال ميديا'},
                    { value: 'protection', text: 'خدمات الصحافة'},
                  ]"
                  name="subject"
                  :default-current="0"
                  @onChange="changeHandler"
                  class-name="input-field"
                />
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="tp-contact-2__textarea">
              <textarea class="input-field"
                placeholder="كتابة الرسالة ..."></textarea>
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 p-0">
          <div class="tp-contact-2__btn text-center ">
              <div class="parallax-wrap d-inline-block">
                <div class="parallax-element">
                    <button class="tp-btn-pink-large">
                      <span data-hover="رسالة">
                          ارسال                      </span>
                    </button>
                </div>
              </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="tp-contact-2__btn text-right">
              <div class="parallax-wrap d-inline-block">
                <div class="parallax-element text-black ">
                  * الحقول التي تحتوي على علامة نجمة هي اختيارية
                </div>
              </div>
          </div>
        </div>
    </div>
  </form>
</template>

<script setup lang="ts">

const changeHandler = (e: { value: string; text: string }) => {
  console.log(e);
};
</script>