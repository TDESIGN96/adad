import { createI18n } from 'vue-i18n';
import en from '../locales/lang-en';
import ar from '../locales/lang-ar';
import { watch } from 'vue';

export default defineNuxtPlugin(({ vueApp }) => {
  // Initialize the i18n instance
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ar', // Default to Arabic
    fallbackLocale: 'en',
    messages: {
      ar,
      en,
    },
  });

  // Use i18n in the Vue app
  vueApp.use(i18n);

  // Type-safe function to update the HTML lang class
  const updateHtmlLangClass = (locale: string) => {
    // Ensure this only runs on the client side
    if (process.client) {
      document.documentElement.classList.remove('lang-ar', 'lang-en');
      document.documentElement.classList.add(`lang-${locale}`);
    }
  };

  // Set the initial language class on the client
  if (process.client) {
    updateHtmlLangClass(i18n.global.locale.value as string);
  }

  // Watch for locale changes using Vue's Composition API watch function
  watch(
    () => i18n.global.locale.value,
    (newLocale: string) => {
      if (process.client) {
        updateHtmlLangClass(newLocale);
      }
    },
    { immediate: true }
  );
});
