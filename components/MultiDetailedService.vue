<script setup>
import { ref } from "vue";
import AccordionList from "./AccordionList.vue";

const treatmentGroups = [
  {
    title: "Signature skin",
    descr:
      "Powered by the Original Dr. Schrammek Professional System. Each facial begins with a professional skin assessment and thoughtful consultation. We work exclusively with original German Dr. Schrammek formulations, designed to restore balance, strengthen the skin barrier, and support long-term skin health.",
    items: [
      {
        title: "BIOGLOW Signature Skin Ritual —\u00A0",
        subtitle: "60 min / 6500 RSD",
        text: "Our most balanced and most requested facial. A personalized treatment designed according to your skin’s current condition and long-term needs. Includes precise cleansing, refined exfoliation, targeted mask therapy, relaxing facial massage, and protective finishing care. Manual purification may be incorporated when necessary. Structured for visible results. Designed for lasting balance.",
      },
      {
        title: "BIOGLOW Signature Skin Ritual Extended —\u00A0",
        subtitle: "90 min / 10,000 RSD",
        text: "An immersive renewal experience featuring advanced peeling protocols (including the Triple Effect approach), manual lifting techniques, and extended relaxation time. Corrective yet deeply calming. For skin transformation and nervous system reset.",
      },
      {
        title: "BIOGLOW Cleanse & Go —\u00A0",
        subtitle: "40 min / 4,200 RSD",
        text: "A focused professional refresh treatment ideal between intensive protocols or before important occasions. Includes cleansing, gentle exfoliation, targeted mask therapy, and protective finishing care. Deep pore purification (manual extraction) is not included in this treatment. When deeper cleansing is required, it can be added as Precision Skin Refinement, performed with meticulous extraction techniques and followed by Darsonval high-frequency therapy to calm the skin and support circulation. Efficient. Intentional. Restorative.",
      },
      {
        title: "BIOGLOW Signature Renewal Ritual —\u00A0",
        subtitle: "150 min / 12,500 RSD",
        text: "Our most complete face & body experience. A carefully sequenced ritual combining therapeutic body massage, reflexology, scalp care, and a mini facial. This is not simply a treatment. It is a full return to yourself.",
      },
    ],
  },
  {
    title: "Enhance your rituals",
    items: [
      {
        title: "Precision Skin Refinement —\u00A0",
        subtitle: "1,500 RSD",
        text: "Manual comedone extraction performed with precision and care when additional deep cleansing is required. Finished with Darsonval high-frequency therapy to calm the skin, stimulate circulation, and support recovery.",
      },
      {
        title: "Hand Glow Ritual —\u00A0",
        subtitle: "1,800 RSD",
        text: "Express manicure using the original CND Shellac system — the final polished detail of your ritual.",
      },
      {
        title: "Body Sculpt Add-On —\u00A0",
        subtitle: "20 min / 2,500 RSD",
        text: "Targeted stimulation supporting circulation and tissue tone using muscle stimulation technology. Powered by Ultra Contour Touch technology.",
      },
    ],
  },
  {
    title: "Body rituals",
    descr:
      "Weekend Specialist Collection. Led by a senior physiotherapist with 30 years of experience. These rituals combine clinical knowledge with spa sensitivity. Every movement has intention.",
    items: [
      {
        title: "Deep Release Body Ritual —\u00A0",
        subtitle: "50 min / 4,500 RSD",
        text: "Structured full-body massage focused on releasing muscular tension, improving circulation, and restoring functional balance. Especially beneficial for stress carried in the back, neck, and shoulders.",
      },
      {
        title: "Deep Release Body Ritual Extended —\u00A0",
        subtitle: "80 min / 6,800 RSD",
        text: "A deeper therapeutic session with extended focus on specific areas of discomfort and long-term muscular overload.",
      },
      {
        title: "Leg Renewal Sculpt Ritual —\u00A0",
        subtitle: "30 / 50 min - 3,000 / 4,800 RSD",
        text: "Targeted leg treatment combining drainage techniques and sculpting methods for improved microcirculation and lightness.",
      },
      {
        title: "Head & Neck Reset Ritual —\u00A0",
        subtitle: "30 min / 3,000 RSD",
        text: "Focused ritual for neck, shoulders, and scalp — where emotional tension often accumulates. Quiet. Grounding. Necessary.",
      },
      {
        title: "Reflex Balance Foot Ritual —\u00A0",
        subtitle: "50 min / 4,800 RSD",
        text: "Reflex stimulation combined with relaxation techniques to support full-body harmony and balance.",
      },
    ],
  },
  {
    title: "Body contour rituals",
    items: [
      {
        title: "BIOGLOW Body Sculpt Ritual —\u00A0",
        subtitle: "90 min / 7,900 RSD",
        text: "A complete body ritual designed to stimulate circulation, support tissue tone, and encourage natural metabolic activity. The treatment unfolds through carefully structured phases:",
        list: [
          "dry body brushing to activate circulation",
          "lymphatic preparation to support drainage pathways",
          "targeted muscle stimulation using Ultra Contour Touch technology",
          "fascia sculpting with gua sha techniques",
          "gentle cupping drainage",
          "calming integration massage",
        ],
        afterText:
          "The technology combines muscle stimulation and drainage activation designed to support tissue metabolism, circulation, and skin firmness. Technology supports the process. The ritual leads it.",
      },
      {
        title: "Targeted Contour Session —\u00A0",
        subtitle: "30-40 min / 4,200 RSD",
        text: "A focused treatment for clients who wish to work on a specific body area using muscle stimulation technology. Suitable for targeted areas such as abdomen, thighs, hips, or arms. Often chosen as a maintenance treatment between full rituals. Powered by Ultra Contour Touch technology.",
      },
    ],
  },
  {
    title: "Hand rituals",
    descr:
      "Original CND Shellac System. We use exclusively the original CND Shellac — the global pioneer in professional long-lasting nail care, formulated to protect the natural nail plate.",
    items: [
      {
        title: "Signature Gloss Manicure Ritual —\u00A0",
        subtitle: "2,500 RSD",
        text: "Precise express manicure with flawless Shellac finish.",
      },
      {
        title: "Signature Gloss Manicure Ritual – Spa Edition —\u00A0",
        subtitle: "3,000 RSD",
        text: "Extended manicure ritual with additional focus on cuticle care, skin nourishment, and relaxation.",
      },
      {
        title: "Natural Hand Care Ritual —\u00A0",
        subtitle: "2,000 RSD",
        text: "Polish-free manicure centered on nail health, restoration, and softness.",
      },
    ],
  },
  {
    title: "Smooth skin rituals",
    descr: "No parallel treatments. No rush. No exposure.",
    items: [
      {
        title: "Waxing performed in a private, woman-only space",
        text: "30 - 50 - 80 min /  1,500 - 2,500 - 4,000 RSD",
      },
    ],
  },
];

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <div class="border-black bg-[#ECE9E1] w-full relative">
    <div class="container flex justify-center px-4 md:px-0">
      <div class="py-14 md:py-28 max-w-2xl w-full text-center">
        <h3
          class="font-serifDisplay text-[24px] md:text-[42px] font-extralight uppercase tracking-[-1px] leading-[34px]"
        >
          Our Treatments
        </h3>

        <div class="w-full my-20">
          <div
            v-for="(group, groupIndex) in treatmentGroups"
            :key="groupIndex"
            class="mb-10 text-start"
          >
            <span class="font-semibold text-lg mb-4 inline-block mt-10">{{
              group.title
            }}</span>
            <div v-if="group.descr">
              <p class="text-[12px] md:text-[14px] mt-2 mb-8 md:mb-14">
                {{ group.descr }}
              </p>
            </div>
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
