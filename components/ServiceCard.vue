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
    <img :src="card.img" class="max-h-[300px] object-cover" />
    <h3
      class="font-serifDisplay text-[24px] md:text-[32px] font-light uppercase tracking-[-2px]"
    >
      {{ card.title }}
    </h3>
    <p class="font-helveticaDisplay text-xs md:text-base">{{ card.text }}</p>
    <button
      class="border border-black rounded-[25px] py-2 px-6 max-w-fit m-auto uppercase text-[12px] font-helveticaDisplay"
    >
      {{ card.button }}
    </button>
  </div>
</template>
