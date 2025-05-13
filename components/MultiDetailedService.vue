<script setup>
import flower from "~/assets/images/flower-on-table.jpg";
const popularTreatments = [
  {
    title: "DR Schrammek personalized DERMAFACIAL",
    text: "Includes: welcome shoulder and neck massage, cleansing, toning, exfoliation, mask, scalp massage/hand massage for 60 mins",
    price: 6000,
  },
  {
    title: "DR Schrammek cleanse & go",
    text: "Includes: cleansing, toning, exfoliation/extractions/ black clearing mask/ hand exfoliation",
    price: 4000,
  },
  {
    title: "DR Schrammek personalized DERMAFACIAL",
    text: "Includes welcome shoulder and neck massage, cleansing, toning, exfoliation – hand exfoliation, mask – cooling massage, scalp massage; facial lifting massage for 90 mins",
    price: 9000,
  },
  {
    title: "Swedish massage",
    text: "50/80 min  2500/4000 rsd",
    price: "",
  },
  {
    title: "Drift Away Scalp & Neck",
    text: "30min 1500 rsd",
    price: "",
  },
];

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
<template>
  <div
    class="border-t border-black flex flex-col md:flex-row w-full bg-[#ECE9E1]"
  >
    <img
      :src="flower"
      class="basis-1/2 flex-shrink-0 object-cover max-h-[750px]"
    />
    <div
      class="py-10 md:py-20 px-4 md:px-32 basis-1/2 flex flex-col gap-10 flex-shrink-0"
    >
      <h3
        class="font-serifDisplay text-[24px] md:text-[46px] font-light max-w-[500px] uppercase tracking-[-1px] md:tracking-[-2px] text-center md:text-start"
      >
        Our bestsellers
      </h3>
      <div class="mb-6 max-w-[600px]">
        <div class="w-full max-w-xl space-y-4">
          <div
            v-for="(item, index) in popularTreatments"
            :key="index"
            class="border-b border-black text-sm md:text-base"
          >
            <button
              class="w-full text-left p-4 font-medium flex justify-between items-center"
              @click="toggleAccordion(index)"
            >
              <span>{{ item.title }}</span>
              <span>{{ openIndex === index ? "−" : "+" }}</span>
            </button>
            <div
              v-show="openIndex === index"
              class="p-4 border-t border-gray-200 text-xs md:text-sm text-gray-700"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/contact">
        <button
          class="border border-black rounded-[25px] py-2 px-6 max-w-fit uppercase text-[12px] font-helveticaDisplay"
        >
          book treatment
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
