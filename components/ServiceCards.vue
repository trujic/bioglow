<script setup>
import screeningImg from "~/assets/images/scincare-screening.webp";
import facialsImg from "~/assets/images/facials.webp";
import massageImg from "~/assets/images/treatments-massages.webp";
import painImg from "~/assets/images/pain-management.webp";
import shell from "~/assets/images/shell.webp";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cardItems = computed(() => [
  {
    id: 0,
    img: facialsImg,
    title: t("cards.facials.title"),
    text: t("cards.facials.text"),
  },
  {
    id: 1,
    img: screeningImg,
    title: t("cards.screening.title"),
    text: t("cards.screening.text"),
  },
  {
    id: 2,
    img: massageImg,
    title: t("cards.massages.title"),
    text: t("cards.massages.text"),
  },
  {
    id: 3,
    img: painImg,
    title: t("cards.pain.title"),
    text: t("cards.pain.text"),
  },
]);
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
        {{ $t("Woman - Only Slow Beauty Studio in the Heart of Niš") }}
      </p>
      <p
        class="mb-12 md:mb-24 max-w-[750px] m-auto text-[14px] font-helveticaDisplay font-light md:text-[16px] leading-[18px] md:leading-[20px]"
      >
        {{
          $t(
            "At Bioglow, beauty is not rushed. It is cultivated. Every ritual is designed as a one-on-one experience — without noise, without pressure. We combine international spa expertise, professional systems, and a deeply personal approach to create care that is structured, intentional, and restorative."
          )
        }}<br /><br />{{ $t("This") }} <i>{{ $t("is not") }}</i>
        {{ $t("a fast salon") }}. {{ $t("This is") }}
        <i>{{ $t("your pause") }}</i
        >.
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
