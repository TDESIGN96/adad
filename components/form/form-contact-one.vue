<template>


  <form action="#" class="form-consulting" @submit.prevent="submitForm">
    <h4 class="tp-footer-4__widget-title pb-40 pt-40 text-center">
      {{ $t("Consulting") }}
    </h4>
    <div class="text-center col-12 m-10" v-if="successMessage">
      {{FormMsg}}
    </div>
    <div v-else class="row">
      <div class="col-xl-6 col-lg-4 mb-50">
        <div class="tp-contact-2__input">
          <input class="input-field" type="text" v-model="name" :placeholder="$t('form.placeholders.name')" />
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="col-xl-6 col-lg-4 mb-50">
        <div class="tp-contact-2__input">
          <input class="input-field" type="email" v-model="email" :placeholder="$t('form.placeholders.email')" />
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="col-xl-6 col-lg-4 mb-50">
        <div class="tp-contact-2__input">
          <input class="input-field" type="text" v-model="phone_number" :placeholder="$t('form.placeholders.phone')" />
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="col-xl-6 col-lg-4 mb-50">
        <div class="tp-contact-2__input">
          <input class="input-field" type="text" v-model="company_name"
            :placeholder="$t('form.placeholders.company')" />
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12 mb-50">
        <div class="tp-contact-2__select">
          <ui-nice-select :options="translatedOptions" :key="languageKey" name="subject" :default-current="0"
            @onChange="changeHandler" v-model="service_id" class-name="input-field" />
          <span v-if="serviceError" class="error-message">{{ serviceError }}</span>
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="tp-contact-2__textarea">
          <textarea class="input-field" v-model="message" :placeholder="$t('form.placeholders.message')"></textarea>
          <span class="focus-border"></span>
          <span v-if="messageError" class="error-message">{{ messageError }}</span>
        </div>
      </div>
      <div class="col-xl-6 p-0">
        <div class="tp-contact-2__btn text-center">
          <div class="parallax-wrap d-inline-block">
            <div class="parallax-element">

              <button class="tp-btn-pink-large" type="submit" :disabled="isLoading">
                <span :data-hover="isLoading ? 'Submitting' : $t('form.send')">
                  {{ isLoading ? 'Submitting...' : $t('form.send') }}
                </span>
              </button>


            </div>
            <span>{{FormMsg}}</span>

          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="tp-contact-2__btn">
          <div class="parallax-wrap d-inline-block">
            <div class="parallax-element text-black">
              * {{ $t('form.optionalFieldsNote') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
  import {
    ref,
    computed,
    watchEffect
  } from "vue";
  import {
    useI18n
  } from "vue-i18n";

  // Define types
  interface Option {
    value: string;
    text: string;
  }

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


  // Form state
  const name = ref("");
  const email = ref("");
  const phone_number = ref("");
  const company_name = ref("");
  const message = ref("");

  const emailError = ref("");
  const serviceError = ref("");
  const successMessage = ref < string | null > (null);
  const FormMsg = ref("");
  const isLoading = ref(false);
  const messageError = ref('');
  const service = ref < ServiceDetails[] > ([]);
  const service_id = ref<number | null>(null);
  
  // UI i18n integration
  const {
    t,
    locale
  } = useI18n();
  const languageKey = ref(locale.value);
  watch(
  () => locale.value,
  () => {
    languageKey.value = locale.value; // Trigger reactivity
  }
);


  // Handlers
  const changeHandler = (selectedOption: { value: number; text: string }) => {
  service_id.value = selectedOption.value;
  console.log("Selected service ID:", service_id.value);
};


  const submitForm = async () => {
    messageError.value = '';
    isLoading.value = true;
    successMessage.value = null;


    try {
      const response = await fetch("https://api.idadco.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone_number: phone_number.value,
          company_name: company_name.value,
          service_id: Number(service_id.value),
          message: message.value,
        }),
      });


      console.log(service_id.value);
      if (response.ok) {

        successMessage.value = 'True';

        FormMsg.value = "Form submitted successfully!";
      } else {
        const result = await response.json();

        // Check for specific field errors and set error messages
        if (result.errors ?.message) {
          messageError.value = result.errors.message[0];
        }
        if (result.errors ?.service_id) {
          serviceError.value = result.errors.service_id[0];
        }
        if (result.errors ?.email) {
          emailError.value = result.errors.email[0];
        }

        console.error('Form submission failed:', result);
      }
    } catch (errors) {

      FormMsg.value = "Error submitting form", errors;
    } finally {

      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    }
  };
  const serviceInfo = async (): Promise < void > => {
    try {
      const response = await fetch(`https://api.idadco.com/api/v1/services?lang=${locale.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      console.log("API response:", result); // Log entire response to inspect structure
      const currentLang = locale.value;
      service.value = Array.isArray(result) ? result : [result];
      console.log("Services data successfully assigned:", service.value); // Confirm data assignment

      // Extract only the IDs and titles
      service.value = result
      .filter((item: any) => item.lang === currentLang) // Filter by language
      .map((item: any) => ({
        id: item.id,
        title: item.title,
      }));
      console.log("Extracted service info (id and title):", serviceInfo);
    } catch (error) {
      console.error('Error fetching service details:', error);
    }
  };

  
 // Create options for the select component
 const translatedOptions = computed(() => {
  // Include a placeholder at the top
  return [
    { value: '', text: t('form.options.select_service') },
    ...service.value.map((serviceItem) => ({
      value: serviceItem.id, // Use ID as the value
      text: serviceItem.title, // Use title as the display text
    })),
  ];
});
  onMounted(() => {
    serviceInfo();
    
  });

  watch([name, email, phone_number, company_name, service_id, message], () => {
  emailError.value = '';
  serviceError.value = '';
  messageError.value = '';
});
watch(locale, () => {
  serviceInfo(); // Re-fetch services when the language changes
  translatedOptions.value;
});
  watchEffect(() => {

    translatedOptions.value;
  });
</script>

<style scoped>
  .error-message {
    color: red;
    font-size: 0.9em;
  }
</style>
