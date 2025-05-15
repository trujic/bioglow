<script setup>
defineProps({
  bgImage: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  titleMark: {
    type: String,
    required: false,
    default: "",
  },
  subtext: {
    type: String,
    required: false,
    default: "",
  },
  bgPosition: {
    type: String,
    required: false,
    default: "50% 0%",
  },
});
</script>
<template>
  <div
    class="relative w-full bg-no-repeat bg-cover flex items-center justify-center bg-[#838776] brightness-80 contrast-[.80] border-b border-black h-[400px] md:h-[600px]"
    :style="`background-image: url(${bgImage}); background-position: ${bgPosition};`"
  >
    <div
      class="absolute inset-0 bg-[#ECE9E1] opacity-25 pointer-events-none"
    ></div>
    <div class="flex flex-col text-center">
      <h1
        v-if="title"
        class="text-[46px] md:text-[84px] text-white text-center font-light pb-[12px] md:pb-[24px] font-serifDisplay leading-[60px] md:leading-[100px] tracking-[-5px] md:tracking-[-8px]"
      >
        {{ title }}
        <span
          v-if="titleMark"
          class="italic font-light font-serifDisplay tracking-[-5px] md:tracking-[-8px]"
          >{{ titleMark }}</span
        >
      </h1>
      <p
        v-if="subtext"
        class="text-black font-light text-[10px] md:text-xl uppercase tracking-[2px]"
      >
        {{ subtext }}
      </p>
    </div>
  </div>
</template>
