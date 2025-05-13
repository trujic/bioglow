<template>
  <button
    :type="type"
    @click="scrollToTarget"
    class="px-6 py-2 rounded-[25px] font-medium transition-all duration-200 border border-white text-white hover:bg-[#838776] font-helveticaNow font-light text-xl"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    required: true, // e.g., "#about" or "#contact"
  },
});

const scrollToTarget = () => {
  const el = document.querySelector(props.to);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
