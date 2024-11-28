import axios from 'axios';
import { useState } from '#app';

export default defineNuxtPlugin(() => {
  
  const instance = axios.create({
    baseURL: 'https://api.idadco.com/api/v1' // Your API base URL
  });

  const isLoading = useState<boolean>('isLoading', () => false);

  // Request Interceptor
  instance.interceptors.request.use((config) => {
    isLoading.value = true; // Show preloader before request
    return config;
  });

  // Response Interceptor
  instance.interceptors.response.use(
    (response) => {
      isLoading.value = false; // Hide preloader on successful response
      return response;
    },
    (error) => {
      isLoading.value = false; // Hide preloader on error
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: instance
    }
  };
});
