import { useState } from '#app';

export async function fetchWrapper<T>(url: string, options?: RequestInit): Promise<T> {
  const isLoading = useState<boolean>('isLoading', () => false);
  isLoading.value = true; // Show preloader before request

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return response data
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  } finally {
    isLoading.value = false; // Hide preloader after request
  }
}
