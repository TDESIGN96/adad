<template>
  <form action="#" class="form-consulting">
    
    <h4 class="tp-footer-4__widget-title pb-40 pt-40 text-center">
      
      
      {{ $t("Consulting") }}   

    </h4>

    <div class="row">
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" :placeholder="$t('form.placeholders.name')">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field " type="text" :placeholder="$t('form.placeholders.email')">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" :placeholder="$t('form.placeholders.phone')">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" :placeholder="$t('form.placeholders.company')">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 mb-50">
          <div class="tp-contact-2__select">
              <ui-nice-select
                  :options=translatedOptions
                  :key="languageKey"
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
                :placeholder="$t('form.placeholders.message')"></textarea>
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-6 p-0">
          <div class="tp-contact-2__btn text-center ">
              <div class="parallax-wrap d-inline-block">
                <div class="parallax-element">
                    <button class="tp-btn-pink-large">
                      <span data-hover="{{ $t('form.submit') }}">
                        {{ $t('form.send') }}                   </span>
                    </button>
                </div>
              </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="tp-contact-2__btn">
              <div class="parallax-wrap d-inline-block">
                <div class="parallax-element text-black ">
                  * {{ $t('form.optionalFieldsNote') }}
                                </div>
              </div>
          </div>
        </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {  watchEffect, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const changeHandler = (e: { value: string; text: string }) => {
  console.log(e);
};

// Define the component without using 'export default'


// Define the type for the options
interface Option {
  value: string;
  text: string;
}

// Get the t function from vue-i18n
const { t, locale } = useI18n();
const languageKey = ref(Date.now());

languageKey.value = Date.now();  // Trigger a change in the key

// Computed property for the options
const translatedOptions = computed<Option[]>(() => [
  { value: '', text: t('form.options.select_service') },
  { value: 'advertising', text: t('Advertising') },
  { value: 'tv', text: t('TV') },
  { value: 'consultation', text: t('Consultation') },
  { value: 'sm', text: t('SM') },
  { value: 'technical', text: t('technical') },
  { value: 'data_analysis', text: t('data_analysis') },
]);



watchEffect(() => {
  // This will ensure that when the language changes, the options are updated
  translatedOptions.value;
});


</script>