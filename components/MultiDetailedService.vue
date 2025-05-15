<script setup>
const popularTreatments = [
  {
    title: "DR Schrammek personalized DERMAFACIAL",
    subtitle: "60 min ( 6000RSD )",
    text: "Includes: welcome shoulder and neck massage, cleansing, toning, exfoliation, mask, scalp massage/hand massage for 60 min",
  },
  {
    title: "DR Schrammek personalized DERMAFACIAL",
    subtitle: "90 min ( 9000RSD )",
    text: "Includes: welcome shoulder and neck massage, cleansing, toning, exfoliation – hand exfoliation, mask – cooling massage, scalp massage, facial lifting massage for 90 min",
  },
  {
    title: "DR Schrammek cleanse & go",
    subtitle: "40 min ( 4000 RSD )",
    text: "Includes: cleansing, toning, exfoliation, extractions, black clearing mask, hand exfoliation",
  },
  {
    title: "SKINCARE SCREENING ( coming soon )",
  },
  {
    title: "BODY TREATMENTS & MASSAGES ( coming soon )",
  },
  { title: "PAIN MANAGEMENT ( coming soon )" },
];

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
<template>
  <div class="border-t border-black bg-[#ECE9E1] w-full">
    <div class="container flex justify-center px-4 md:px-0">
      <div class="py-14 md:py-28 max-w-2xl w-full text-center">
        <h3
          class="font-serifDisplay text-[24px] md:text-[42px] font-extralight uppercase tracking-[-1px] leading-[34px]"
        >
          Our Treatments
        </h3>

        <!-- Accordion -->
        <div class="w-full space-y-4 my-10 px-4 md:px-0 md:my-20">
          <div
            v-for="(item, index) in popularTreatments"
            :key="index"
            class="border-b border-black text-sm md:text-base"
          >
            <button
              class="w-full text-left p-4 font-light font-helveticaDisplay uppercase flex justify-between items-start md:items-center"
              @click="toggleAccordion(index)"
            >
              <div class="flex flex-col md:flex-row text-[12px] md:text-base">
                <span>{{ item.title }}</span>
                <span v-if="item.subtitle"> {{ item.subtitle }}</span>
              </div>
              <span v-if="item.text">{{
                openIndex === index ? "−" : "+"
              }}</span>
            </button>
            <div
              v-if="item.text"
              v-show="openIndex === index"
              class="p-4 pt-0 text-xs md:text-sm text-start text-black font-light"
            >
              {{ item.text }}
            </div>
          </div>
        </div>

        <NuxtLink to="/contact">
          <button
            class="border border-black py-2 px-6 uppercase text-[14px] font-helveticaDisplay"
          >
            book an appointment
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
