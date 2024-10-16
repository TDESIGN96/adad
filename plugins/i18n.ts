import { createI18n } from 'vue-i18n';
import en from '../locales/lang-en';
import ar from '../locales/lang-ar';
import { watch } from 'vue';

export default defineNuxtPlugin(({ vueApp }) => {
  // Check if we are on the client side to avoid `localStorage` errors
  const savedLocale = process.client ? localStorage.getItem('locale') || 'ar' : 'ar'; // Default to 'ar' if no saved locale

  // Initialize the i18n instance
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: savedLocale, // Use the saved locale
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
    if (process.client) {
      document.documentElement.classList.remove('lang-ar', 'lang-en');
      document.documentElement.classList.add(`lang-${locale}`);
    }
  };

  // Set the initial language class on the client
  if (process.client) {
    updateHtmlLangClass(i18n.global.locale.value as string);
  }

  // Watch for locale changes and update localStorage and HTML lang class
  watch(
    () => i18n.global.locale.value,
    (newLocale: string) => {
      if (process.client) {
        // Save the new language to localStorage
        localStorage.setItem('locale', newLocale);
        updateHtmlLangClass(newLocale);
        // Reload the page to reflect the language change
      
      }
    },
    { immediate: true }
  );
});