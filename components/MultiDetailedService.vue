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
    descrKey: "treatments.bodyContour.descr",
    sectionLabelKey: "treatments.bodyContour.sectionLabel",
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
          "treatments.bodyContour.bodySculpt.list.6",
        ],
        afterTextKey: "treatments.bodyContour.bodySculpt.afterText",
      },
      {
        titleKey: "treatments.bodyContour.targetedContour.title",
        subtitleKey: "treatments.bodyContour.targetedContour.subtitle",
        textKey: "treatments.bodyContour.targetedContour.text",
      },
    ],
    programsSectionLabelKey: "treatments.bodyContour.programs.sectionLabel",
    programsSectionSubtextKey: "treatments.bodyContour.programs.sectionSubtext",
    programs: [
      {
        titleKey: "treatments.bodyContour.programs.silhouette.title",
        subtitleKey: "treatments.bodyContour.programs.silhouette.subtitle",
        textKey: "treatments.bodyContour.programs.silhouette.text",
        contentsLabelKey:
          "treatments.bodyContour.programs.silhouette.contentsLabel",
        listKeys: [
          "treatments.bodyContour.programs.silhouette.list.0",
          "treatments.bodyContour.programs.silhouette.list.1",
          "treatments.bodyContour.programs.silhouette.list.2",
          "treatments.bodyContour.programs.silhouette.list.3",
        ],
        afterTextKey: "treatments.bodyContour.programs.silhouette.afterText",
      },
      {
        titleKey: "treatments.bodyContour.programs.sculptLift.title",
        subtitleKey: "treatments.bodyContour.programs.sculptLift.subtitle",
        textKey: "treatments.bodyContour.programs.sculptLift.text",
        contentsLabelKey:
          "treatments.bodyContour.programs.sculptLift.contentsLabel",
        listKeys: [
          "treatments.bodyContour.programs.sculptLift.list.0",
          "treatments.bodyContour.programs.sculptLift.list.1",
        ],
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
  {
    titleKey: "treatments.biologyTalk.title",
    items: [
      {
        titleKey: "treatments.biologyTalk.talking.title",
        textKey: "treatments.biologyTalk.talking.text",
        listKeys: [
          "treatments.biologyTalk.talking.list.0",
          "treatments.biologyTalk.talking.list.1",
          "treatments.biologyTalk.talking.list.2",
        ],
        afterTextKey: "treatments.biologyTalk.talking.afterText",
      },
    ],
  },
  {
    titleKey: "treatments.fallAnnouncement.title",
    items: [
      {
        titleKey: "treatments.fallAnnouncement.descr",
        textKey: "treatments.fallAnnouncement.text",
        listKeys: [
          "treatments.fallAnnouncement.list.0",
          "treatments.fallAnnouncement.list.1",
          "treatments.fallAnnouncement.list.2",
        ],
        afterTextKey: "treatments.fallAnnouncement.afterText",
      },
    ],
    noteKeys: [
      "treatments.fallAnnouncement.notes.0",
      "treatments.fallAnnouncement.notes.1",
      "treatments.fallAnnouncement.notes.2",
    ],
  },
];

const treatmentGroups = computed(() =>
  treatmentGroupDefs.map((group) => ({
    title: t(group.titleKey),
    descr: group.descrKey ? t(group.descrKey) : undefined,
    sectionLabel: group.sectionLabelKey ? t(group.sectionLabelKey) : undefined,
    items: group.items.map((item) => ({
      title: t(item.titleKey),
      subtitle: item.subtitleKey ? t(item.subtitleKey) : undefined,
      text: item.textKey ? t(item.textKey) : undefined,
      list: item.listKeys ? item.listKeys.map((k) => t(k)) : undefined,
      afterText: item.afterTextKey ? t(item.afterTextKey) : undefined,
    })),
    programsSectionLabel: group.programsSectionLabelKey
      ? t(group.programsSectionLabelKey)
      : undefined,
    programsSectionSubtext: group.programsSectionSubtextKey
      ? t(group.programsSectionSubtextKey)
      : undefined,
    programs: group.programs
      ? group.programs.map((p) => ({
          title: t(p.titleKey),
          subtitle: p.subtitleKey ? t(p.subtitleKey) : undefined,
          text: p.textKey ? t(p.textKey) : undefined,
          contentsLabel: p.contentsLabelKey ? t(p.contentsLabelKey) : undefined,
          list: p.listKeys ? p.listKeys.map((k) => t(k)) : undefined,
          afterText: p.afterTextKey ? t(p.afterTextKey) : undefined,
        }))
      : undefined,
    notes: group.noteKeys ? group.noteKeys.map((k) => t(k)) : undefined,
  }))
);

const groupOffsets = computed(() => {
  const offsets = [];
  let counter = 0;
  for (const group of treatmentGroups.value) {
    const itemsCount = group.items?.length ?? 0;
    const programsCount = group.programs?.length ?? 0;
    offsets.push({ items: counter, programs: counter + itemsCount });
    counter += itemsCount + programsCount;
  }
  return offsets;
});

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
            class="mb-20 text-start"
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

            <!-- Individual treatments label (bodyContour only) -->
            <p
              v-if="group.sectionLabel"
              class="text-[11px] md:text-[12px] uppercase tracking-widest text-gray-500 mb-4"
            >
              {{ group.sectionLabel }}
            </p>

            <AccordionList
              v-if="group.items && group.items.length"
              :items="group.items"
              :baseIndex="groupOffsets[groupIndex].items"
              :openIndex="openIndex"
              @toggle="toggleAccordion"
            />

            <template v-if="group.programs">
              <div class="mt-14 mb-2">
                <p class="font-semibold text-lg inline-block">
                  {{ group.programsSectionLabel }}
                </p>
                <p
                  v-if="group.programsSectionSubtext"
                  class="text-[12px] md:text-[13px] mt-1 mb-6 italic text-gray-600"
                >
                  {{ group.programsSectionSubtext }}
                </p>
              </div>
              <AccordionList
                :items="group.programs"
                :baseIndex="groupOffsets[groupIndex].programs"
                :openIndex="openIndex"
                @toggle="toggleAccordion"
              />
            </template>

            <!-- Disclaimer notes -->
            <template v-if="group.notes">
              <ul class="mt-10 space-y-3">
                <li
                  v-for="(note, ni) in group.notes"
                  :key="ni"
                  class="text-[11px] md:text-[12px] text-gray-500 italic leading-relaxed"
                >
                  *{{ note }}
                </li>
              </ul>
            </template>
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
