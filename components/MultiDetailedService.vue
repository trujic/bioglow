<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import AccordionList from "./AccordionList.vue";
const localePath = useLocalePath();
const { t } = useI18n();
const openIndex = ref(null);

const treatmentGroupDefs = [
  {
    titleKey: "treatments.signatureSkin.title",
    descrKey: "treatments.signatureSkin.descr",
    items: [
      {
        titleKey: "treatments.signatureSkin.bioglow.title",
        subtitleKey: "treatments.signatureSkin.bioglow.subtitle",
        textKey: "treatments.signatureSkin.bioglow.text",
      },
      {
        titleKey: "treatments.signatureSkin.bioglowExtended.title",
        subtitleKey: "treatments.signatureSkin.bioglowExtended.subtitle",
        textKey: "treatments.signatureSkin.bioglowExtended.text",
      },
      {
        titleKey: "treatments.signatureSkin.cleanseGo.title",
        subtitleKey: "treatments.signatureSkin.cleanseGo.subtitle",
        textKey: "treatments.signatureSkin.cleanseGo.text",
      },
      {
        titleKey: "treatments.signatureSkin.renewalRitual.title",
        subtitleKey: "treatments.signatureSkin.renewalRitual.subtitle",
        textKey: "treatments.signatureSkin.renewalRitual.text",
      },
    ],
  },
  {
    titleKey: "treatments.enhance.title",
    items: [
      {
        titleKey: "treatments.enhance.precisionRefinement.title",
        subtitleKey: "treatments.enhance.precisionRefinement.subtitle",
        textKey: "treatments.enhance.precisionRefinement.text",
      },
      {
        titleKey: "treatments.enhance.handGlow.title",
        subtitleKey: "treatments.enhance.handGlow.subtitle",
        textKey: "treatments.enhance.handGlow.text",
      },
      {
        titleKey: "treatments.enhance.bodySculptAddon.title",
        subtitleKey: "treatments.enhance.bodySculptAddon.subtitle",
        textKey: "treatments.enhance.bodySculptAddon.text",
      },
    ],
  },
  {
    titleKey: "treatments.bodyRituals.title",
    descrKey: "treatments.bodyRituals.descr",
    items: [
      {
        titleKey: "treatments.bodyRituals.deepRelease.title",
        subtitleKey: "treatments.bodyRituals.deepRelease.subtitle",
        textKey: "treatments.bodyRituals.deepRelease.text",
      },
      {
        titleKey: "treatments.bodyRituals.deepReleaseExtended.title",
        subtitleKey: "treatments.bodyRituals.deepReleaseExtended.subtitle",
        textKey: "treatments.bodyRituals.deepReleaseExtended.text",
      },
      {
        titleKey: "treatments.bodyRituals.legRenewal.title",
        subtitleKey: "treatments.bodyRituals.legRenewal.subtitle",
        textKey: "treatments.bodyRituals.legRenewal.text",
      },
      {
        titleKey: "treatments.bodyRituals.headNeck.title",
        subtitleKey: "treatments.bodyRituals.headNeck.subtitle",
        textKey: "treatments.bodyRituals.headNeck.text",
      },
      {
        titleKey: "treatments.bodyRituals.reflexBalance.title",
        subtitleKey: "treatments.bodyRituals.reflexBalance.subtitle",
        textKey: "treatments.bodyRituals.reflexBalance.text",
      },
    ],
  },
  {
    titleKey: "treatments.bodyContour.title",
    items: [
      {
        titleKey: "treatments.bodyContour.bodySculpt.title",
        subtitleKey: "treatments.bodyContour.bodySculpt.subtitle",
        textKey: "treatments.bodyContour.bodySculpt.text",
        listKeys: [
          "treatments.bodyContour.bodySculpt.list.0",
          "treatments.bodyContour.bodySculpt.list.1",
          "treatments.bodyContour.bodySculpt.list.2",
          "treatments.bodyContour.bodySculpt.list.3",
          "treatments.bodyContour.bodySculpt.list.4",
          "treatments.bodyContour.bodySculpt.list.5",
        ],
        afterTextKey: "treatments.bodyContour.bodySculpt.afterText",
      },
      {
        titleKey: "treatments.bodyContour.targetedContour.title",
        subtitleKey: "treatments.bodyContour.targetedContour.subtitle",
        textKey: "treatments.bodyContour.targetedContour.text",
      },
    ],
  },
  {
    titleKey: "treatments.handRituals.title",
    descrKey: "treatments.handRituals.descr",
    items: [
      {
        titleKey: "treatments.handRituals.signatureGloss.title",
        subtitleKey: "treatments.handRituals.signatureGloss.subtitle",
        textKey: "treatments.handRituals.signatureGloss.text",
      },
      {
        titleKey: "treatments.handRituals.signatureGlossSpa.title",
        subtitleKey: "treatments.handRituals.signatureGlossSpa.subtitle",
        textKey: "treatments.handRituals.signatureGlossSpa.text",
      },
      {
        titleKey: "treatments.handRituals.naturalHandCare.title",
        subtitleKey: "treatments.handRituals.naturalHandCare.subtitle",
        textKey: "treatments.handRituals.naturalHandCare.text",
      },
    ],
  },
  {
    titleKey: "treatments.smoothSkin.title",
    descrKey: "treatments.smoothSkin.descr",
    items: [
      {
        titleKey: "treatments.smoothSkin.waxing.title",
        textKey: "treatments.smoothSkin.waxing.text",
      },
    ],
  },
];

const treatmentGroups = computed(() =>
  treatmentGroupDefs.map((group) => ({
    title: t(group.titleKey),
    descr: group.descrKey ? t(group.descrKey) : undefined,
    items: group.items.map((item) => ({
      title: t(item.titleKey),
      subtitle: item.subtitleKey ? t(item.subtitleKey) : undefined,
      text: item.textKey ? t(item.textKey) : undefined,
      list: item.listKeys ? item.listKeys.map((k) => t(k)) : undefined,
      afterText: item.afterTextKey ? t(item.afterTextKey) : undefined,
    })),
  }))
);

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
          {{ $t("Our treatments") }}
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
              <p
                class="text-[12px] md:text-[14px] mt-2 mb-8 md:mb-14 w-full md:w-[90%]"
              >
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

        <NuxtLink :to="localePath('contact')">
          <button class="button">
            <span> {{ $t("book an appointment") }} </span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
