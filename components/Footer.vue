<script setup>
import logo from "~/assets/images/logo-with-border.png";
</script>
<template>
  <div class="relative py-10 md:py-20 bg-[#ECE9E1]">
    <h4
      class="mt-10 md:mt-0 text-center font-helveticaDisplay text-base md:text-xl uppercase font-light"
    >
      Let's connect
    </h4>
    <img
      :src="logo"
      alt="logo"
      class="w-28 absolute top-[-55px] left-1/2 transform -translate-x-1/2"
    />
    <div class="mt-10 md:mt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center container">
        <div class="flex flex-col items-center gap-5">
          <span
            class="font-serifDisplay font-extralight text-3xl md:text-6xl tracking-[-3px]"
            >Instagram</span
          >
          <a
            href="https://instagram.com"
            target="_blank"
            class="uppercase text-[10px] md:text-base font-light font-helveticaDisplay border-b border-black"
            >follow along</a
          >
        </div>
        <div class="flex flex-col items-center gap-5">
          <span
            class="font-serifDisplay font-extralight text-3xl md:text-6xl tracking-[-3px]"
            >Phone</span
          >
          <a
            href="tel:+381692111524"
            class="uppercase text-[10px] md:text-base font-light font-helveticaDisplay border-b border-black"
            >call us</a
          >
        </div>
        <div class="flex flex-col items-center gap-5">
          <span
            class="font-serifDisplay font-extralight text-3xl md:text-6xl tracking-[-3px]"
            >Email</span
          >
          <a
            href="mailto:info.bioglow@gmail.com"
            class="uppercase text-[10px] md:text-base font-light font-helveticaDisplay border-b border-black"
            >get in touch</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
