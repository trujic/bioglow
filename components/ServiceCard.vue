<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
<template>
  <div class="p-8 text-center flex flex-col gap-6">
    <div class="relative max-h-[300px]">
      <img
        :src="card.img"
        class="w-full h-full object-cover max-h-[300px] contrast-[.75]"
        loading="lazy"
      />
    </div>
    <h3
      class="font-helveticaDisplay text-[18px] leading-[32px] font-light uppercase tracking-[1px]"
    >
      {{ card.title }}
    </h3>
    <p
      class="font-helveticaDisplay text-[14px] font-extralight md:font-extralight"
    >
      {{ card.text }}
    </p>
    <button
      v-if="card.button"
      class="border border-black rounded-[25px] py-2 px-6 max-w-fit m-auto uppercase text-[12px] font-helveticaDisplay"
    >
      {{ card.button }}
    </button>
  </div>
</template>
