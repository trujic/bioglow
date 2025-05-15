<script setup>
import backImage from "~/assets/images/back.jpg";
import screeningImg from "~/assets/images/hero.jpg";
import facialsImg from "~/assets/images/facials.jpg";
import massageImg from "~/assets/images/body-treatments.jpg";
import painImg from "~/assets/images/pain.jpg";
import bow from "~/assets/images/bow.png";
const cardItems = [
  {
    id: 0,
    img: facialsImg,
    title: "Facials",
    text: `Experience transformative facials at BioGlow. Our expert care and premium products unveil your skin’s natural glow. Shine with confidence`,
  },
  {
    id: 1,
    img: screeningImg,
    title: "SKINCARE SCREENING",
    text: `Prioritize your skin’s health with our comprehensive skin screening. Early detection means confident, radiant skin.`,
  },
  {
    id: 2,
    img: massageImg,
    title: "TREATMENTS & MASSAGES",
    text: `Revitalize your body with our soothing massages and transformative body treatments. Relax, rejuvenate, and rediscover your best self.`,
  },
  {
    id: 3,
    img: painImg,
    title: "PAIN MANAGEMENT",
    text: `Relieve discomfort and restore mobility with our targeted pain management treatments. Experience expert care designed to soothe, heal, and revitalize.`,
  },
];
</script>
<template>
  <div class="relative bg-[#ECE9E1] pt-16 pb-20 md:py-24">
    <div class="container text-center">
      <h2
        class="text-center font-sloop text-[40px] md:text-[45px] font-light tracking-[-1px] md:tracking-[1px]"
      >
        We've got your glow
      </h2>
      <h3
        class="text-center font-helveticaDisplay text-[15px] font-extralight tracking-[-1px] md:tracking-[2px] mb-6 uppercase"
      >
        ( explore our services )
      </h3>
      <p
        class="mb-12 md:mb-24 max-w-[600px] m-auto text-xs font-helveticaDisplay font-extralight mt-10 md:text-[16px] leading-[18px]"
      >
        Elevate your health and beauty at Bioglow. Our services, from relaxing
        massages to luxurious facials, are designed to offer you moments of
        tranquility and a radiant glow. Experience exceptional care and restore
        your energy.
      </p>
    </div>
    <div class="container flex flex-col md:flex-row gap-6">
      <div
        v-for="card in cardItems"
        :key="card.id"
        class="border border-black flex-1 min-w-0"
      >
        <ServiceCard :card="card" />
      </div>
    </div>
    <img
      :src="bow"
      alt="infinity"
      class="w-full max-w-[180px] md:max-w-[450px] absolute bottom-[-80px] md:bottom-[-180px] left-1/2 z-10 transform -translate-x-1/2"
    />
  </div>
</template>
