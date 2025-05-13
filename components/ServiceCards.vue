<script setup>
import backImage from "~/assets/images/back.jpg";
const cardItems = [
  {
    id: 0,
    img: backImage,
    title: "body treatments",
    text: "Experience our rejuvanating body treatments, tailored to detoxify, nourish, and restore balance for total body wellness",
    button: "see treatments",
  },
  {
    id: 1,
    img: backImage,
    title: "Facials",
    text: "Experience our rejuvanating body treatments, tailored to detoxify, nourish, and restore balance for total body wellness",
    button: "see treatments",
  },
  {
    id: 2,
    img: backImage,
    title: "Massage",
    text: "Experience our rejuvanating body treatments, tailored to detoxify, nourish, and restore balance for total body wellness",
    button: "see treatments",
  },
];
</script>
<template>
  <div class="bg-[#ECE9E1] py-10 md:py-20">
    <div class="container text-center">
      <h4 class="font-helveticaDisplay mb-6 text-sm md:text-base">
        Welcome to bioglow
      </h4>
      <h2
        class="text-center font-serifDisplay text-[24px] md:text-[46px] font-extralight tracking-[-1px] md:tracking-[-3px] mb-6"
      >
        We've got your glow
      </h2>
      <p class="mb-24 max-w-[600px] m-auto text-xs md:text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam
        asperiores cum numquam, consequuntur iure at odit cumque rem, tempora
        sint aut veniam. Nostrum dolorem nobis corporis eveniet impedit
        repudiandae!
      </p>
    </div>
    <div class="container flex flex-col md:flex-row gap-6">
      <div v-for="card in cardItems" :key="card.id" class="border border-black">
        <ServiceCard :card="card" />
      </div>
    </div>
  </div>
</template>
