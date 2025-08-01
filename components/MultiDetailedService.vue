<script setup>
import { ref } from "vue";
import AccordionList from "./AccordionList.vue";

const treatmentGroups = [
  {
    title: "Our Signature Facials",
    items: [
      {
        title: "BIOGLOW Dermafacial —\u00A0",
        subtitle: "60 min / 6000 RSD",
        text: "A deeply relaxing, science-based facial customized to your skin’s unique needs. Includes: welcome massage (shoulders & neck), cleansing, toning, enzymatic exfoliation, mask, scalp & hand massage.",
      },
      {
        title: "BIOGLOW Dermafacial Plus —\u00A0",
        subtitle: "90 min / 9000 RSD",
        text: "A full ritual of renewal for skin and senses. Includes: welcome massage (shoulders & neck), cleansing, toning, full exfoliation (face & hands), mask, warm & cold facial massage, scalp massage, and face-lifting techniques.",
      },
      {
        title: "BIOGLOW Cleanse & Go —\u00A0",
        subtitle: "40 min / 4000 RSD",
        text: "A quick but thorough refresh. Ideal between treatments or before an event. Includes: cleansing, toning, exfoliation or gentle extractions, purifying mask, and hand exfoliation.",
      },
    ],
  },
  {
    title: "Bioglow Body Rituals - Ladies only",
    items: [
      {
        title: "Swedish Massage",
        subtitle: "50 min – 2,500 RSD / 80 min – 4,000 RSD",
        text: "Classic full-body massage that improves circulation, eases tension, and restores balance.",
      },
      {
        title: "Leg Massage with Sculpting & Drainage",
        subtitle: "30 min – 1,500 RSD / 50 min – 2,500 RSD",
        text: "Combines vacuum cups and Gua Sha for light legs, reduced swelling, and lymphatic flow.",
      },
      {
        title: "Neck & Scalp Massage",
        subtitle: "30 min – 1,500 RSD",
        text: "Relieves mental tension and soothes the nervous system.",
      },
      {
        title: "Foot Reflexology & Lower Leg Relief",
        subtitle: "50 min – 2,500 RSD",
        text: "Focused massage for heavy legs and fluid retention, with reflex point stimulation.",
      },
      {
        title: "BIOGLOW Ritual of Renewal",
        subtitle: "150 min – 8,500 RSD",
        text: "Signature experience: full-body massage, reflexology, scalp care, and lifting facial touch.",
      },
    ],
  },
  {
    title: "SKINCARE SCREENING ( coming soon )",
  },
  {
    title: "PAIN MANAGEMENT ( coming soon )",
  },
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

        <div class="w-full my-10 px-4 md:px-0 md:my-20">
          <div
            v-for="(group, groupIndex) in treatmentGroups"
            :key="groupIndex"
            class="mb-10 text-start"
          >
            <span class="font-semibold text-lg mb-4 inline-block">{{
              group.title
            }}</span>

            <AccordionList
              v-if="group.items && group.items.length"
              :items="group.items"
              :baseIndex="
                treatmentGroups
                  .slice(0, groupIndex)
                  .reduce((sum, g) => sum + (g.items ? g.items.length : 0), 0)
              "
              :openIndex="openIndex"
              @toggle="toggleAccordion"
            />
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
