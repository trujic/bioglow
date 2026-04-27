<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import flower from "~/assets/images/flower-2.png";
import logo from "~/assets/images/bio-glow-logo.png";
const localePath = useLocalePath();
const { t, te } = useI18n();
const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const sectionKeys = ["overview", "facial", "skincare", "consulting"];

const educationSections = computed(() =>
  sectionKeys.map((key) => ({
    key,
    title: t(`education.sections.${key}.title`),
  }))
);

const topicKeys = {
  facial: 7,
  skincare: 5,
  consulting: 5,
};

const formatKeys = {
  facial: 3,
};
</script>

<template>
  <div class="bg-[#ECE9E1] md:py-20 py-10 relative">
    <div>
      <!-- HEADER -->
      <div class="mb-32 md:mb-60 px-4 md:px-0">
        <h3
          class="text-[36px] md:text-[64px] text-black text-center font-light pb-[12px] md:pb-[24px] font-serifDisplay leading-[60px] md:leading-[100px] tracking-[-3px] md:tracking-[-6px] mt-20 md:mt-30"
        >
          {{ $t("education.pageTitle") }}
        </h3>

        <p
          class="font-helveticaDisplay my-4 text-justify md:text-center max-w-3xl mt-4 md:mt-12 md:mx-auto"
        >
          {{ $t("education.headerText1") }}<br /><br />
          {{ $t("education.headerText2") }}<br /><br />
          {{ $t("education.headerText3") }}<br /><br />
          {{ $t("education.headerText4") }}
          <strong>{{ $t("education.headerText4Bold") }}</strong>
        </p>
      </div>

      <!-- VIDEO -->
      <FadeWrapper>
        <div class="relative h-[60vh] md:h-[70vh]">
          <video
            src="/videos/education-divider-video.mp4"
            autoplay
            muted
            loop
            playsinline
            class="absolute w-full h-[60vh] md:h-[70vh] object-cover"
            loading="lazy"
          ></video>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <img :src="logo" alt="white logo" class="w-56" />
          </div>
        </div>
      </FadeWrapper>

      <!-- INTRO -->
      <FadeWrapper>
        <div class="mt-32 md:mt-60 md-20 md:mb-40">
          <h4
            class="font-sloop text-center w-full text-[32px] md:text-[46px] mb-10"
          >
            {{ $t("education.uniqueTitle") }}
          </h4>

          <p
            class="font-helveticaDisplay text-justify md:text-center max-w-4xl mx-4 md:mx-auto"
          >
            {{ $t("education.uniqueText") }}
          </p>
        </div>
      </FadeWrapper>

      <!-- ACCORDION SECTION -->
      <FadeWrapper>
        <div class="max-w-3xl mx-4 md:mx-auto my-20">
          <div
            v-for="(section, i) in educationSections"
            :key="i"
            class="border-b border-black py-6"
          >
            <div
              class="flex items-center justify-between cursor-pointer"
              @click="toggleAccordion(i)"
            >
              <h5 class="uppercase">{{ section.title }}</h5>
              <span class="text-[20px] leading-none select-none">
                {{ openIndex === i ? "−" : "+" }}
              </span>
            </div>

            <transition name="fade">
              <div
                v-if="openIndex === i"
                class="mt-4 py-6 md:py-10 font-helveticaDisplay space-y-4 p-4"
              >
                <!-- OVERVIEW -->
                <template v-if="section.key === 'overview'">
                  <p>{{ $t("education.sections.overview.p1") }}</p>
                  <p>{{ $t("education.sections.overview.p2") }}</p>
                  <p>{{ $t("education.sections.overview.p3") }}</p>
                  <p>{{ $t("education.sections.overview.p4") }}</p>
                  <p>{{ $t("education.sections.overview.p5") }}</p>
                </template>

                <!-- FACIAL TREATMENT EDUCATION -->
                <template v-else-if="section.key === 'facial'">
                  <p>{{ $t("education.sections.facial.p1") }}</p>
                  <p>{{ $t("education.sections.facial.p2") }}</p>
                  <p>{{ $t("education.sections.facial.topicsLabel") }}</p>
                  <ul class="list-disc ml-6 space-y-1">
                    <li v-for="n in topicKeys.facial" :key="n">
                      {{ $t(`education.sections.facial.topics.${n - 1}`) }}
                    </li>
                  </ul>
                  <p v-if="te('education.sections.facial.p3')">
                    {{ $t("education.sections.facial.p3") }}
                  </p>
                  <p>{{ $t("education.sections.facial.formatsLabel") }}</p>
                  <ul class="list-disc ml-6 space-y-1">
                    <li v-for="n in formatKeys.facial" :key="n">
                      {{ $t(`education.sections.facial.formats.${n - 1}`) }}
                    </li>
                  </ul>
                </template>

                <!-- SKINCARE WORKSHOPS -->
                <template v-else-if="section.key === 'skincare'">
                  <p>{{ $t("education.sections.skincare.p1") }}</p>
                  <p>{{ $t("education.sections.skincare.p2") }}</p>
                  <p>{{ $t("education.sections.skincare.topicsLabel") }}</p>
                  <ul class="list-disc ml-6 space-y-1">
                    <li v-for="n in topicKeys.skincare" :key="n">
                      {{ $t(`education.sections.skincare.topics.${n - 1}`) }}
                    </li>
                  </ul>
                  <p v-if="te('education.sections.skincare.p3')">
                    {{ $t("education.sections.skincare.p3") }}
                  </p>
                </template>

                <!-- SPA & BEAUTY CONSULTING -->
                <template v-else-if="section.key === 'consulting'">
                  <p>{{ $t("education.sections.consulting.p1") }}</p>
                  <p>{{ $t("education.sections.consulting.topicsLabel") }}</p>
                  <ul class="list-disc ml-6 space-y-1">
                    <li v-for="n in topicKeys.consulting" :key="n">
                      {{ $t(`education.sections.consulting.topics.${n - 1}`) }}
                    </li>
                  </ul>
                  <p v-if="te('education.sections.consulting.p2')">
                    {{ $t("education.sections.consulting.p2") }}
                  </p>
                  <p>
                    {{ $t("education.sections.consulting.p3") }}
                  </p>
                </template>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA -->
        <div class="flex flex-col w-full text-center mt-40 gap-6 pb-10 md:pb-0">
          <span class="text-[16px] md:text-[18px]">
            {{ $t("education.ctaText") }}
          </span>
          <div class="container">
            <NuxtLink :to="localePath('contact')">
              <button class="button">
                <span class="relative z-10">{{
                  $t("education.ctaButton")
                }}</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </FadeWrapper>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
