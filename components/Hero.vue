<script setup>
import heroImg from "~/assets/images/hero.jpg";

defineProps({
  bgImage: {
    type: String,
    required: true,
    default: heroImg,
  },
  title: {
    type: String,
    required: true,
    default: "Let us help you",
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
  cta: {
    type: String,
    required: false,
    default: "",
  },
  height: {
    type: String,
    required: false,
    default: "93vh",
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
    class="w-full bg-no-repeat bg-cover flex items-center justify-center bg-[#838776] brightness-80 contrast-[.80]"
    :style="`background-image: url(${bgImage}); height: ${height}; background-position: ${bgPosition};`"
  >
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
        class="text-white font-light text-xs md:text-xl uppercase tracking-[2px]"
      >
        {{ subtext }}
      </p>
      <NuxtLink to="/contact">
        <button
          v-if="cta"
          class="border-b p-2 max-w-[280px] uppercase text-white font-light font-helveticaDisplay text-[20px] m-auto mt-32"
        >
          {{ cta }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
