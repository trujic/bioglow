<template>
  <div
    ref="target"
    :class="[
      'transition-all duration-1000 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const target = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.2 } // trigger when 10% visible
  );

  if (target.value) observer.observe(target.value);
  onUnmounted(() => observer.disconnect());
});
</script>
