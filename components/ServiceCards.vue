<script setup>
import screeningImg from "~/assets/images/scincare-screening.webp";
import facialsImg from "~/assets/images/facials.webp";
import massageImg from "~/assets/images/treatments-massages.webp";
import painImg from "~/assets/images/pain-management.webp";
import shell from "~/assets/images/shell.webp";
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
        Bioglow
      </h2>
      <p
        class="mb-12 md:mb-10 max-w-[600px] m-auto text-[14px] font-helveticaDisplay font-light mt-10 md:text-[16px] md:leading-[18px]"
      >
        Woman - Only Slow Beauty Studio in the Heart of Niš
      </p>
      <p
        class="mb-12 md:mb-24 max-w-[750px] m-auto text-[14px] font-helveticaDisplay font-light md:text-[16px] leading-[18px] md:leading-[20px]"
      >
        At <i>Bioglow</i>, beauty is not rushed. It is cultivated. Every ritual
        is designed as a one-on-one experience — without noise, without
        pressure. We combine international spa expertise, professional systems,
        and a deeply personal approach to create care that is structured,
        intentional, and restorative. <br /><br />This <i>is not</i> a fast
        salon. This is <i>your pause</i>.
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
      :src="shell"
      alt="infinity"
      class="w-full max-w-[100px] md:max-w-[150px] absolute bottom-[-50px] md:bottom-[-80px] left-1/2 z-10 transform -translate-x-1/2"
    />
  </div>
</template>
