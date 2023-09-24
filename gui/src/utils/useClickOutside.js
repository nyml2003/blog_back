import { ref, onMounted, onUnmounted } from 'vue';

export default function useClickOutside(elementRef) {
  const isClickOutside = ref(false);

  const checkClickOutside = (event) => {
    console.log(elementRef.value);
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      isClickOutside.value = true;
    }
  };

  onMounted(() => {
    document.addEventListener('click', checkClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', checkClickOutside);
  });

  return { isClickOutside };
}
