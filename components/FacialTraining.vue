<script setup>
import { ref } from "vue";
import flower from "~/assets/images/flower-2.png";
import logo from "~/assets/images/bio-glow-logo.png";

const training = [
  { title: "Anatomy of the skin and common conditions" },
  { title: "How to structure a professional facial treatment" },
  { title: "Deep cleansing techniques: chemical & manual" },
  { title: "Skin exfoliation – methods & practice" },
  { title: "Masks – selection, purpose, application" },
  {
    title: "Facial massage techniques – relaxation, toning, lymphatic drainage",
  },
  { title: "Spa vs. medical facial treatments" },
  { title: "Proper product layering: serums, creams, finishing steps" },
  { title: "The art of creating a calm, client-centered spa experience" },
  { title: "Practical sessions with models" },
  { title: "Insights into leading spa brands and protocols" },
];

const format = [
  { title: "1-on-1 private training, fully personalized" },
  { title: "Held at Bioglow Studio in Niš, Serbia" },
  { title: "Includes theory + hands-on practice" },
  { title: "Duration: 2 to 5 days (depending on program choice)" },
  { title: "All materials and models are provided" },
];

// accordion state
const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// sections
const educationSections = [
  {
    title: "Format",
    items: format.map((i) => i.title),
  },
  {
    title: "What you will learn",
    items: training.map((i) => i.title),
  },
  {
    title: "Additional support",
    items: [
      "Guidance in building or refining their treatment style",
      "Professional support in setting up their own beauty business",
      "Spa service design, pricing, and customer experience tips",
      "Career development and transition within the spa & wellness industry",
    ],
  },
];
</script>

<template>
  <div class="bg-[#ECE9E1] md:py-20 py-10 relative">
    <div>
      <!-- HEADER -->
      <div class="mb-32 md:mb-60 px-4 md:px-0">
        <h3
          class="text-[46px] md:text-[84px] text-black text-center font-light pb-[12px] md:pb-[24px] font-serifDisplay leading-[60px] md:leading-[100px] tracking-[-3px] md:tracking-[-8px] mt-20 md:mt-40"
        >
          Bioglow 1-on-1 Facial Training
        </h3>

        <p
          class="font-helveticaDisplay my-4 text-justify md:text-center max-w-3xl mt-4 md:mt-0 md:mx-auto"
        >
          At Bioglow, we believe that expertise is built through presence,
          precision, and practice. Our private facial training program is
          designed for beauty professionals who want to go beyond surface-level
          treatments and master the “spa way” — a method rooted in anatomy,
          technique, and holistic care.
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
            What makes our program unique?
          </h4>

          <p
            class="font-helveticaDisplay text-justify md:text-center max-w-4xl mx-4 md:mx-auto"
          >
            Led by an international spa trainer with over a decade of experience
            in five-star hotels and cruise ship spas, this 1-on-1 training is
            tailored to your level and your learning style. Whether you are a
            beginner or a seasoned esthetician looking to refine your touch, the
            program is built to elevate your skill and confidence.
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
            <!-- TITLE + PLUS ICON -->
            <div
              class="flex items-center justify-between cursor-pointer"
              @click="toggleAccordion(i)"
            >
              <h5 class="uppercase">{{ section.title }}</h5>

              <!-- PLUS / MINUS ICON -->
              <span class="text-[20px] leading-none select-none">
                {{ openIndex === i ? "−" : "+" }}
              </span>
            </div>

            <!-- CONTENT -->
            <transition name="fade">
              <div v-if="openIndex === i" class="mt-4 py-6 md:py-10">
                <ul class="list-disc list-inside">
                  <li
                    v-for="(item, idx) in section.items"
                    :key="idx"
                    class="ml-4"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA -->
        <div class="flex flex-col w-full text-center mt-40 gap-6 pb-10 md:pb-0">
          <span class="text-[16px] md:text-[18px]">
            Interested in our education programs?
          </span>
          <div class="container">
            <NuxtLink to="/contact">
              <button
                class="max-w-full w-full md:max-w-fit p-2 px-4 border border-black text-xs md:text-base uppercase"
              >
                contact us
              </button>
            </NuxtLink>
          </div>
        </div>
      </FadeWrapper>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
